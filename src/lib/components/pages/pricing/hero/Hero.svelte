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
</script>

<div class="max-w-[75rem] mx-auto">
  <div class="absolute left-1/2 top-[17rem] -translate-x-1/2 -translate-y-1/2">
    <Section {hero} />
    <TabBar bind:selectedSubscriptionType {saveUpTo} />
  </div>

  <div
    class="w-[50rem] xl:w-[75rem] mx-auto relative -top-[6rem] grid grid-cols-1 gap-[1.88rem] md:grid-cols-2 xl:grid-cols-3 z-50">
    {#each plans as plan}
      <!-- <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} /> -->
    {/each}
  </div>
</div>
