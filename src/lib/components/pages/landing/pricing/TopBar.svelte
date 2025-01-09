<script lang="ts">
  import { TableProperties } from 'lucide-svelte';
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
</script>

<div class="flex flex-col md:flex-row justify-between items-center mt-10 px-2">
  <div class="flex justify-between rounded-xl border px-2 py-1 w-full md:w-[24rem]">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'rounded-lg bg-violet-100 px-2  md:px-9 py-2 transition-colors delay-75 text-base font-semibold text-black font-geist'
        : 'px-2 md:px-9 py-2 text-base font-semibold text-black font-geist'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'rounded-lg bg-violet-100 px-2 md:px-7 py-2 transition-colors delay-75 text-base font-semibold text-black font-geist'
        : 'px-2 md:px-7 py-2 text-base font-semibold text-black font-geist'}>
      <p class="text-nowrap">
        Annual
        <span class="text-sm font-semibold text-violet-600">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
  <div class="rounded-xl border px-2 py-1 flex items-center w-full md:w-[14.1875rem] gap-2 justify-center mt-3 md:mt-0">
    <p class="text-lg font-semibold text-black font-geist">Compare Sheet</p>
    <TableProperties size={20} />
  </div>
</div>
