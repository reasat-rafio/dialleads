<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { HeroProps } from '../../../../types/contact.types';

  let { props }: { props: HeroProps } = $props();

  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="absolute top-[5.41rem] px-[0.94rem] lg:top-[13.75rem] xl:px-0">
  <div class="relative">
    <div
      class="container mx-auto w-full max-w-sm text-center text-white sm:max-w-xl md:max-w-3xl lg:h-[10.5rem] lg:max-w-5xl xl:max-w-7xl">
      <div class="z-50 flex flex-col items-center justify-center">
        <div
          class="mb-[0.75rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
          <SanityImage
            class=" h-[1.25rem] w-[1.25rem] "
            src={props?.sectionIcon}
            sizes="05vw"
            imageUrlBuilder={imgBuilder} />
          <h1 class="text-[1rem] font-normal text-white">
            {props.sectionTitle}
          </h1>
        </div>

        {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children)}
          <h1 class="mb-[1.62rem] text-[1.625rem] font-semibold lg:text-[3rem]">
            {props?.title[0]?.children[0]?.text}

            <span
              class="bg-gradient-to-r from-[#731AFF] to-[#FCCEEE] bg-clip-text text-transparent">
              {props.title[1].children[0]?.text}
            </span>
          </h1>
        {/if}

        <h2
          class="mt-[1.25rem] max-w-[41.1875rem] text-[1.25rem] font-normal leading-[1.875rem] text-white">
          {props.description}
        </h2>
      </div>
    </div>
  </div>
</div>
