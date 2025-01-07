<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="flex justify-center mt-[1.62rem]">
  <div
    class="flex  justify-between rounded-xl border border-[#60527A] px-2 pt-1 pb-2 w-[22.4375rem] bg-[#2B194C]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'rounded-lg bg-[#5307CA] px-2  py-2 font-geist text-base font-semibold text-white transition-colors delay-75 md:px-9'
        : 'px-2 py-2 font-geist text-base font-semibold text-white md:px-9'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'rounded-lg bg-[#5307CA] px-2 py-2 font-geist text-base font-semibold text-white transition-colors delay-75 md:px-9'
        : 'px-2 py-2 font-geist text-base font-semibold text-white md:px-9'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-semibold text-violet-white">
          ( {saveUpTo}% OFF)
        </span>
      </p>
    </button>
  </div>
</div>
