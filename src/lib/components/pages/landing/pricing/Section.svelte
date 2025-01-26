<script lang="ts">
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import type { PricingProps } from "../../../../../types/landing.types";

    
    let {props} = $props();
    let {pricing}: {pricing: PricingProps} = $derived(props);
    let {sectionIcon, sectionName, sectionTitle} = $derived(pricing);
</script>

<div>
    <SectionIconAndName {sectionIcon} {sectionName }/>
    <h2 class="text-black text-[1.625rem] md:text-5xl font-semibold text-center mt-6 font-geist w-full">{sectionTitle}</h2>
</div>