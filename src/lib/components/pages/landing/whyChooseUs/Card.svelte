<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { WhyChooseUsCard } from '../../../../../types/landing.types';

  let { card }: { card: WhyChooseUsCard } = $props();
</script>

<div
  style="box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.07);"
  class="flex h-full w-full items-center gap-[1.12rem]
  rounded-2xl border p-4
  lg:h-[8.875rem] lg:pb-[2.81rem] lg:pl-[1.88rem] xl:w-[23.75rem] xl:pr-[3.18rem] xl:pt-[2.03rem]">
  <div class="h-[3.375rem] w-[3.375rem]">
    <SanityImage
      lqip
      class="h-full w-full"
      src={card?.cardIcon}
      sizes="100vw"
      imageUrlBuilder={imgBuilder}
      alt={card?.cardIcon?.alt || "icon"} />
  </div>
  <div class="h-full w-full lg:h-[4.6875rem] lg:w-[13.5625rem]">
    <h3 class="font-geist text-xl font-normal text-black">
      {card?.cardDescription}
      <span class="font-geist text-[#5B6779]">{card?.cardDescriptionFor}</span>
    </h3>
  </div>
</div>
