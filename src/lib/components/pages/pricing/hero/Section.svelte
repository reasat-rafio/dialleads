<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { Hero } from '../../../../../types/pricing.types';
  import VioletGradient from './VioletGradient.svelte';
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';

  let { hero }: { hero: Hero } = $props();
  let { sectionIcon, sectionName, sectionTitle, sectionDescription } =
    $derived(hero);
</script>

<div class="container pt-[9.19rem]">
  <SectionIconAndName
    sectionNameClass="text-white"
    wrapperClass="mt-0  md:mt-[.4rem]"
    {sectionIcon}
    {sectionName} />

  <h1
    class="mx-auto mb-3 mt-5
    flex w-fit flex-col gap-2 text-nowrap text-center
    font-geist text-[1.875rem] font-bold leading-tight text-[#FFF] lg:flex-row lg:text-7xl">
    <PortableText
      value={sectionTitle}
      components={{
        marks: {
          violetGradient: VioletGradient,
        },
      }} />
  </h1>
  <p
    class="mx-auto mt-4 w-full text-center text-xl font-medium leading-[1.875rem] text-white lg:w-[40.3125rem]">
    {sectionDescription}
  </p>
</div>
