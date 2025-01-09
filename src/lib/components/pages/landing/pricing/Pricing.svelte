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

<div class="relative mx-auto max-w-[75rem] px-5 xl:px-0">
  <Section {props} />
  <TopBar {saveUpTo} bind:selectedSubscriptionType />
  <div class="my-20 mt-7 grid grid-cols-1 gap-[0.75rem] lg:gap-[1.88rem] md:grid-cols-2 xl:grid-cols-3">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
  <div class="relative mb-20">
    <div
      class="
     bg-enterpricePlan-gradient-mobile
     md:bg-enterpricePlan-gradient-desktop
    mx-auto h-[29.3125rem] w-[20.9375rem]
    overflow-hidden rounded-[1.25rem] border
    border-[#E4E4E7] md:w-full lg:h-fit xl:w-[75rem]">
      <SanityImage
        lqip
        class="h-full w-full bg-cover bg-center bg-no-repeat object-cover "
        src={enterprisePlan?.banner}
        sizes="100vw"
        imageUrlBuilder={imgBuilder}
        alt="SliderMainImage" />
    </div>
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[22rem]">
      <div class="flex justify-center lg:justify-normal">
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
        class="mt-[0.69rem] text-center font-geist text-[1.625rem] font-semibold text-white lg:text-left lg:text-5xl">
        {enterprisePlan?.title}
      </h3>
      <p
        class="mt-[0.56rem] text-center font-geist text-[1.25rem] font-medium text-[#DCDAE0] lg:text-left lg:text-xl">
        {enterprisePlan?.description}
      </p>
      <div class="mt-[2.25rem] flex justify-center lg:justify-start">
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
