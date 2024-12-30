<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Card } from '../../../../../types/landing.types';

  let { card }: { card: Card } = $props();
</script>

<div class="h-[15.625rem] w-[23.75rem] rounded-2xl border px-7 py-7">
  <SanityImage
    lqip
    class="h-10 w-10"
    src={card?.cardIcon}
    sizes="5vw"
    imageUrlBuilder={imgBuilder}
    alt="SliderMainImage" />
  <div class="mt-6 space-y-2">
    <h4 class="text-[1.375rem] font-semibold text-black">{card?.cardTitle}</h4>
    <p class="text-base font-normal text-[#5B6779]">{card?.cardDescription}</p>
  </div>
</div>
