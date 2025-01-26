<script lang="ts">
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import type { PricingProps } from "../../../../../types/landing.types";

    
    let {props} = $props();
    let {pricing}: {pricing: PricingProps} = $derived(props);
    let {sectionIcon, sectionName, sectionTitle} = $derived(pricing);
</script>

<div>
    <SectionIconAndName sectionTitleClass="leading-tight" {sectionIcon} {sectionName } {sectionTitle}/>
</div>