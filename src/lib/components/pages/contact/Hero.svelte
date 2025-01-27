<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { HeroProps } from '../../../../types/contact.types';
  import { PortableText } from '@portabletext/svelte';
  import ViolateGradientV2 from './ViolateGradientV2.svelte';

  let { props }: { props: HeroProps } = $props();

  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
  class="relative bg-hero-gradient pt-[9.19rem] lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem]">
  <img
    src="/grid.png"
    alt="grid overlay"
    class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100 mix-blend-overlay" />
  <div class="relative pb-[20rem]">
    <div
      class="container mx-auto w-full max-w-sm text-center text-white sm:max-w-xl md:max-w-3xl lg:h-[10.5rem] lg:max-w-5xl xl:max-w-7xl">
      <div class="z-50 flex flex-col items-center justify-center">
        <SectionIconAndName
          wrapperClass="mt-0  md:mt-[.4rem]"
          sectionIcon={props?.sectionIcon}
          sectionName={props?.sectionTitle} />

        <h1
          class="text-[1.625rem] font-semibold leading-[1.95rem] lg:text-[3.875rem] lg:font-extrabold lg:leading-[4.495rem]">
          <PortableText
            value={props?.title}
            components={{
              marks: {
                violetGradientV2: ViolateGradientV2,
              },
            }} />
        </h1>

        <h2
          class="mt-[0.62rem] max-w-[41.1875rem] text-[1rem] font-normal leading-[1.5rem] text-white lg:mt-[1.25rem] lg:text-[1.25rem] lg:leading-[1.875rem]">
          {props.description}
        </h2>
      </div>
    </div>
    <!-- // image section  -->
  </div>
</div>

<div class="absolute top-[25rem] mx-5 sm:hidden">
  <div class="h-[26.25rem] w-full">
    <SanityImage
      class="h-[26.25rem] w-full "
      src={props?.contactPageImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
  </div>
</div>
