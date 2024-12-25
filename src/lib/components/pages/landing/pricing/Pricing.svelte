<script lang="ts">
  import { SectionIcon } from 'lucide-svelte';
  import type {
    Pricing,
    PricingPageProps,
  } from '../../../../../types/landing.types';
  import Section from './Section.svelte';
  import TopBar from './TopBar.svelte';
  import PricingCard from './PricingCard.svelte';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  interface Props {
    props: PricingPageProps;
    pricing: Pricing;
  }

  let { props, pricing }: Props = $props();
  let { sectionName, sectionIcon, sectionTitle } = $derived(props);
  let { enterprisePlan, plans, saveUpTo } = $derived(pricing);
  let selectedSubscriptionType = $state('monthly');
  $inspect(enterprisePlan);
</script>

<div class="mx-auto max-w-[75rem]">
  <Section {sectionName} {sectionIcon} {sectionTitle} />
  <TopBar {saveUpTo} bind:selectedSubscriptionType />
  <div class="my-20 mt-7 grid grid-cols-3 gap-7">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
  <div class="relative rounded-2xl bg-indigo-950 mb-24">
    <SanityImage
      lqip
      class="h-full w-full  rounded-2xl bg-cover bg-center bg-no-repeat object-cover"
      src={enterprisePlan?.banner}
      sizes="(min-width: 1024px) 100vw, 50vw"
      imageUrlBuilder={imgBuilder}
      alt="SliderMainImage" />
    <div class="absolute left-8 top-8 space-y-5">
      <div
        class="flex w-36 items-center gap-2
        rounded-full bg-[#FFFFFF33] px-3 py-2 text-white">
        <SanityImage
          class="h-5 w-6"
          src={enterprisePlan?.sectionOptionIcon}
          sizes="5vw"
          imageUrlBuilder={imgBuilder}
          alt={enterprisePlan?.banner?.alt || 'Background Banner'} />
        <p class="text-lg font-medium">{enterprisePlan?.sectionOption}</p>
      </div>
      <h3 class="text-5xl font-semibold text-white">{enterprisePlan?.title}</h3>
      <p class="text-xl font-medium text-[#DCDAE0]">
        {enterprisePlan?.description}
      </p>
      <button
        class="flex items-center rounded-xl border
      border-purple-700 bg-violet-700 px-6
      py-2 text-lg font-semibold text-white">
        {enterprisePlan?.cta?.title}
      </button>
    </div>
  </div>
</div>
