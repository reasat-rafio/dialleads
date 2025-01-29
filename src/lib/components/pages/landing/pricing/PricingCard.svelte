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

<div
  style="
box-shadow: 0px 12px 38.4px 0px rgba(17, 3, 62, 0.08);
"
  class=" h-full w-full rounded-xl border bg-white">
  <div class="p-8">
    <div class="space-y-2 text-center">
      <div class="flex justify-center">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-[#F9F5FF] bg-violet-100">
          <SanityImage
            class="h-5 w-5"
            src={plan?.icon}
            sizes="5vw"
            imageUrlBuilder={imgBuilder}
            alt={plan?.icon?.alt || 'icon'} />
        </div>
      </div>
      <p class="font-geist text-xl font-normal text-violet-600">
        {plan?.planName?.name}
      </p>
      <p class="mt-2 font-geist text-5xl font-semibold text-black">
        ${#if selectedSubscriptionType == 'annual'}
          {plan?.price * 12 - plan?.price * 12 * (saveUpTo / 100)}
        {:else}
          {plan?.price}
        {/if}{selectedSubscriptionType === 'monthly' ? '/mth' : '/anl'}
      </p>
      <p class="font-geist text-lg font-normal">
        {selectedSubscriptionType === 'annual'
          ? 'Billed annually'
          : 'Billed Monthly'}
      </p>
    </div>
    <div class="mt-8 space-y-[1rem]">
      {#each plan?.features as feature}
        <div class="flex items-center gap-3">
          <p
            class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
            <Check class="font-bold text-violet-600" size={16} />
          </p>
          <p class="font-geist text-base font-normal text-[#5B6779]">
            {feature?.featureName}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex items-center bg-[#F9FAFB] p-8">
    <a
      class="w-full"
      href={plan?.cta?.type === 'internal'
        ? plan?.cta?.internalLink
        : plan?.cta?.externalLink}>
      <button
        class=" w-full rounded-xl
  bg-violet-700 px-5 py-3 font-geist text-lg font-medium text-white">
        {plan?.cta?.title}
      </button>
    </a>
  </div>
</div>
