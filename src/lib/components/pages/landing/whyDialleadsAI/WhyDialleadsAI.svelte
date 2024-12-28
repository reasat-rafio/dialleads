<script lang="ts">
  import type { WhyDialleadsAI, WhyDialleadsAIProps } from "../../../../../types/landing.types";

    let {props}: {props: WhyDialleadsAIProps} = $props();
    let {whyDialleadsAI}: {whyDialleadsAI: WhyDialleadsAI} = $derived(props);
    let {sectionIcon, sectionName, sectionTitle, cards} = $derived(whyDialleadsAI);
</script>

<div>

</div>