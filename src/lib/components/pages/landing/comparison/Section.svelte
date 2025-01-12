<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SanityImageWithAlt } from '../../../../../types/common.types';

  interface Props {
    sectionIcon: SanityImageWithAlt;
    sectionName: string;
    sectionTitle: string;
  }
  let { sectionIcon, sectionName, sectionTitle }: Props = $props();
</script>

<div class=" mt-[2.5rem] lg:mt-[7.5rem] px-2 lg:px-0">
  <div
    class="mx-auto flex h-[2.5rem] w-full md:w-[21.125rem] 
    items-center justify-center gap-2 rounded-full border pb-[.67rem] md:pl-[1.31rem] md:pr-[1.13rem] pt-[.7rem]">
    <SanityImage
      class="h-[1.125rem] w-[1.125rem] "
      src={sectionIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={sectionIcon?.alt || 'sectionIcon'} />
    <p class="font-geist text-nowrap text-base lg:text-lg font-medium text-[#495568]">
      {sectionName}
    </p>
  </div>
  <h2
    class="font-geist mx-auto mt-6 h-[4.25rem]
    w-full text-center text-base lg:text-xl
    font-normal text-[#212121] lg:w-[43.125rem]">
    {sectionTitle}
  </h2>
</div>
