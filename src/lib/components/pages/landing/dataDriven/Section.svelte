<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SanityImageWithAlt } from '../../../../../types/common.types';

  interface Props {
    sectionIcon: SanityImageWithAlt;
    sectionName: string;
  }
  let { sectionIcon, sectionName }: Props = $props();
</script>

<div class=" mt-[2.5rem] px-2 lg:mt-[7.5rem] lg:px-0">
  <div
    class="mx-auto flex h-[2.5rem] w-full items-center
      justify-center gap-2 rounded-full border pb-[.67rem] pt-[.7rem] md:w-[21.125rem] md:pl-[1.31rem] md:pr-[1.13rem]">
    <SanityImage
      class="h-[1.125rem] w-[1.125rem] "
      src={sectionIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={sectionIcon?.alt || "icon"} />
    <p
      class="text-nowrap font-geist text-base font-medium text-[#495568] lg:text-lg">
      {sectionName}
    </p>
  </div>
 
</div>
