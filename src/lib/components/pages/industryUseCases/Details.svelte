<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { DetailsProps } from '../../../../types/industryUseCases.types';
  let { props }: { props: DetailsProps } = $props();
</script>

<div class="container mx-auto md:max-w-3xl lg:max-w-7xl">
  <div
    class=" mt-[2.74rem] flex w-full flex-col items-center justify-center text-center lg:mt-[6.25rem]">
    <div class="max-w-[44.5625rem]">
      <h1 class="text-[1.625rem] font-semibold lg:text-[2.75rem]">
        {props?.title}
      </h1>
      <h1 class="mt-[0.62rem] text-[1rem] lg:mt-[1rem] lg:text-[1.125rem]">
        {props.description}
      </h1>
    </div>
  </div>

  <div
    class=" mt-8 grid grid-cols-2 justify-center gap-x-8 gap-y-[2rem] lg:mt-[5.31rem]">
    {#each props.subDetails as subDetail}
      <div
        class="col-span-2 w-full text-center lg:col-span-1 lg:max-w-[30.5rem]">
        <h1 class=" text-[1rem] font-semibold lg:text-[1.875rem]">
          {subDetail.title}
        </h1>
        <h1 class="mb-[2.5rem] mt-[1rem] text-[1rem] lg:text-[1.125rem]">
          {subDetail.description}
        </h1>
        <SanityImage
          class="w-auto"
          src={subDetail.detailsImage}
          sizes="100vw"
          imageUrlBuilder={imgBuilder} />
      </div>
    {/each}
  </div>
</div>

<Button
  href={props.link.internalLink}
  class="mt-8 hidden h-[3.5rem] rounded-[0.75rem] bg-[#8B5CF6] px-[2.25rem]   py-[1.19rem] text-[1.125rem] font-medium lg:flex">
  {props.link.title}
</Button>
