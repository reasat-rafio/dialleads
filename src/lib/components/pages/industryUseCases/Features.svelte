<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { FeaturesProps } from '../../../../types/industryUseCases.types';

  let { props }: { props: FeaturesProps } = $props();
</script>

<div
  class="container mx-[1.25rem] mt-[2.5rem] lg:mx-auto lg:mt-[7.5rem] xl:max-w-7xl">
  <div class="grid grid-cols-5 gap-x-[0rem] gap-y-[2rem] lg:gap-x-[5.81rem]">
    <div class="col-span-5 w-full lg:col-span-2">
      {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children)}
        <h2
          class=" text-center text-[1.625rem] font-semibold leading-[1.95rem] lg:text-left lg:text-[3rem] lg:leading-[3.6rem]">
          <!-- max-w-[20.70rem] -->
          <span class="text-[#6D28D9]">
            {props?.title[0]?.children[0]?.text}
          </span>
          {props.title[1].children[0]?.text}
        </h2>
      {/if}
      <p
        class="mt-[0.62rem] w-full text-center text-[1rem] font-normal leading-[1.875rem] lg:text-left lg:text-[1.25rem]">
        {props.description}
      </p>
    </div>
    <div class="col-span-5 lg:col-span-3">
      <div
        class="grid grid-cols-2 justify-center gap-x-[1.81rem] gap-y-[1.81rem]">
        {#each props.subDetails as subDetail}
          <div
            class="col-span-2 w-fit max-w-fit rounded-[1rem] border p-[1.125rem] shadow-sm md:col-span-1 lg:p-[1.88rem]">
            <SanityImage
              class="h-[3.125rem] w-[3.125rem]"
              src={subDetail.featureImage}
              sizes="33vw"
              imageUrlBuilder={imgBuilder} />
            <h3
              class="mt-[1.5rem] w-[17.06rem] text-[1.375rem] font-semibold leading-[2.0625rem] lg:w-full">
              {subDetail.title}
            </h3>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
