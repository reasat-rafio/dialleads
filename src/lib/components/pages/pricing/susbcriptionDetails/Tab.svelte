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
    justify-between rounded-xl
    border border-[#E4E4E7] bg-[#F5F5F5;] p-1">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'flex h-full w-full items-center rounded-[0.75rem] bg-white py-[0.62rem] pl-[1.5rem] pr-[1.48rem] text-sm font-medium'
        : 'flex h-full w-full items-center rounded-[0.75rem] py-[0.62rem] pl-[1.5rem] pr-[1.48rem] text-sm font-medium'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'flex h-full w-full items-center rounded-[0.75rem] bg-white py-[0.62rem] pl-[1.5rem] pr-[1.48rem] text-sm font-medium'
        : 'flex h-full w-full items-center rounded-[0.75rem] py-[0.62rem]  pl-[1.5rem] pr-[1.48rem] text-sm font-medium'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-normal text-[#495568]">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
</div>
