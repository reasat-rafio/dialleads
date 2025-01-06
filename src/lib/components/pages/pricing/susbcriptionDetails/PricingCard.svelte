<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import type { Plan } from '../../../../../types/landing.types';
  interface Props {
    plan: Plan;
    selectedSubscriptionType: string;
    saveUpTo: number;
  }

  let {
    plan,
    selectedSubscriptionType = $bindable(),
    saveUpTo,
  }: Props = $props();
</script>

<div>
  <h4 class="text-center text-2xl font-semibold leading-[1.5rem] text-black">
    {plan?.planName?.name}
  </h4>
  <p class="  mt-[1rem] text-center text-xl font-semibold text-[#495568]">
    ${#if selectedSubscriptionType == 'annual'}
      {plan?.price * 12 - plan?.price * 12 * (saveUpTo / 100)}
    {:else}
      {plan?.price}
    {/if}<span class="font-normal">
      {selectedSubscriptionType === 'monthly' ? '/mth' : '/anl'}
    </span>
  </p>
  <div class="flex justify-center mt-4">
    <Button
      class="h-[2.5rem] w-[7.5rem] rounded-[0.75rem] 
  border border-[#E4E4E7] bg-white
  text-base font-medium text-[#495568]">
      Subscribe
    </Button>
  </div>
</div>
