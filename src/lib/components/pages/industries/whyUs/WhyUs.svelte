<script lang="ts">
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import { PortableText } from "@portabletext/svelte";
  import VioletGradient from "./VioletGradient.svelte";
  import type { WhyUsProps } from "../../../../../types/industries.types";
  import Card from "./Card.svelte";
  import { cn } from "$lib/utils";
  import { inview } from "svelte-inview";
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { page } from "$app/state";

  let { props }: { props: WhyUsProps } = $props();
  let { whyUs } = $derived(props);
  let { sectionIcon, sectionName, sectionTitle, description, cta, cards } = $derived(whyUs);

  let prevIndustry: string | undefined = $state(undefined);
  let visible: boolean[] = $state([]);

  onMount(() => {
    visible = Array(cards.length).fill(false);
  });

  $effect(() => {
    const currentIndustry = page.params.industry;
    // if the industry param changes, reset elementvisible
    if (currentIndustry !== prevIndustry) {
      visible = Array(cards.length).fill(false);
      prevIndustry = currentIndustry;
    }
  });
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
  <div class={cn("mt-10 flex h-fit w-fit rounded-full", "mx-auto border border-gray-200 p-px md:mt-24")}>
    <div class={cn("flex w-fit items-center gap-2 rounded-full bg-transparent px-4 py-2")}>
      <SanityImage
        class="h-[1.125rem] w-[1.125rem]"
        src={sectionIcon}
        sizes="5vw"
        imageUrlBuilder={imgBuilder}
        alt="sectionIcon" />
      <p class={cn("max-w-[269px] truncate text-nowrap text-[#495568]")}>
        {sectionName}
      </p>
    </div>
  </div>
  <div class="mx-auto mt-4 w-full">
    <h2
      class={cn(
        "relative z-[0] w-full flex-shrink-0 text-center font-geist text-black",
        "text-[2.25rem] font-semibold leading-[2.625rem] tracking-[-1%]",
        "lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]",
      )}>
      <PortableText
        value={sectionTitle}
        components={{
          marks: {
            violateGradient: VioletGradient,
          },
        }} />
    </h2>

    <div
      class="mx-auto mt-4 max-w-[43.313rem] text-center font-geist text-[1.125rem] font-normal leading-7 tracking-[0%] text-gray-600/80 lg:text-[1.25rem] lg:leading-[150%]">
      {description}
    </div>
  </div>

  <div class="mt-8 grid grid-cols-1 justify-items-center gap-[1.25rem] md:grid-cols-2 lg:mt-16">
    {#each cards as card, idx (card)}
      <div
        use:inview={{ threshold: 0.1, unobserveOnEnter: false, rootMargin: "50px 0px -50px 0px" }}
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
            <Card {card} {cta} />
          </div>
        </Motion>
      </div>
    {/each}
  </div>
</div>
