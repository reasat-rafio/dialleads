<script lang="ts">
  import { TableProperties } from 'lucide-svelte';
  interface Props {
    saveUpTo: number;
    selectedSubscriptionType: string;
  }
  let { saveUpTo, selectedSubscriptionType = $bindable() }: Props = $props();
  $inspect(saveUpTo);
</script>

<div class="flex  justify-between items-center mt-10">
  <div class="rounded-xl border px-2 py-1">
    <button
      onclick={() => (selectedSubscriptionType = 'monthly')}
      class={selectedSubscriptionType === 'monthly'
        ? 'rounded-lg bg-violet-100 px-9 py-2 transition-colors delay-150 text-base font-semibold text-black'
        : 'px-9 py-2 text-base font-semibold text-black'}>
      Monthly
    </button>
    <button
      onclick={() => (selectedSubscriptionType = 'annual')}
      class={selectedSubscriptionType === 'annual'
        ? 'rounded-lg bg-violet-100 px-9 py-2 transition-colors delay-150 text-base font-semibold text-black'
        : 'px-9 py-2 text-base font-semibold text-black'}>
      <p>
        Annual
        <span class="text-sm font-semibold text-violet-600">
          (save up to {saveUpTo}%)
        </span>
      </p>
    </button>
  </div>
  <div class="rounded-xl border px-2 py-1 flex items-center gap-2">
    <p class="text-lg font-semibold text-black">Compare Sheet</p>
    <TableProperties size={20} />
  </div>
</div>
