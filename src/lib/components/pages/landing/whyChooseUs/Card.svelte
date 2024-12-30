<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { WhyChooseUsCard } from '../../../../../types/landing.types';

  let { card }: { card: WhyChooseUsCard } = $props();
</script>

<div
  class="flex h-full w-full lg:h-[8.875rem] xl:w-[23.75rem]
  items-center gap-[1.12rem] rounded-2xl
  border p-4 lg:pb-[2.81rem] lg:pl-[1.88rem] xl:pr-[3.18rem] xl:pt-[2.03rem] shadow-md">
  <div class="h-[3.375rem] w-[3.375rem]">
    <SanityImage
      lqip
      class="w-full h-full"
      src={card?.cardIcon}
      sizes="100vw"
      imageUrlBuilder={imgBuilder}
      alt="SliderMainImage" />
  </div>
  <div class="h-full w-full lg:h-[4.6875rem] lg:w-[13.5625rem]">
    <h5 class="font-geist text-xl font-normal text-black">
      {card?.cardDescription}
      <span class="font-geist text-[#5B6779]">{card?.cardDescriptionFor}</span>
    </h5>
  </div>
</div>
