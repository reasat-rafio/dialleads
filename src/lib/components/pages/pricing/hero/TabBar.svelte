<script lang="ts">
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="mt-[1.63rem] flex justify-center">
  <div
    class="flex w-full justify-between items-center rounded-xl border border-[#60527A] bg-[#2B194C] p-[0.5rem] md:w-[24rem]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'w-[12.9375rem] text-base font-medium text-white bg-[#5307CA] py-[0.88rem] px-5 rounded-[0.5rem] flex items-center justify-center'
        : 'w-[12.9375rem] text-base font-medium text-white  py-[0.88rem] px-5 rounded-[0.5rem] flex items-center justify-center'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'w-[12.9375rem] text-base font-medium text-white bg-[#5307CA] py-[0.88rem] px-5 rounded-[0.5rem] flex items-center justify-center'
        : 'w-[12.9375rem] text-base font-medium text-white  py-[0.88rem] px-5 rounded-[0.5rem] flex items-center justify-center'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-medium text-white">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
</div>
