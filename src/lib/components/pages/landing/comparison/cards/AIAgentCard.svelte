<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ComparisonCard } from '../../../../../../types/landing.types';

  let { card }: { card: ComparisonCard } = $props();
</script>

<div
  class="relative h-full w-full rounded-2xl border-2
  border-violet-400 bg-violet-700 px-2 lg:h-[30.25rem] xl:w-[31.25rem] lg:pl-[4.38rem] lg:pr-[4.19rem]">
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
      class="font-geist w-[8.5625rem] md:w-full mx-auto  mt-[5.5rem] text-center
      text-xl md:text-[2.375rem] font-bold md:leading-tight text-white">
      {card?.cardTitle}
    </h3>
    <div>
      <div class="mb-[3.44rem] mt-[2.19rem] lg:mt-[2.88rem] space-y-[1.12rem] pl-[1.88rem] lg:pl-0">
        {#each card?.features as feature}
          <div class="flex items-center gap-3">
            <SanityImage
              class="h-8 w-[2.0625rem] text-green-500"
              src={feature?.featureIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={feature?.featureIcon?.alt} />

            <p class="font-geist text-[0.875rem] lg:text-xl font-normal text-[#FFF]">
              {feature?.featureName}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
