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
  let { sectionName, sectionIcon, sectionTitle } = $derived(props);
  let { enterprisePlan, plans, saveUpTo } = $derived(pricing);
  let selectedSubscriptionType = $state('monthly');
</script>

<div class=" mx-auto max-w-[75rem] px-2 xl:px-0">
  <Section {sectionName} {sectionIcon} {sectionTitle} />
  <TopBar {saveUpTo} bind:selectedSubscriptionType />
  <div class="my-20 mt-7 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
  <div class="relative mb-24 w-full overflow-hidden 
  rounded-[1.25rem] bg-indigo-950 border border-[#E4E4E7]">
    <SanityImage
      lqip
      class="h-[29.3125rem] w-full bg-cover bg-center bg-no-repeat object-cover md:h-[19.76rem]"
      src={enterprisePlan?.banner}
      sizes="(min-width: 1024px) 100vw, 50vw"
      imageUrlBuilder={imgBuilder}
      alt={enterprisePlan?.banner?.alt} />
    <div
      class="absolute left-1/2 top-1/2
    -translate-x-1/2
    -translate-y-1/2 space-y-5 text-center
    md:left-8 md:top-8 md:translate-x-0 md:translate-y-0 md:text-left
    ">
      <div class="flex justify-center md:justify-start">
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
      <h3 class="font-geist text-5xl font-semibold text-white">
        {enterprisePlan?.title}
      </h3>
      <p class="font-geist text-xl font-medium text-[#DCDAE0]">
        {enterprisePlan?.description}
      </p>
      <div class="flex justify-center md:justify-start">
        <button
          class="font-geist flex items-center gap-2
      rounded-xl border border-purple-700
      bg-violet-700 px-6 py-2 text-lg font-semibold text-white">
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
