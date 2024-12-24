<script lang="ts">
  import { SectionIcon } from 'lucide-svelte';
  import type {
    Pricing,
    PricingPageProps,
  } from '../../../../../types/landing.types';
  import Header from './Header.svelte';

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
    <Header {sectionName} {sectionIcon} {sectionTitle} />
</div>
