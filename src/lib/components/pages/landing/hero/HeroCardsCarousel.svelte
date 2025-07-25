<script lang="ts">
  import WaveSurfer from "wavesurfer.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import type { UseCases } from "../../../../../types/landing.types";
  import { onMount, tick } from "svelte";
  import { innerWidth } from "svelte/reactivity/window";
  import { PortableText } from "@portabletext/svelte";
  import HeroSvg from "../../industries/hero/HeroSvg.svelte";
  import { cn } from "$lib/utils";

  interface Props {
    useCases: UseCases[];
  }

  let { useCases }: Props = $props();

  let api = $state<CarouselAPI>();

  let count = $derived.by(() => {
    if (innerWidth.current && innerWidth.current < 640) {
      return api ? api.scrollSnapList().length : 0;
    } else if (innerWidth.current && innerWidth.current < 1024) {
      return api ? api.scrollSnapList().length : 0;
    } else if (innerWidth.current && innerWidth.current > 1024) {
      return api ? api.scrollSnapList().length : 0;
    }
    return api ? api.scrollSnapList().length : 0;
  });
  let current = $state(0);

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on("select", () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });

  let playStates = $state<boolean[]>([]);

  function resolveMp3Url(ref: any) {
    if (!ref) {
      console.error("The mp3File reference is undefined or invalid.");
      return "";
    }

    return `https://cdn.sanity.io/files/zhic6sia/production/${ref.replace("file-", "").replace("-", ".")}`;
  }

  let waveSurferInstances: WaveSurfer[] = []; // Store WaveSurfer instances here

  onMount(() => {
    (async () => {
      await tick();
      const canvas = document.createElement("canvas");
      canvas.width = 100;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Unable to get 2D context for gradient.");
        return;
      }

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#6d28d9");
      gradient.addColorStop(0.3, "#8d78df");
      gradient.addColorStop(1, "white");

      useCases.forEach((useCase: any, i: any) => {
        const waveformElement: any = document.getElementById(`waveform-${i}`);
        const mp3FileUrl = resolveMp3Url(useCase.mp3File.asset._ref); // Resolve URL

        const waveSurfer = WaveSurfer.create({
          container: waveformElement,
          waveColor: gradient,
          progressColor: "#1d1869",
          height: 40,
          barWidth: 4,
          barRadius: 4,
          barGap: 4,
        });

        waveSurfer.load(mp3FileUrl);

        waveSurferInstances[i] = waveSurfer;

        playStates[i] = false;

        waveSurfer.on("finish", () => {
          playStates[i] = false;
        });
      });
    })();

    return () => {
      waveSurferInstances.forEach((waveSurfer) => waveSurfer.destroy());
    };
  });

  function togglePlay(index: number) {
    playStates[index] = !playStates[index];
    waveSurferInstances[index]?.playPause();

    playStates.forEach((_, i) => {
      if (i !== index && waveSurferInstances[i]?.isPlaying()) {
        waveSurferInstances[i]?.pause();
        playStates[i] = false;
      }
    });
  }
</script>

<div class="relative mt-[2.5rem] h-full w-full px-[0.31rem] md:px-5 lg:mt-[5.06rem]">
  <div>
    <div class="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5">
      <div class="mx-auto w-full">
        <Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full max-w-none">
          <Carousel.Content class="-ml-2 w-full lg:-ml-3">
            {#each useCases as useCase, index}
              <Carousel.Item
                class="flex w-full basis-auto justify-center bg-transparent pl-4 max-lg:max-w-[305px] lg:basis-1/3 lg:pl-5 xl:basis-1/4">
                <Card.Root
                  style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.10) 100%);"
                  class="w-full rounded-[1.38rem] border-[0.342px] border-violet-600 px-4 pt-4 backdrop-blur-sm lg:max-w-[305px]">
                  <div
                    class="flex h-[24rem] w-full flex-col rounded-[0.88rem] sm:h-[22.4rem] md:h-[24.4rem] lg:h-[24.8rem] xl:h-[25rem]">
                    <div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
                      <SanityImage
                        class="h-full w-full rounded-[0.88rem]"
                        innerClass="h-full w-full object-cover"
                        lqip
                        src={useCase?.useCaseImage}
                        imageUrlBuilder={imgBuilder}
                        sizes="100vw"
                        alt={useCase?.useCaseImage?.alt || "image"} />
                    </div>

                    <h3
                      title={useCase.useCaseTitle}
                      class="mt-[1.38rem] line-clamp-1 text-center text-[1.125rem] font-semibold text-white lg:text-[1.235rem]">
                      {#if Array.isArray(useCase.useCaseTitle)}
                        <PortableText value={useCase.useCaseTitle} />
                      {:else}
                        {useCase.useCaseTitle}
                      {/if}
                    </h3>
                    <h3 class="text-center text-[0.875rem] font-[300] text-white lg:text-[1rem]">
                      {useCase.useCaseSubTitle}
                    </h3>

                    <div class="mt-[1.5rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden px-4">
                      <button
                        type="button"
                        class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
                        onclick={() => togglePlay(index)}
                        aria-label="play-pause button">
                        {#if playStates[index]}
                          <HeroSvg type="pause" />
                        {:else}
                          <HeroSvg type="play" />
                        {/if}
                      </button>
                      <div id={`waveform-${index}`} class="w-full max-w-[90%] overflow-hidden rounded-lg"></div>
                    </div>
                  </div>
                </Card.Root>
              </Carousel.Item>
            {/each}
          </Carousel.Content>
        </Carousel.Root>

        <div class="z-30 flex justify-center gap-x-2 py-[3.12rem]">
          {#each Array(count) as _, i}
            {#if i === current - 1}
              <div class="z-30 h-3 w-12 rounded-full bg-[#885bf0]"></div>
            {/if}
            {#if i < count - 1}
              <div class="z-30 h-3 w-3 rounded-full bg-[#f8f7f9]"></div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
