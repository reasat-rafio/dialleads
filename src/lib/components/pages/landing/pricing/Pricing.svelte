<script lang="ts">
  import type {
    Pricing,
    PricingProps,
  } from '../../../../../types/landing.types';
  import Section from './Section.svelte';
  import TopBar from './TopBar.svelte';
  import PricingCard from './PricingCard.svelte';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  interface Props {
    props: PricingProps;
    pricing: Pricing;
  }

  let { props, pricing }: Props = $props();
  let { enterprisePlan, plans, saveUpTo } = $derived(pricing);
  let selectedSubscriptionType = $state('monthly');
</script>

<div class=" mx-auto max-w-[75rem] px-5 xl:px-0">
  <Section {props} />
  <TopBar {saveUpTo} bind:selectedSubscriptionType />
  <div class="my-20 mt-7 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
  <div
    class="bg-enterpricePlan-gradient h-[29.3125rem] lg:h-[19.75rem] rounded-[1.25rem] border mb-20">
    <div class="pt-[2.56rem] lg:pl-[3.13rem]">
      <div class="flex justify-center lg:justify-start">
        <div
          class="flex w-36 items-center gap-2
        rounded-full bg-[#FFFFFF33] px-3
         py-2 text-white">
          <SanityImage
            class="h-5 w-6"
            src={enterprisePlan?.sectionOptionIcon}
            sizes="5vw"
            imageUrlBuilder={imgBuilder}
            alt={enterprisePlan?.banner?.alt || 'Background Banner'} />
          <p class="font-geist text-lg font-medium">
            {enterprisePlan?.sectionOption}
          </p>
        </div>
      </div>
      <h3
        class="mt-[1.56rem] text-center font-geist text-5xl font-semibold text-white lg:text-left">
        {enterprisePlan?.title}
      </h3>
      <p
        class="mt-[0.56rem] text-center font-geist text-xl font-medium text-[#DCDAE0] lg:text-left">
        {enterprisePlan?.description}
      </p>
      <div class="mt-[2.25rem] flex justify-center md:justify-start">
        <button
          class="flex h-14 w-[10.98012rem] items-center
        gap-2 rounded-xl
        border border-[#894DEF] bg-[#5211B8]
        px-6 py-2 font-geist text-lg font-semibold text-white">
          {enterprisePlan?.cta?.title}
          <SanityImage
            class="h-5 w-5"
            src={enterprisePlan?.cta?.icon}
            sizes="5vw"
            imageUrlBuilder={imgBuilder}
            alt={enterprisePlan?.banner?.alt} />
        </button>
      </div>
    </div>
  </div>
</div>
