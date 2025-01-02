<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
  import type { SanityImageWithAlt } from "../../../../../types/common.types";
  import type { PricingProps } from "../../../../../types/landing.types";

    
    let {props} = $props();
    let {pricing}: {pricing: PricingProps} = $derived(props);
    let {sectionIcon, sectionName, sectionTitle} = $derived(pricing);
    $inspect(props.pricing);
</script>

<div class="mt-24">
    <div class="flex gap-2 justify-center w-[7.125rem] h-10 mx-auto border rounded-[20rem]
     items-center px-3 py-2">
        <SanityImage
              class="w-[1.3125rem] h-5 mt-1"
              src={sectionIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
        <p class="text-black text-lg font-semibold font-geist ">{sectionName}</p>
    </div>
    <h2 class="text-black text-[1.625rem] md:text-5xl font-semibold text-center mt-6 font-geist w-full">{sectionTitle}</h2>
</div>