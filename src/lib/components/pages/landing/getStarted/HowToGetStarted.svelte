<script lang="ts">
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import { Motion } from "svelte-motion";
  import type { HowtoGetStartedProps } from "../../../../../types/landing.types";
  import Card from "./Card.svelte";
  import { inview } from "svelte-inview";
  import { onMount } from "svelte";

  let { props }: { props: HowtoGetStartedProps } = $props();
  let { getStarted } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, cards } = $derived(getStarted);

  let visible: boolean[] = $state([]);

  onMount(() => {
    visible = Array(cards.length).fill(false);
  });
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
  <SectionIconAndName
    sectionNameClass="text-[#495568]"
    sectionTitleClass="font-geist text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-1%] lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]"
    borderClass="border border-gray-200"
    {sectionIcon}
    {sectionName}
    {sectionTitle} />

  <div class="mt-8 grid grid-cols-1 justify-items-center gap-[1.25rem] md:grid-cols-2 xl:grid-cols-4">
    {#each cards as card, idx (card)}
      <div
        use:inview={{ threshold: 0.2, unobserveOnEnter: false, rootMargin: "80px 0px -100px 0px" }}
        oninview_enter={() => {
          visible[idx] = true;
        }}
        class="h-full w-full">
        <Motion
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: visible[idx] ? 1 : 0, y: visible[idx] ? 0 : 36 }}
          transition={{
            type: "tween",
            damping: 30,
            stiffness: 250,
            duration: 0.4,
            delay: idx * 0.15,
          }}
          let:motion>
          <div use:motion class="h-full w-full">
            <Card {card} />
          </div>
        </Motion>
      </div>
    {/each}
  </div>
</div>
