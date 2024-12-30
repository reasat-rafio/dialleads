<script lang="ts">
  import type { WhyChooseUsProps } from '../../../../../types/landing.types';
  import Card from './Card.svelte';
  import Section from './Section.svelte';

  let { props }: { props: WhyChooseUsProps } = $props();
  let { whyChooseUs } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, cards } = $derived(whyChooseUs);
</script>

<div class="mx-auto max-w-[75rem] px-2 xl:px-0">
  <Section {sectionIcon} {sectionName} {sectionTitle} />
  <div
    class="mb-[5.94rem] mt-[1.87rem] grid grid-cols-1 gap-[1.88rem] md:grid-cols-2 lg:mt-[3.12rem] lg:grid-cols-3">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
