<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { HeroProps } from '../../../../types/contact.types';

  let { props }: { props: HeroProps } = $props();

  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="bg-hero-gradient pt-[9.19rem] pb-[11.19rem] lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem]">
  <div class="relative">
    <div
      class="container mx-auto w-full max-w-sm text-center text-white sm:max-w-xl md:max-w-3xl lg:h-[10.5rem] lg:max-w-5xl xl:max-w-7xl">
      <div class="z-50 flex flex-col items-center justify-center">
        <div
          class="mb-[0.75rem] flex gap-x-[0.5rem] rounded-full border px-[1rem] py-[0.50rem] lg:mb-[1.5rem]">
          <SanityImage
            class=" h-[1.25rem] w-[1.25rem]  pt-[0.2rem] lg:pt-[0.3rem]"
            src={props?.sectionIcon}
            sizes="05vw"
            imageUrlBuilder={imgBuilder} />
          <h3 class="text-lg font-medium text-white">
            {props.sectionTitle}
          </h3>
        </div>

        {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children)}
          <h1
            class=" text-[1.625rem] font-semibold leading-[1.95rem] lg:text-[3.875rem] lg:font-extrabold lg:leading-[4.495rem]">
            {props?.title[0]?.children[0]?.text}

            <span
              class="bg-gradient-to-r from-[#A461FF] to-[#fca8e1] bg-clip-text text-transparent">
              {props.title[1].children[0]?.text}
            </span>
          </h1>
        {/if}

        <h2
          class="mt-[0.62rem] max-w-[41.1875rem] text-[1rem] font-normal leading-[1.5rem] text-white lg:mt-[1.25rem] lg:text-[1.25rem] lg:leading-[1.875rem]">
          {props.description}
        </h2>
      </div>
    </div>
    <!-- // image section  -->
    
  </div>
</div>


<div class="mx-5 absolute top-[25rem] sm:hidden">
  <div class="h-[26.25rem] w-full">
    <SanityImage
      class="h-[26.25rem] w-full "
      src={props?.contactPageImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
  </div>
</div>