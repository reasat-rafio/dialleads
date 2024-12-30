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
      alt="SliderMainImage" />
    <p class="text-lg font-semibold text-black">{sectionName}</p>
  </div>
  <h2 class="mt-6 text-center text-5xl font-semibold text-black">
    {sectionTitle}
  </h2>
</div>
