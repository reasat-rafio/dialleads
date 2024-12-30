<script lang="ts">
  import type { WhyChooseUsProps } from "../../../../../types/landing.types";
  import Card from "./Card.svelte";
  import Section from "./Section.svelte";

    let {props}: { props: WhyChooseUsProps } = $props();
    let { whyChooseUs } = $derived(props);
    let { sectionIcon, sectionName, sectionTitle, cards } = $derived(whyChooseUs);
</script>

<div>
    <Section {sectionIcon} {sectionName} {sectionTitle} />
    <div class="grid grid-cols-3 gap-[1.88rem] mt-[3.12rem] mb-[5.94rem]">
        {#each cards as card}
            <Card {card} />
        {/each}
    </div>
</div>