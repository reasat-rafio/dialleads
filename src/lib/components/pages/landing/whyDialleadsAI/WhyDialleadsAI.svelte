<script lang="ts">
  import type {
    WhyDialleadsAI,
    WhyDialleadsAIProps,
  } from '../../../../../types/landing.types';
  import Card from './Card.svelte';
  import Section from './Section.svelte';

  let { props }: { props: WhyDialleadsAIProps } = $props();
  let { whyDialleadsAI }: { whyDialleadsAI: WhyDialleadsAI } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, cards } =
    $derived(whyDialleadsAI);
</script>

<div>
  <Section {sectionIcon} {sectionName} {sectionTitle} />
  <div class="grid grid-cols-3 gap-[1.87rem] mt-[3.13rem] mb-[6.26rem]">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
