<script lang="ts">
  import type { ComparisonProps } from "../../../../../types/landing.types";
  import Section from "./Section.svelte";

    let {props}: {props: ComparisonProps} = $props();
    let {comparison} = $derived(props);
    let {comparisonCards, sectionName, sectionTitle, sectionIcon} = $derived(comparison);
</script>

<div class="max-w-[75rem] mx-auto">
    <Section {sectionName} {sectionIcon} {sectionTitle} />
</div>