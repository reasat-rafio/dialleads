<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

  interface Props {
    sectionName: string;
    sectionIcon: SanityImageObject;
    className?: string;
  }
  let { sectionName, sectionIcon, className }: Props = $props();
</script>

<div
  class={`mx-auto mt-24 flex w-fit items-center justify-center gap-2 rounded-full border px-3 py-2 ${className}`}>
  <SanityImage
    class="h-5 w-6 ${className}"
    src={sectionIcon}
    sizes="5vw"
    imageUrlBuilder={imgBuilder}
    alt="sectionIcon" />
  <p class="font-geist text-lg font-medium text-[#495568] ${className}">
    {sectionName}
  </p>
</div>
