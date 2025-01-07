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
  let selectedSubscriptionType = $state('monthly');
</script>

<div>
  <div class="hidden md:block">
    <SubscriptionDetailsForDesktop {props} {plans} {saveUpTo} />
  </div>
  <div>
    <SubscriptionDetailsForMobile {props} {plans} {saveUpTo} />
  </div>
</div>
