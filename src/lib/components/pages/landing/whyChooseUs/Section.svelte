<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

  interface Props {
    sectionName: string;
    sectionIcon: SanityImageObject;
    sectionTitle: string;
  }
  let { sectionName, sectionIcon, sectionTitle }: Props = $props();
</script>

<div>
  <div
    class="mx-auto flex h-10 w-32 items-center justify-center gap-2 rounded-full border px-3 py-2">
    <SanityImage
      class="h-5 w-6"
      src={sectionIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt="sectionIcon" />
    <p class="font-geist text-lg font-medium text-[#495568]">{sectionName}</p>
  </div>
 
</div>
