<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative h-[30.25rem] w-[31.25rem]
  rounded-3xl border border-violet-700 bg-violet-700 pl-[4.38rem] pr-[4.19rem]">
  <div
    class="absolute -top-[5.5rem] left-1/2 -translate-x-1/2 rounded-xl p-[0.62rem]">
    <SanityImage
      class="h-[9.3125rem] w-[9.317rem]"
      src={card?.icon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={card?.icon?.alt} />
  </div>
  <div>
    <h3
      class="font-geist mt-[5.5rem] text-center
      text-[2.375rem] font-bold leading-tight text-white">
      {card?.cardTitle}
    </h3>
    <div>
      <div class="mb-20 mt-[2.88rem] space-y-[1.12rem]">
        {#each card?.features as feature}
          <div class="flex items-center gap-3">
            <SanityImage
              class="h-5 w-6"
              src={feature?.featureIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={feature?.featureIcon?.alt} />

            <p class="font-geist text-xl font-normal text-white">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
