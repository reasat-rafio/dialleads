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

<div class="mt-24">
    <div class="flex gap-2 justify-center w-80 h-10 mx-auto border rounded-full items-center px-3 py-2">
        <SanityImage
              class="w-6 h-5"
              src={sectionIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
        <p class="text-[#495568] text-lg font-medium text-nowrap">{sectionName}</p>
    </div>
    <h2 class="text-[#212121] text-xl font-normal text-center mt-6 w-[43.125rem] mx-auto">{sectionTitle}</h2>
</div>
