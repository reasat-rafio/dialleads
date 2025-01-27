<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import type {
    WhyDialleadsAI,
    WhyDialleadsAIProps,
  } from '../../../../../types/landing.types';
  import Card from './Card.svelte';

  let { props }: { props: WhyDialleadsAIProps } = $props();
  let { whyDialleadsAI }: { whyDialleadsAI: WhyDialleadsAI } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, cards } =
    $derived(whyDialleadsAI);
</script>

<div class="mx-auto max-w-[75rem] px-5  xl:px-0">
  <SectionIconAndName
   {sectionIcon} {sectionName} {sectionTitle} />
  <div

    class="mb-[2.5rem] mt-[3.13rem] grid grid-cols-1 gap-[0.88rem] md:gap-[1.88rem]  md:grid-cols-2 lg:mb-[6.26rem] xl:grid-cols-3">

    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
