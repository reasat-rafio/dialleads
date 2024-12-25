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

<div class="rounded-xl border p-8">
  <div class="space-y-2 text-center">
    <div class="flex justify-center">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
        <SanityImage
          class="h-5 w-5"
          src={plan?.icon}
          sizes="5vw"
          imageUrlBuilder={imgBuilder}
          alt="planIcon" />
      </div>
    </div>
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
  <a
    href={plan?.cta?.type === 'internal'
      ? plan?.cta?.internalLink
      : plan?.cta?.externalLink}>
    <button
      class="mt-16 w-full rounded-xl
  bg-violet-700 px-5 py-3 text-lg font-medium text-white">
      {plan?.cta?.title}
    </button>
  </a>
</div>
