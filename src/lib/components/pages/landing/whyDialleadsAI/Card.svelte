<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Card } from '../../../../../types/landing.types';

  let { card }: { card: Card } = $props();
</script>

<div
  class="h-full w-full rounded-2xl border px-5 py-5 shadow-md lg:h-[15.625rem] lg:w-[23.75rem]
   lg:pl-[1.87rem] lg:pr-[2rem]">
  <SanityImage
    lqip
    class="h-10 w-10"
    src={card?.cardIcon}
    sizes="100vw"
    imageUrlBuilder={imgBuilder}
    alt={card?.cardIcon?.alt || "icon"} />
  <div class="mt-6 space-y-2">
    <h4
      class="font-geist  text-[1.124rem] font-semibold leading-tight text-black lg:text-[1.375rem] lg:text-nowrap lg:w-[18.6865rem] lg:h-[1.75rem]">
      {card?.cardTitle}
    </h4>
    <p
      class="font-geist text-[0.875rem] font-normal text-[#5B6779] lg:text-base lg:w-[18.6865rem] lg:h-[4.5rem]">
      {card?.cardDescription}
    </p>
  </div>
</div>
