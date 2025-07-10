<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import type { Card } from "../../../../../types/landing.types";

  let { card }: { card: Card } = $props();
</script>

<div class="h-full w-full max-w-none rounded-2xl border p-[1.563rem] hover:border-violet-700">
  <SanityImage
    lqip
    class="h-12 w-12"
    src={card?.cardIcon}
    sizes="100vw"
    imageUrlBuilder={imgBuilder}
    alt={card?.cardIcon?.alt || "icon"} />
  <div class="mt-6 w-full space-y-2.5">
    <h3 class="w-full font-geist text-[22px] font-semibold leading-[38px] tracking-[-1%] text-black lg:text-[26px]">
      {card?.cardTitle}
    </h3>
    <p
      class="w-full font-geist text-[18px] font-normal leading-[28px] tracking-[0%] text-[#5B6779]/80 hover:text-[#16181c]">
      {card?.cardDescription}
    </p>
  </div>
</div>
