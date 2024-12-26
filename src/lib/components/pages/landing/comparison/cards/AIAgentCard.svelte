<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative rounded-3xl border
  border-violet-700 bg-violet-700 px-16">
  <div
    class="absolute -top-11 left-1/2 -translate-x-1/2 rounded-xl p-[0.62rem]">
    <SanityImage
      class="h-[4.25rem] w-[4.25rem]"
      src={card?.icon}
      sizes="5vw"
      imageUrlBuilder={imgBuilder}
      alt={card?.icon?.alt} />
  </div>
  <div>
    <h3
      class="mt-10 text-center text-[2.375rem]
      font-bold leading-tight text-white">
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

            <p class="text-xl font-normal text-white">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
