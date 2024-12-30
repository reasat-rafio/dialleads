<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { WhyChooseUsCard } from '../../../../../types/landing.types';

  let { card }: { card: WhyChooseUsCard } = $props();
</script>

<div
  class="flex h-[8.875rem] w-[23.75rem] items-center gap-[1.12rem] rounded-2xl border px-7 py-8">
  <div>
    <SanityImage
      lqip
      class="h-10 w-10"
      src={card?.cardIcon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt="SliderMainImage" />
  </div>
  <div class=" w-[13.5625rem] h-[4.6875rem]">
    <h5 class="text-xl font-normal text-black">
      {card?.cardDescription}
      <span class="text-[#5B6779]">{card?.cardDescriptionFor}</span>
    </h5>
  </div>
</div>
