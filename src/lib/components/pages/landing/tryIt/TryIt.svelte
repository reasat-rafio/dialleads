<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { PortableText } from "@portabletext/svelte";
  import type { TestCallProps } from "../../../../../types/landing.types";
  import VioletGradient from "./VioletGradient.svelte";
  import { Skeleton } from "$lib/components/ui/skeleton/index.js";
  import { writable } from "svelte/store";

  interface Props {
    props: TestCallProps;
  }

  let { props }: Props = $props();

  const iframeLoaded = writable(false);
</script>

<svelte:head>
  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
</svelte:head>

<div class="relative mb-20 mt-[73px] px-5">
  <div
    class="relative mx-auto h-fit w-full max-w-7xl overflow-visible rounded-[1.25rem] bg-enterpricePlan-gradient-mobile md:bg-enterpricePlan-gradient-desktop">
    <SanityImage
      lqip
      innerClass="h-full w-full object-cover"
      class="absolute inset-0 h-full w-full object-cover"
      src={props.backgroundImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder}
      alt={"bannerImg"} />

    <div class="relative z-10 h-fit w-full px-5 pb-6 pt-[52px] lg:px-[50px] lg:py-[40px]">
      <div class="flex w-full flex-col">
        <div
          class="flex w-fit items-center gap-2 rounded-full border border-violet-400 bg-[#FFFFFF33] px-3 py-2 pr-4 text-white">
          <SanityImage
            class="h-5 w-5"
            src={props.sectionIcon}
            sizes="20px"
            imageUrlBuilder={imgBuilder}
            alt={"section icon"} />
          <p class="text-nowrap font-geist text-[18px] font-normal leading-[24px] tracking-[0%]">
            {props.sectionTitle}
          </p>
        </div>

        <h2 class="mt-3 font-geist text-[48px] font-semibold leading-[115%] tracking-[-1px] text-white">
          <PortableText
            value={props?.title}
            components={{
              marks: {
                violateGradient: VioletGradient,
              },
            }} />
        </h2>

        <p class="mt-[6px] font-geist text-[16px] font-normal leading-[150%] tracking-[0%] text-gray-50">
          {props.supportingText}
        </p>
      </div>

      <div class="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="relative col-span-full">
          {#if !$iframeLoaded}
            <Skeleton class="h-[8.25rem] w-full rounded-[12px]" />
          {/if}

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/XiXpRE3Bt1hP4bAk6BHf"
            style="width:100%; !height: auto; min-height: 300px;border:none;border-radius:12px"
            id="inline-XiXpRE3Bt1hP4bAk6BHf"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Try A Free Test Call"
            data-height="452"
            data-layout-iframe-id="inline-XiXpRE3Bt1hP4bAk6BHf"
            data-form-id="XiXpRE3Bt1hP4bAk6BHf"
            title="Try A Free Test Call"
            class={!$iframeLoaded ? "hidden" : "block"}
            onload={() => iframeLoaded.set(true)}>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>
