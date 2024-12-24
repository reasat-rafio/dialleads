<script lang="ts">
  import { SectionIcon } from 'lucide-svelte';
  import type {
    Pricing,
    PricingPageProps,
  } from '../../../../../types/landing.types';
  import Section from './Section.svelte';

  interface Props {
    props: PricingPageProps;
    pricing: Pricing;
  }

  let {props, pricing}: Props = $props();
  let {sectionName, sectionIcon, sectionTitle} = $derived(props);
  let {enterprisePlan, plans, saveUpTo} = $derived(pricing);
  $inspect(props)
</script>

<div>
    <Section {sectionName} {sectionIcon} {sectionTitle} />
</div>
