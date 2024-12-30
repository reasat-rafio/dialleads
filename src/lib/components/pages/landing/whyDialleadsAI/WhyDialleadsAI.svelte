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

<div class="mx-auto max-w-[75rem] px-2 xl:px-0">
  <Section {sectionIcon} {sectionName} {sectionTitle} />
  <div
    class="mb-[6.26rem] mt-[3.13rem] grid grid-cols-1 gap-[1.87rem] md:grid-cols-2 xl:grid-cols-3">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
