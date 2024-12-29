<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative h-[30.27rem] w-[31.25rem]
rounded-3xl border border-slate-400 bg-slate-100 pl-[4.38rem] pr-[4.19rem]">
  <div
    class="absolute -top-11 left-1/2 h-[5.5rem] w-[5.5rem] -translate-x-1/2 rounded-xl bg-stone-200 p-[0.62rem]">
    <SanityImage
      class="h-[4.25rem] w-[4.25rem]"
      src={card?.icon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={card?.icon?.alt} />
  </div>
  <div>
    <h3
      class="font-geist mt-[5.5rem] text-center
    text-[2.375rem] font-bold leading-tight text-gray-800">
      {card?.cardTitle}
    </h3>
    <div>
      <div class="mb-20 mt-[2.88rem] space-y-[1.125rem] text-nowrap">
        {#each card?.features as feature}
          <div class="flex items-center gap-3">
            <SanityImage
              class="h-8 w-[2.0625rem] text-red-50"
              src={feature?.featureIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={feature?.featureIcon?.alt} />

            <p class="font-geist text-xl font-normal text-gray-800">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
