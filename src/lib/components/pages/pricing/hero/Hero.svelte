<script lang="ts">
  import type { Plan } from '../../../../../types/landing.types';
  import type { HeroProps } from '../../../../../types/pricing.types';
  import PricingCard from '../../landing/pricing/PricingCard.svelte';
  import Section from './Section.svelte';
  import TabBar from './TabBar.svelte';

  interface Props {
    props: HeroProps;
    plans: Plan[];
    saveUpTo: number;
  }
  let { props, plans, saveUpTo }: Props = $props();
  let { hero } = $derived(props);
  let selectedSubscriptionType = $state('monthly');
  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
  class="bg-hero-gradient lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem] relative">
  <img
    src="/grid.png"
    alt="grid overlay"
    class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100 mix-blend-overlay z-0" />
  <div class="pb-[11.19rem] relative">
    <Section {hero} />
    <TabBar bind:selectedSubscriptionType {saveUpTo} />
  </div>
</div>

<div
  class="
    {windowWidth < 1024 ? 'container px-5' : 'mx-auto max-w-[75rem]'} 
      relative -top-24 z-50 mx-auto grid
    h-full w-full grid-cols-1 gap-[1.88rem] md:grid-cols-2 lg:px-8 xl:grid-cols-3 xl:px-0">
  {#each plans as plan}
    <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
  {/each}
</div>
