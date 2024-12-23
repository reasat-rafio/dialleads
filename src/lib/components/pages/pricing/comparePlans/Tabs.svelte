<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  interface Props {
    texts: string[];
    selectedType: string;
  }

  let { texts, selectedType = $bindable() }: Props = $props();

</script>

<div class="flex justify-between  rounded-xl border bg-stone-200 px-4 py-2 mt-4 ">
  <button
    onclick={() => (selectedType = 'monthly')}
    class={selectedType === 'monthly' ? 'rounded-lg px-3 py-1 bg-white transition-colors delay-150' : 'px-3 py-1'}>
    {texts[0]}
  </button>
  <button
    onclick={() => (selectedType = 'annually')}
    class={selectedType === 'annually' ? 'rounded-lg px-3 py-1 bg-white transition-colors delay-150' : 'px-3 py-1'}>
    {texts[1]}
  </button>
</div>
