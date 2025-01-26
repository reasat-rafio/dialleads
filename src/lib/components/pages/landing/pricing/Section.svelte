<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import type { PricingProps } from '../../../../../types/landing.types';

  let { props } = $props();
  let { pricing }: { pricing: PricingProps } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle } = $derived(pricing);
</script>

<div>
  <div class="mt-24 flex items-center justify-center">
    <SectionIconAndName {sectionIcon} {sectionName} />
  </div>
  <h2
    class="mt-6 w-full text-center font-geist text-[1.625rem] font-semibold text-black md:text-5xl">
    {sectionTitle}
  </h2>
</div>
