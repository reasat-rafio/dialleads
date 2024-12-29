<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Card } from '../../../../../types/landing.types';

  let { card }: { card: Card } = $props();
</script>

<div
  class="h-full w-full rounded-2xl border py-5 pl-[1.87rem] pr-[2.12rem] shadow-md lg:h-[15.625rem] lg:w-[23.75rem]">
  <SanityImage
    lqip
    class="h-10 w-10"
    src={card?.cardIcon}
    sizes="5vw"
    imageUrlBuilder={imgBuilder}
    alt="SliderMainImage" />
  <div class="space-y-2 md:mt-6">
    <h4
      class="text-1.124rem] font-geist text-nowrap font-semibold leading-tight text-black lg:text-[1.375rem]">
      {card?.cardTitle}
    </h4>
    <p
      class="font-geist text-[0.875rem] font-normal text-[#5B6779] lg:text-base">
      {card?.cardDescription}
    </p>
  </div>
</div>
