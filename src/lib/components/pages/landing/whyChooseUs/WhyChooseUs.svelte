<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import type { WhyChooseUsProps } from '../../../../../types/landing.types';
  import Card from './Card.svelte';

  let { props }: { props: WhyChooseUsProps } = $props();
  let { whyChooseUs } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, cards } = $derived(whyChooseUs);
</script>

<div class="mx-auto max-w-[75rem] px-5 xl:px-0">
  <SectionIconAndName {sectionIcon} {sectionName} />
  <h2
    class="mt-6 text-center font-geist text-[1.625rem] font-semibold text-black lg:text-5xl">
    {sectionTitle}
  </h2>
  <div
    class=" mt-[1.87rem] grid grid-cols-1 gap-[0.75rem] md:grid-cols-2 lg:mt-[3.12rem] lg:grid-cols-3 lg:gap-[1.88rem]">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
