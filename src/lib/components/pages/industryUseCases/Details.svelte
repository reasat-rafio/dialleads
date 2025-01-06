<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { DetailsProps } from '../../../../types/industryUseCases.types';

  let { props }: { props: DetailsProps } = $props();
</script>

<div class="container mx-auto">
  <div
    class=" mt-[6.25rem] flex w-full flex-col items-center justify-center text-center">
    <div class="max-w-[44.5625rem]">
      <h1 class="text-[2.75rem] font-semibold">
        {props?.title}
      </h1>
      <h1 class="mt-[1rem] pl-7 text-[1.125rem]">
        {props.description}
      </h1>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-2 items-center justify-center gap-x-8">
    {#each props.subDetails as subDetail}
      <div class="col-span-1 w-full">
        <h1 class="text-[1.875rem] font-semibold">{subDetail.title}</h1>
        <h1 class="text-[1.125rem]">{subDetail.description}</h1>
        <SanityImage
          class="w-auto"
          src={subDetail.detailsImage}
          sizes="33vw"
          imageUrlBuilder={imgBuilder} />
      </div>
    {/each}
  </div>
</div>

<!-- <div
  class=" mt-[6.25rem] flex max-w-[39.063rem] flex-col justify-center text-center">
  <h1 class=" border text-[2.75rem] font-semibold">
    {props?.title}
  </h1>
  <h1 class=" max-w-[31.25rem] border pl-7 text-[1.125rem]">
    {props.description}
  </h1>
</div>

<div class="mt-8 grid grid-cols-2 items-center justify-center gap-x-8 border">
  {#each props.subDetails as subDetail}
    <div class="col-span-1 max-w-[39.063rem]">
      <h1 class="text-[1.875rem] font-semibold">{subDetail.title}</h1>
      <h1 class="text-[1.125rem]">{subDetail.description}</h1>
      <SanityImage
        class="w-auto"
        src={subDetail.detailsImage}
        sizes="33vw"
        imageUrlBuilder={imgBuilder} />
    </div>
  {/each}
</div> -->

<Button
  href={props.link.internalLink}
  class="mt-8 h-[3.5rem] rounded-[0.75rem] bg-[#8B5CF6]   px-[2.25rem] py-[1.19rem] text-[1.125rem] font-medium">
  {props.link.title}
</Button>
