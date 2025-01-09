<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative h-full w-full rounded-3xl border
border-slate-400 bg-slate-100 px-2 lg:h-[30.27rem] xl:w-[31.25rem] lg:pl-[4.38rem] lg:pr-[4.19rem]">
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
      class="mt-[5.5rem]  w-[8.5625rem] md:w-full mx-auto  text-center font-geist
    text-xl font-bold leading-tight text-gray-800 lg:text-[2.375rem]">
      {card?.cardTitle}
    </h3>
    <div>
      <div class="mb-[3.44rem] mt-[2.19rem] space-y-[1.125rem] lg:mt-[2.88rem] pl-[1.88rem] lg:pl-0">
        {#each card?.features as feature}
          <div class="flex items-center gap-3">
            <SanityImage
              class="h-8 w-[2.0625rem] text-red-50"
              src={feature?.featureIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={feature?.featureIcon?.alt} />

            <p
              class="font-geist text-[0.875rem] font-normal text-gray-800 lg:text-xl">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
