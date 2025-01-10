<script lang="ts">
  import type { Plan } from '../../../../../types/landing.types';
  import type { SubscriptionDetailsProps } from '../../../../../types/pricing.types';
  import SubscriptionDetailsForDesktop from './SubscriptionDetailsForDesktop.svelte';
  import SubscriptionDetailsForMobile from './SubscriptionDetailsForMobile.svelte';

  interface Props {
    props: SubscriptionDetailsProps;
    plans: Plan[];
    saveUpTo: number;
  }
  let { props, plans, saveUpTo }: Props = $props();
  let {
    subscriptionDetails: { features },
  } = $derived(props);
</script>

<div>
  <div class="hidden md:block">
    <SubscriptionDetailsForDesktop {props} {plans} {saveUpTo} />
  </div>
  <div class="px-8 lg:hidden mt-0 pt-0 relative">
    <SubscriptionDetailsForMobile {props} {plans} {saveUpTo} />
  </div>
</div>
