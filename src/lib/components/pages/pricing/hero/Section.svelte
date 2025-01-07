<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Hero } from '../../../../../types/pricing.types';

  let { hero }: { hero: Hero } = $props();
  let { sectionIcon, sectionName, sectionTitle, sectionDescription } =
    $derived(hero);

</script>

<div class="mt-24">
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
  <div class="mt-5 flex items-center gap-5 text-center">
    {#if Array.isArray(sectionTitle[0]?.children) && Array.isArray(sectionTitle[1]?.children)}
      <h3
        class="leading-[4.495rem text-nowrap font-geist text-[1.875rem] font-bold text-[#FFF] lg:text-[3.875rem]">
        {sectionTitle[0]?.children[0]?.text}
      </h3>
      <h3
        class="
        text-nowrap bg-gradient-to-r from-[#731AFF] to-[#FCCEEE]
                bg-clip-text font-geist text-[1.875rem] font-bold
                text-transparent lg:text-[3.875rem]">
        {sectionTitle[1]?.children[0]?.text}
      </h3>
    {/if}
  </div>
  <p
    class="mx-auto mt-4 w-[40.3125rem] text-center text-xl font-medium leading-[1.875rem] text-white">
    {sectionDescription}
  </p>
</div>
