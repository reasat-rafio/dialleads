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

<div class="mx-auto mt-[2.5rem] max-w-[75rem] px-5 lg:mt-[7.5rem] xl:px-0">
  <Section {sectionIcon} {sectionName} {sectionTitle} />
  <div
    class="mb-[2.5rem] mt-[3.13rem] grid grid-cols-1 gap-[1.87rem] md:grid-cols-2 lg:mb-[6.26rem] xl:grid-cols-3">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
