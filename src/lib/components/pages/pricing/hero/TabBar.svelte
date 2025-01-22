<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="mt-[1.63rem] flex justify-center px-5 pb-[11.19rem] lg:px-0">
  <div
    class="flex h-full w-full items-center gap-2 rounded-xl border border-[#60527A] bg-[#2B194C] p-[0.5rem] md:w-[24rem]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'flex w-full items-center justify-center rounded-[0.5rem] bg-[#5307CA] px-5 py-[0.88rem] text-base font-medium text-white'
        : 'flex  w-full items-center justify-center  rounded-[0.5rem] px-5 py-[0.88rem] text-base font-medium text-white'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'flex  w-full items-center justify-center rounded-[0.5rem] bg-[#5307CA] px-5 py-[0.88rem] text-base font-medium text-white'
        : 'flex w-full items-center justify-center  rounded-[0.5rem] px-5 py-[0.88rem] text-base font-medium text-white'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-medium text-white">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
</div>
