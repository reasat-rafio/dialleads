<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div>
  <div
    class="flex h-[2.375rem] w-full 
    border border-[#E4E4E7]
    justify-between rounded-xl bg-[#F5F5F5;] px-2 py-1 md:w-[24rem]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'rounded-lg bg-white  font-geist text-base font-semibold text-[#495568] transition-colors delay-75 md:px-9'
        : ' font-geist text-base font-semibold text-[#495568] md:px-9'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'rounded-lg bg-white  font-geist text-base font-semibold text-[#495568] transition-colors delay-75 md:px-9'
        : ' font-geist text-base font-semibold text-[#495568] md:px-9'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-semibold text-[#495568]">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
</div>
