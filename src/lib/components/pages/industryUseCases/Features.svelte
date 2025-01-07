<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { FeaturesProps } from '../../../../types/industryUseCases.types';

  let { props }: { props: FeaturesProps } = $props();
</script>

<div class="container mx-auto mt-[7.5rem]">
  <div class="grid grid-cols-5 gap-x-[5.81rem]">
    <div class="col-span-2">
      {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children)}
        <h2 class="text-[3rem] font-semibold leading-[3.6rem]">
          <span class="text-[#6D28D9]">
            {props?.title[0]?.children[0]?.text}
          </span>
          {props.title[1].children[0]?.text}
        </h2>
      {/if}
      <p class="text-[1.25rem] font-normal leading-[1.875rem]">
        {props.description}
      </p>
    </div>
    <div class="col-span-3">
      <div class="grid grid-cols-2 gap-x-[1.81rem] gap-y-[1.81rem]">
        {#each props.subDetails as subDetail}
          <div class="col-span-1 rounded-[1rem] border p-[1.88rem] shadow-sm">
            <SanityImage
              class="h-[3.125rem] w-[3.125rem] "
              src={subDetail.featureImage}
              sizes="33vw"
              imageUrlBuilder={imgBuilder} />
            <h3
              class="mt-[1.5rem] text-[1.375rem] font-semibold leading-[2.0625rem]">
              {subDetail.title}
            </h3>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
