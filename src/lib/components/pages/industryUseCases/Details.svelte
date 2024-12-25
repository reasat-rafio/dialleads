<script>
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';

  let { props } = $props();
</script>

<!-- <div>Details</div> -->

<div class=" flex max-w-[39.063rem] flex-col justify-center text-center">
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
  <!-- <div class="col-span-1"></div>
  <div class="col-span-1"></div> -->
</div>

<Button
  class="mt-8 bg-[#5211B8] px-[1.563rem] py-[1.125rem] text-[1.25rem] font-semibold">
  {props.btnText}
</Button>
