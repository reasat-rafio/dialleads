<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Plan } from '../../../../../types/landing.types';
  import { Check } from 'lucide-svelte';
  interface Props {
    plan: Plan;
    selectedSubscriptionType: string;
    saveUpTo: number;
  }

  let {
    plan,
    selectedSubscriptionType = $bindable(),
    saveUpTo,
  }: Props = $props();
</script>

<div class="rounded-xl border p-8 ">
  <div class="space-y-2 text-center">
    <SanityImage
              lqip
              class="w-6 h-5"
              src={plan?.icon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
    <p class="text-xl font-normal text-violet-600">{plan?.planName}</p>
    <p class="text-5xl font-semibold text-black">
      ${#if selectedSubscriptionType == 'annual'}
        {plan?.price * 12 - plan?.price * 12 * (saveUpTo / 100)}
      {:else}
        {plan?.price}
      {/if}{selectedSubscriptionType === 'monthly' ? '/mth' : '/annual'}
    </p>
    <p class="text-lg font-normal">
      {selectedSubscriptionType === 'annual'
        ? 'Billed annually'
        : 'Billed Monthly'}
    </p>
  </div>
  <div class="mt-8 space-y-4">
    {#each plan?.features as feature}
      <div class="flex items-center gap-3">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
          <Check class="font-bold text-violet-600" size={16} />
        </p>
        <p class="text-base font-normal text-gray-500">
          {feature?.featureName}
        </p>
      </div>
    {/each}
  </div>
  <button
  class="bg-violet-700 text-white text-lg 
  font-medium py-3 px-5 rounded-xl w-full mt-16"
  >
    Get started
</button>
</div>
