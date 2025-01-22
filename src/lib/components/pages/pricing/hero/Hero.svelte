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
class="bg-hero-gradient lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem]"
>
  <div class="">
    <Section {hero} />
    <TabBar bind:selectedSubscriptionType {saveUpTo} />
  </div>

  
</div>

<div
    class="
    {windowWidth < 1024 ? 'container px-5' : 'max-w-[75rem] mx-auto'} 
      w-full h-full mx-auto lg:px-8 xl:px-0 
    relative -top-20 grid grid-cols-1 gap-[1.88rem] md:grid-cols-2 xl:grid-cols-3 z-50">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
