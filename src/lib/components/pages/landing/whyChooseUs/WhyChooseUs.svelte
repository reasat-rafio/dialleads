<script lang="ts">
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import type { WhyChooseUsProps, WhyChooseUs } from "../../../../../types/landing.types";
  import Card from "./Card.svelte";

  interface Props {
    props: WhyChooseUsProps;
  }

  let { props }: Props = $props();
  let {
    whyChooseUs: { sectionIcon, sectionName, sectionTitle, cards },
  }: { whyChooseUs: WhyChooseUs } = $derived(props);
</script>

<div class="mx-auto max-w-7xl px-[1.25rem] xl:px-0">
  <SectionIconAndName
    sectionNameClass="text-[#495568]"
    sectionTitleClass="font-geist text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-1%] lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]"
    borderClass="border border-gray-200"
    {sectionIcon}
    {sectionName}
    {sectionTitle} />
  <div class="mt-8 grid grid-cols-1 gap-[0.75rem] md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-[1.88rem]">
    {#each cards as card}
      <Card {card} />
    {/each}
  </div>
</div>
