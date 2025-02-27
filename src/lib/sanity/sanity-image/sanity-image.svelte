<script lang="ts">
  import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
  import type {
    ImageUrlBuilderOptionsWithAliases,
    SanityImageSource,
  } from '@sanity/image-url/lib/types/types';
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { defaultSanityImageDefaults } from './defaults';
  import {
    generateWidths,
    isSanityDimensionedImage,
    isSanityImageWithLqip,
  } from './fns';
  import type { AutoWidths, SanityImageProps } from './types';
  import { cn } from '$lib/utils';

  //Max default allows for 1920px width @ 2x
  const defaults = (globalThis.sanityImageDefaults ??=
    defaultSanityImageDefaults);

  interface Props {
    class?: string;
    imageUrlBuilder?: ImageUrlBuilder;
    src: SanityImageSource;
    widths?: number[] | AutoWidths;
    lqip?: boolean;
    options?: Partial<ImageUrlBuilderOptionsWithAliases>;
    autoFormat?: boolean;
    fadeInAnimation?: boolean;
    innerClass?: string;
  }

  let {
    class: className,
    imageUrlBuilder,
    src,
    widths,
    lqip,
    options,
    autoFormat,
    fadeInAnimation,
    innerClass,
    ...rest
  }: Props &
    SanityImageProps &
    Omit<HTMLImgAttributes, 'src'> & { fadeInAnimation?: boolean } = $props();

  function imgProps() {
    const builder = imageUrlBuilder
      ?.image(src)
      .withOptions({ auto: autoFormat ? 'format' : undefined });

    if (!builder) {
      throw new Error('No image url builder specified, and no default set!');
    }

    const determinedWidths = Array.isArray(widths)
      ? widths
      : generateWidths(widths ?? defaults.autoWidths, src);

    const determinedLqip = lqip ?? defaults.lqip;

    const [width, height] = isSanityDimensionedImage(src)
      ? [
          src.asset.metadata.dimensions.width,
          src.asset.metadata.dimensions.height,
        ]
      : [undefined, undefined];

    const srcset = determinedWidths
      .map(
        (w: number) =>
          `${builder
            .width(w)
            .withOptions(options ?? {})
            .url()} ${w}w`,
      )
      .join(', ');

    const lqipStyle = `background: ${
      isSanityImageWithLqip(src)
        ? `url(${src.asset.metadata.lqip}) no-repeat`
        : undefined
    }; background-size: cover; `;
    let style = (lqip ? lqipStyle : '') + (rest.style ?? '');

    return { builder, determinedLqip, width, height, srcset, style };
  }

  let img = $state<HTMLImageElement>();
  let imgWrapper = $state<HTMLDivElement>();
  let _imgProps = imgProps();
  let isLoaded = $state(false);

  $effect(() => {
    if (img) {
      if (img.complete) isLoaded = true;
      else img.addEventListener('load', () => (isLoaded = true));
    }
  });
</script>

<div
  bind:this={imgWrapper}
  class:loaded={isLoaded}
  class={cn('blurred-img relative h-full w-full', className)}
  style={_imgProps.style}>
  <img
    bind:this={img}
    style="--initial-opacity: {fadeInAnimation && lqip ? 0 : 1}"
    src={_imgProps.builder.url()}
    srcset={_imgProps.srcset}
    width={_imgProps.width}
    height={_imgProps.height}
    class={innerClass}
    {...rest} />
</div>

<style>
  img {
    opacity: var(--initial-opacity);
    transition: opacity 250ms ease-in-out;
  }
  .blurred-img.loaded img {
    opacity: 1;
  }

  .blurred-img::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background-color: white;
  }
  .blurred-img.loaded::before {
    animation: none;
    content: none;
  }
</style>
