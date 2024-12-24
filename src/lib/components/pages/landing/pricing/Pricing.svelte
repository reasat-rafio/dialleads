<script lang="ts">
  import { SectionIcon } from 'lucide-svelte';
  import type {
    Pricing,
    PricingPageProps,
  } from '../../../../../types/landing.types';
  import Section from './Section.svelte';
  import TopBar from './TopBar.svelte';

  interface Props {
    props: PricingPageProps;
    pricing: Pricing;
  }

  let {props, pricing}: Props = $props();
  let {sectionName, sectionIcon, sectionTitle} = $derived(props);
  let {enterprisePlan, plans, saveUpTo} = $derived(pricing);
  let selectedSubscriptionType = $state('monthly');
  $inspect(props)
</script>

<div class="max-w-[75rem] mx-auto">
    <Section {sectionName} {sectionIcon} {sectionTitle} />
    <TopBar {saveUpTo} bind:selectedSubscriptionType={selectedSubscriptionType} />
</div>
