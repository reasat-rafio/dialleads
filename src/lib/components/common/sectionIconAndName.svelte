<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { cn } from '$lib/utils';
  import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

  interface Props {
    sectionName?: string;
    sectionIcon?: SanityImageObject;
    wrapperClass?: string;
    sectionTitle?: string;
    sectionNameClass?: string;
    sectionTitleClass?: string;
    bgColor?:string;
  }

  let {
    sectionName,
    sectionIcon,
    wrapperClass,
    sectionTitle,
    sectionTitleClass,
    sectionNameClass,
    bgColor
  }: Props = $props();
</script>

<div>
  <div
  style={bgColor}
    class={cn(
      'mx-auto flex w-fit items-center justify-center gap-2 rounded-full border px-3 py-2 mt-24',
      wrapperClass
    )}
  >
    <SanityImage
      class="h-[1.125rem] w-[1.125rem]"
      src={sectionIcon || ''}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt="sectionIcon"
    />
    <p class={cn('text-nowrap font-geist text-lg font-medium', sectionNameClass)}>
      {sectionName}
    </p>
  </div>
  <h2
    class={cn(
      'mt-6 text-center font-geist text-[1.625rem] font-semibold text-black lg:text-5xl',
      sectionTitleClass
    )}
  >
    {sectionTitle}
  </h2>
</div>
