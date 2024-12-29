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

<div class="mt-[7.25rem]">
    <div class="flex gap-2 justify-center w-[21.125rem] h-[2.5rem] mx-auto border rounded-full items-center pl-[1.31rem] pr-[1.13rem] pt-[.7rem] pb-[.67rem]">
        <SanityImage
              class="w-[1.125rem] h-[1.125rem] "
              src={sectionIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
        <p class="text-[#495568] text-lg font-medium text-nowrap font-geist">{sectionName}</p>
    </div>
    <h2 class="text-[#212121] text-xl font-normal text-center mt-6 w-[43.125rem] h-[4.25rem] mx-auto font-geist">{sectionTitle}</h2>
</div>
