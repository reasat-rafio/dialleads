<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import type { ComparisonProps } from '../../../../../types/landing.types';
  import AiAgentCard from './cards/AIAgentCard.svelte';
  import HumanAgentCard from './cards/HumanAgentCard.svelte';

  let { props }: { props: ComparisonProps } = $props();
  let { comparison } = $derived(props);
  let { comparisonCards, sectionName, sectionTitle, sectionIcon } =
    $derived(comparison);
</script>

<div class="mx-auto max-w-[75rem] px-5 xl:px-0">
  <SectionIconAndName
  sectionTitleClass="text-base lg:text-[1.25rem] font-normal max-w-[43.125rem] mx-auto mb-[3.24rem]"
   {sectionIcon} {sectionName} {sectionTitle} />
  <div
    class="mt-24 flex flex-col-reverse
  gap-20 px-2 md:mt-[4.26rem]
  lg:mx-auto lg:max-w-[65rem] lg:flex-row lg:gap-10 xl:px-0">
    {#each comparisonCards as card}
      {#if card.cardType === 'AI Phone Agent'}
        <AiAgentCard {card} />
      {:else if card.cardType === 'Human Phone Agent'}
        <HumanAgentCard {card} />
      {/if}
    {/each}
  </div>
</div>
