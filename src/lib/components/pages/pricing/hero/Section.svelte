<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Hero } from '../../../../../types/pricing.types';

  let { hero }: { hero: Hero } = $props();
  let { sectionIcon, sectionName, sectionTitle } = $derived(hero);

  $inspect(sectionTitle);
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
  {#if Array.isArray(sectionTitle[0]?.children) && Array.isArray(sectionTitle[1]?.children)}
    <h2
      class="text-nowrap font-geist text-[1.875rem] font-bold text-[#FFF] lg:text-7xl">
      {sectionTitle[0]?.children[0]?.text}
    </h2>
    <h3
      class="bg-gradient-to-r from-[#731AFF] via-[#731AFF] to-[#FCCEEE]
                bg-clip-text font-geist text-[1.875rem] font-bold
                text-transparent lg:text-7xl">
      {sectionTitle[1]?.children[0]?.text}
    </h3>
  {/if}
</div>
