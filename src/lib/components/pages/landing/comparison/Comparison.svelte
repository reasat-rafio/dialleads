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

<div class="mx-auto mb-28 max-w-[75rem]">
  <Section {sectionName} {sectionIcon} {sectionTitle} />
  <div class="mx-auto mt-[4.26rem] grid max-w-[65rem] grid-cols-2 gap-10">
    {#each comparisonCards as card}
      {#if card.cardType === 'AI Phone Agent'}
        <AiAgentCard {card} />
      {:else if card.cardType === 'Human Phone Agent'}
        <HumanAgentCard {card} />
      {/if}
    {/each}
  </div>
</div>
