<script lang="ts">
  import WaveSurfer from 'wavesurfer.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import type { UseCaseProps } from '../../../../../types/landing.types';
  import { onMount } from 'svelte';

  interface Props {
    props: UseCaseProps;
    industries: any;
  }
  let { props, industries }: Props = $props();

  let api = $state<CarouselAPI>();

  let windowWidth = $state(0);
  let count = $derived.by(() => {
    if (windowWidth < 640) {
      return api ? api.scrollSnapList().length : 0;
    } else if (windowWidth < 1024) {
      return api ? api.scrollSnapList().length : 0;
    } else if (windowWidth > 1024) {
      return api ? api.scrollSnapList().length : 0;
    }
    return api ? api.scrollSnapList().length : 0;
  });
  let current = $state(0);

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on('select', () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });

  let playStates = $state<boolean[]>([]);

  let waveforms = [];

  function resolveMp3Url(ref: any) {
    if (!ref) {
      console.error('The mp3File reference is undefined or invalid.');
      return '';
    }

    return `https://cdn.sanity.io/files/ttleus4d/production/${ref
      .replace('file-', '')
      .replace('-', '.')}`;
  }

  let waveSurferInstances: WaveSurfer[] = []; // Store WaveSurfer instances here

  // Initialize WaveSurfer instances on mount
  onMount(() => {
    industries.forEach((useCase: any, i: any) => {
      const waveformElement: any = document.getElementById(`waveform-${i}`);
      const mp3FileUrl = resolveMp3Url(useCase.mp3File.asset._ref); // Resolve URL

      const waveSurfer = WaveSurfer.create({
        container: waveformElement,
        waveColor: '#d1d5db',
        progressColor: '#6d28d9',
        height: 80,
        barWidth: 4,
        barRadius: 2,
        barGap: 4,
      });
      waveSurfer.load(mp3FileUrl); // Dynamically load the audio file
      waveSurferInstances[i] = waveSurfer; // Store the instance

      // Initialize play state for each player
      playStates[i] = false;
    });

    return () => {
      // Cleanup WaveSurfer instances on unmount
      waveSurferInstances.forEach((waveSurfer) => waveSurfer.destroy());
    };
  });

  function togglePlay(index: number) {
    playStates[index] = !playStates[index];
    waveSurferInstances[index]?.playPause();

    // Pause all other players
    playStates.forEach((_, i) => {
      if (i !== index && waveSurferInstances[i]?.isPlaying()) {
        waveSurferInstances[i]?.pause();
        playStates[i] = false;
      }
    });
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
  class="relative mt-[2.5rem] h-full w-full px-[0.31rem] md:px-5 lg:mt-[5.06rem]">
  <div
    class="h-full w-full rounded-[1.88rem] bg-real-world-gradient pt-[2rem]
    lg:pt-[5.13rem]
    ">
    <img
      src="/grid.png"
      alt="grid overlay"
      class="pointer-events-none absolute inset-0 h-full w-full opacity-60 mix-blend-overlay lg:opacity-100" />

    <div class="z-50 flex flex-col items-center justify-center">
      <div
        style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
        class="z-50 mb-[0.75rem] flex gap-x-[0.5rem] rounded-full px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
        <SanityImage
          class="z-50 h-[1.25rem] w-[1.25rem] pt-1 "
          src={props?.sectionIcon}
          sizes="05vw"
          imageUrlBuilder={imgBuilder} />
        <h3 class="z-50 text-white">{props.sectionTitle}</h3>
      </div>

      <div class="absolute hidden lg:flex">
        <SanityImage
          class=" z-50 h-auto lg:bottom-[10rem] lg:left-[26rem] lg:max-w-[10.0625rem] xl:bottom-[13rem] xl:left-[29rem]  xl:max-w-[14.0625rem]"
          src={props?.clickToPlayImage}
          sizes="90vw"
          imageUrlBuilder={imgBuilder} />
      </div>
      <h2
        class="z-50 mb-[0.75rem] max-w-[20.93rem] text-center text-[1.625rem] font-semibold text-white lg:mb-[0.88rem] lg:max-w-[44rem] lg:text-[3rem] lg:leading-[3.6rem]">
        {props.title}
      </h2>
      <h3
        class="z-50 mb-[0.88rem] max-w-[44rem] px-10 text-center text-[1rem] font-normal text-white lg:mb-[3.13rem] lg:px-0 lg:text-[1.125rem]">
        {props.description}
      </h3>

      <div class="mb-[0.88rem] flex lg:hidden">
        <SanityImage
          class=" z-50  w-[6.688rem]  "
          src={props?.clickToPlayImage}
          sizes="70vw"
          imageUrlBuilder={imgBuilder} />
      </div>

      <div class="container mx-auto px-[1.5rem] lg:px-[7.5rem]">
        <Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full">
          <Carousel.Content>
            {#each industries as useCase, index}
              <Carousel.Item
                class="w-full max-w-[23.625rem] basis-full bg-transparent sm:basis-1/2 lg:basis-1/3">
                <Card.Root
                  style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
                  class="w-full rounded-[1.38rem] border-[0.342px] border-gray-400 bg-transparent p-[0.75rem]">
                  <div
                    class="flex h-full w-full flex-col rounded-[0.88rem] bg-white p-[0.55rem]">
                    <SanityImage
                      class="h-full w-full border bg-cover bg-center object-cover"
                      src={useCase?.useCaseImageForAI}
                      imageUrlBuilder={imgBuilder} />
                    <!-- sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" -->
                    <h3
                      class="mt-[1.38rem] text-center text-[1.125rem] font-semibold lg:text-[1.375rem]">
                      {useCase.useCaseTitleForAI}
                    </h3>
                    <h3
                      class="mb-[1rem] text-center text-[0.875rem] font-normal text-[#5B6779] lg:text-[1rem]">
                      {useCase.useCaseSubTitleForAI}
                    </h3>
                    <hr />

                    <!-- WaveSurfer Audio Player -->
                    <div
                      class="mt-[1rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden">
                      <button
                        class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
                        onclick={() => togglePlay(index)}>
                        {#if playStates[index]}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-pause text-[#8B5CF6]">
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                          </svg>
                        {:else}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVG">
                              <path
                                id="Vector"
                                d="M12.7019 6.26776L4.17882 1.22898C3.48632 0.819773 2.42578 1.21687 2.42578 2.22899V12.3041C2.42578 13.2121 3.41126 13.7594 4.17882 13.3041L12.7019 8.26778C13.4622 7.81984 13.4646 6.71571 12.7019 6.26776Z"
                                fill="#8B5CF6" />
                            </g>
                          </svg>
                        {/if}
                      </button>
                      <div
                        id={`waveform-${index}`}
                        class="w-full max-w-[90%] overflow-hidden rounded-lg">
                      </div>
                    </div>
                  </div>
                </Card.Root>
              </Carousel.Item>
            {/each}
          </Carousel.Content>
        </Carousel.Root>

        <div class="z-50 flex justify-center gap-x-2 py-[3.12rem]">
          {#each Array(count) as _, i}
            {#if i === current - 1}
              <div class="z-50 h-3 w-12 rounded-full bg-[#8B5CF6]"></div>
            {/if}
            {#if i < count - 1}
              <div class="z-50 h-3 w-3 rounded-full bg-[#ad90f0]"></div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
