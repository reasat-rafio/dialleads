<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="mt-[1.62rem] flex justify-center">
  <div
    class="flex w-full justify-between rounded-xl border border-[#60527A] bg-[#2B194C] px-2 pb-2 pt-1 lg:w-[22.4375rem]">
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
        <span class="text-violet-white text-sm font-semibold">
          ( {saveUpTo}% OFF)
        </span>
      </p>
    </button>
  </div>
</div>
