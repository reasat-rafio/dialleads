<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative rounded-3xl border
border-slate-400 bg-slate-100 px-16">
  <div
    class="absolute -top-8 left-1/2 -translate-x-1/2 rounded-xl bg-stone-200 p-[0.62rem]">
    <SanityImage
      class="h-[2.25rem] w-[2.25rem]"
      src={card?.icon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={card?.icon?.alt} />
  </div>
  <div>
    <h3
      class="mt-10 text-center text-[2.375rem]
    font-bold leading-tight text-gray-800">
      {card?.cardTitle}
    </h3>
    <div>
      <div class="mb-20 mt-[2.88rem] space-y-4">
        {#each card?.features as feature}
          <div class="flex items-center gap-3">
            <SanityImage
              class="h-5 w-6"
              src={feature?.featureIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={feature?.featureIcon?.alt} />

            <p class="text-xl font-normal text-gray-800">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
