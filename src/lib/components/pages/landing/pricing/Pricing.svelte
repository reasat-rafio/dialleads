<script lang="ts">
  import { SectionIcon } from 'lucide-svelte';
  import type {
    Pricing,
    PricingPageProps,
  } from '../../../../../types/landing.types';
  import Section from './Section.svelte';
  import TopBar from './TopBar.svelte';
  import PricingCard from './PricingCard.svelte';

  interface Props {
    props: PricingPageProps;
    pricing: Pricing;
  }

  let { props, pricing }: Props = $props();
  let { sectionName, sectionIcon, sectionTitle } = $derived(props);
  let { enterprisePlan, plans, saveUpTo } = $derived(pricing);
  let selectedSubscriptionType = $state('monthly');
  $inspect(sectionIcon)
</script>

<div class="max-w-[75rem] mx-auto">
  <Section {sectionName} {sectionIcon} {sectionTitle} />
  <TopBar {saveUpTo} bind:selectedSubscriptionType />
  <div class="grid grid-cols-3 gap-7 mt-7 mb-20">
    {#each plans as plan}
      <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
    {/each}
  </div>
</div>
