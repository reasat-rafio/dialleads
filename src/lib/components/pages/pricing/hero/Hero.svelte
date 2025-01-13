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
 style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
 class="w-full">
  <div class="absolute left-1/2 top-[17rem] -translate-x-1/2 -translate-y-1/2">
    <Section {hero} />
    <TabBar bind:selectedSubscriptionType {saveUpTo} />
  </div>

  <div
    class="
    {windowWidth < 1024 ? 'container' : 'max-w-[75rem] mx-auto'} 
      w-full h-full mx-auto lg:px-8 xl:px-0 
    relative -top-[8rem] lg:-top-[6rem] grid grid-cols-1 gap-[1.88rem] md:grid-cols-2 xl:grid-cols-3 z-50">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
</div>
