<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { Hero } from '../../../../../types/pricing.types';
  import VioletGradient from './VioletGradient.svelte';

  let { hero }: { hero: Hero } = $props();
  let { sectionIcon, sectionName, sectionTitle, sectionDescription } =
    $derived(hero);
</script>

<div class="container pt-[9.19rem]">
  <div
    class="mx-auto flex h-10 w-[7.125rem] items-center justify-center gap-2 rounded-[20rem]
       border px-3 py-2">
    <SanityImage
      class="mt-1 h-5 w-[1.3125rem]"
      src={sectionIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={sectionIcon?.alt || 'icon'} />
    <p class="font-geist text-lg font-medium text-white">{sectionName}</p>
  </div>
  <div
    class="mt-5 flex flex-col lg:flex-row leading-tight gap-2 mx-auto mb-3 w-fit text-nowrap text-center font-geist text-[1.875rem] font-bold text-[#FFF] lg:text-7xl">
    <PortableText
      value={sectionTitle}
      components={{
        marks: {
          violetGradient: VioletGradient,
        },
      }} />
  </div>
  <p
    class="mx-auto mt-4 w-full text-center text-xl font-medium leading-[1.875rem] text-white lg:w-[40.3125rem]">
    {sectionDescription}
  </p>
</div>
