<script lang="ts">
  import type { WhyDialleadsAI, WhyDialleadsAIProps } from "../../../../../types/landing.types";
  import Section from "./Section.svelte";

    let {props}: {props: WhyDialleadsAIProps} = $props();
    let {whyDialleadsAI}: {whyDialleadsAI: WhyDialleadsAI} = $derived(props);
    let {sectionIcon, sectionName, sectionTitle, cards} = $derived(whyDialleadsAI);
</script>

<div>
    <Section {sectionIcon} {sectionName} {sectionTitle} />
</div>