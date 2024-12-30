<script lang="ts">
  import type { ComparisonProps } from '../../../../../types/landing.types';
  import AiAgentCard from './cards/AIAgentCard.svelte';
  import HumanAgentCard from './cards/HumanAgentCard.svelte';
  import Section from './Section.svelte';

  let { props }: { props: ComparisonProps } = $props();
  let { comparison } = $derived(props);
  let { comparisonCards, sectionName, sectionTitle, sectionIcon } =
    $derived(comparison);
</script>

<div class="mx-auto max-w-[75rem]">
  <Section {sectionName} {sectionIcon} {sectionTitle} />
  <div class="lg:mx-auto mt-24 md:mt-[4.26rem]   
  lg:max-w-[65rem] flex flex-col-reverse 
  lg:flex-row gap-20 lg:gap-10 px-2 xl:px-0">
    {#each comparisonCards as card}
      {#if card.cardType === 'AI Phone Agent'}
        <AiAgentCard {card} />
      {:else if card.cardType === 'Human Phone Agent'}
        <HumanAgentCard {card} />
      {/if}
    {/each}
  </div>
</div>
