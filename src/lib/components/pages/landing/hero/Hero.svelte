<script lang="ts">
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { Button } from "$lib/components/ui/button";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import { PortableText } from "@portabletext/svelte";
  import VioletGradient from "./VioletGradient.svelte";
  import type { HeroProps } from "../../../../../types/landing.types";
  import HeroCardsCarousel from "./HeroCardsCarousel.svelte";

  let { props }: { props: HeroProps } = $props();
  let { hero } = $derived(props);
</script>

<div class="relative mt-[0.3125rem] w-full px-[0.3125rem] lg:mt-[0.625rem] lg:px-[0.625rem]">
  <div
    class="relative rounded-[0.75rem] bg-hero-gradient-mobile pt-[7.31rem] lg:rounded-b-[1.5rem] lg:rounded-t-[1rem] lg:bg-hero-gradient lg:pt-[5.7rem]">
    <img
      src="/grid.png"
      alt="grid overlay"
      class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover mix-blend-overlay"
      draggable="false" />
    <SectionIconAndName
      bgColor="background: linear-gradient(120deg, rgba(32, 30, 44, 1.0) 0%, rgba(53, 50, 63, 1.0) 100%);"
      wrapperClass="relative"
      borderClass="z-10 relative bg-primary-gradient bg-clip-padding"
      sectionNameClass="text-white text-[1.125rem] leading-[1.5rem] tracking-[0%] font-semibold max-w-[16rem]"
      sectionTitleClass="text-white mb-[0.88rem] leading-tight"
      sectionIcon={hero?.sectionIcon}
      sectionName={hero?.sectionName} />
    <div class="relative z-10 bg-transparent">
      <h1
        class="mx-auto mb-3 w-fit px-0.25rem text-center font-geist text-[3rem] font-semibold leading-[115%] tracking-[-0.063rem] text-white md:px-0 lg:text-[4.25rem] lg:font-bold lg:leading-[5.125rem] lg:tracking-[-0.088rem]">
        <PortableText
          value={hero?.heroTitle}
          components={{
            marks: {
              violetGradient: VioletGradient,
            },
          }} />
      </h1>
    </div>

    <p
      class="app-body-4 mx-auto mt-4 w-full max-w-[20.938rem] text-center font-normal text-[#DCDAE0] lg:mt-[0.75rem] lg:max-w-[39.188rem] lg:px-12 lg:text-[1.25rem] lg:leading-[150%] lg:tracking-[0%]">
      {hero?.subtitle}
    </p>

    <div class="mx-[0.94rem] mt-[3rem] flex justify-center lg:mt-[1.88rem]">
      <div
        class="relative z-[10] inline-flex w-full max-w-[14.420rem] animate-shine items-center justify-center rounded-xl border-[0.063rem] border-l border-t border-white/30 border-b-white/15 border-r-white/15 bg-transparent bg-[linear-gradient(110deg,rgba(46,16,101,0.8)_50%,rgba(124,58,237,0.8)_55%,rgba(46,16,101,0.8))] bg-[length:200%_100%] px-2 py-2 text-sm shadow-xl backdrop-blur-[0.063rem] transition-colors">
        <Button
          href={hero.link.type === "internal" ? hero.link.internalLink : hero.link.externalLink}
          class="flex h-[3.5rem] w-[13.5rem] items-center rounded-lg bg-primary-gradient px-6 py-3 font-geist text-lg font-semibold text-white shadow-xl transition-all duration-200 ease-linear hover:shadow-xl hover:brightness-90 focus:outline-none">
          {#if hero?.link?.icon}
            <SanityImage
              class="h-5 w-5"
              src={hero.link.icon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={hero.link.icon.alt || "icon"} />
          {/if}

          <span>{hero?.link?.title}</span>
        </Button>
      </div>
    </div>

    <div class="relative z-10 mx-auto mt-12 w-full max-w-7xl px-5 pb-10 2xl:px-0">
      {#if hero?.useCases?.length}
        <HeroCardsCarousel useCases={hero.useCases} />
      {/if}
    </div>
  </div>
</div>
