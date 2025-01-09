<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="mt-[1.63rem] flex justify-center">
  <div
    class="flex w-full justify-between items-center rounded-xl border border-[#60527A] bg-[#2B194C] p-[0.375rem] md:w-[24rem]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'flex items-center justify-center  rounded-lg bg-[#5307CA] px-[0.62] py-[0.88rem] font-geist text-base font-bold text-white transition-colors delay-75 md:px-9'
        : 'flex items-center justify-center px-[0.62] py-[0.88rem] font-geist text-base font-bold text-white md:px-9'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'flex items-center justify-center rounded-lg bg-[#5307CA] px-[0.62] py-[0.88rem] font-geist text-base font-bold text-white transition-colors delay-75 md:px-7'
        : 'flex items-center justify-center px-[0.62] py-[0.88rem] font-geist text-base font-bold text-white md:px-7'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-bold text-white">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
</div>
