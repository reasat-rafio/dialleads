<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import type { Image } from "sanity";

    interface Props{
        sectionName: string;
        sectionIcon: Image;
        sectionTitle: string;
    }
    let {sectionName, sectionIcon, sectionTitle}: Props = $props();
</script>

<div class="mt-24">
    <div class="flex gap-2 justify-center w-28 h-10 mx-auto border rounded-full items-center px-3 py-2">
        <SanityImage
              lqip
              class="w-6 h-5"
              src={sectionIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
        <p class="text-black text-lg font-semibold">{sectionName}</p>
    </div>
    <h2 class="text-black text-5xl font-semibold text-center mt-6">{sectionTitle}</h2>
</div>