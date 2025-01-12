<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Hero } from '../../../../../types/pricing.types';

  let { hero }: { hero: Hero } = $props();
  let { sectionIcon, sectionName, sectionTitle, sectionDescription } =
    $derived(hero);
</script>

<div class="container mt-24">
  <div
    class="mx-auto flex h-10 w-[7.125rem] items-center justify-center gap-2 rounded-[20rem]
       border px-3 py-2">
    <SanityImage
      class="mt-1 h-5 w-[1.3125rem]"
      src={sectionIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt="SliderMainImage" />
    <p class="font-geist text-lg font-bold text-white">{sectionName}</p>
  </div>
  <div class="mt-5 hidden items-center gap-5 text-center lg:flex">
    {#if Array.isArray(sectionTitle[0]?.children) && Array.isArray(sectionTitle[1]?.children)}
      <h1
        class="font-geist text-[1.625rem] font-bold text-[#FFF] lg:text-nowrap lg:text-[3.875rem] lg:leading-[4.495rem]">
        {sectionTitle[0]?.children[0]?.text}
        <span
          class="
        -[#731AFF] bg-gradient-to-r from-[#FCCEEE] bg-clip-text text-transparent lg:from-[#731AFF]
                lg:to-[#FCCEEE]
                ">
          {sectionTitle[1]?.children[0]?.text}
        </span>
      </h1>
    {/if}
  </div>
  <div
    class="mt-5 flex flex-col items-center text-center lg:hidden lg:flex-row lg:gap-5">
    {#if Array.isArray(sectionTitle[0]?.children) && Array.isArray(sectionTitle[1]?.children)}
      <h1
        class="text-nowrap font-geist text-[1.625rem] font-bold text-[#FFF] lg:text-[3.875rem] lg:leading-[4.495rem]">
        {sectionTitle[0]?.children[0]?.text}
        <span
          class="bg-gradient-to-r from-[#FCCEEE] to-[#731AFF] bg-clip-text text-transparent">
          {sectionTitle[1]?.children[0]?.text.split(' ')[0]}
        </span>
      </h1>
      <h1
        class="bg-gradient-to-r from-[#731AFF] to-[#935dea] bg-clip-text font-geist text-[1.625rem] font-bold text-transparent lg:text-[3.875rem]">
        {sectionTitle[1]?.children[0]?.text.split(' ').slice(1).join(' ')}
      </h1>
    {/if}
  </div>
  <p
    class="mx-auto mt-4 w-full text-center text-xl font-medium leading-[1.875rem] text-white lg:w-[40.3125rem]">
    {sectionDescription}
  </p>
</div>
