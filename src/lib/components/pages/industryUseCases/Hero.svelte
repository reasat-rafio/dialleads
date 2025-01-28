<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { onMount } from 'svelte';
  import { PortableText } from '@portabletext/svelte';
  import ViolateGradient from './ViolateGradient.svelte';

  import type {
    HeroProps,
    IndustryUseCaseProps,
  } from '../../../../types/industryUseCases.types';
  import WaveSurfer from 'wavesurfer.js';

  let {
    props,
    industryUseCase,
  }: { props: HeroProps; industryUseCase: IndustryUseCaseProps } = $props(); ///IndustryUseCaseProps

  let windowWidth = $state(0);

  function resolveMp3Url(ref: string) {
    return `https://cdn.sanity.io/files/ttleus4d/production/${ref
      .replace('file-', '')
      .replace('-', '.')}`;
  }

  const mp3FileUrl = resolveMp3Url(industryUseCase?.mp3File.asset._ref);

  let waveSurferInstance: WaveSurfer | null = null;

  // Initialize WaveSurfer instances on mount

  onMount(() => {
    const waveformElement = document.getElementById('waveform');
    if (waveformElement) {
      waveSurferInstance = WaveSurfer.create({
        container: waveformElement,
        waveColor: '#d1d5db',
        progressColor: '#6d28d9',
        height: 80,
        barWidth: 4,
        barRadius: 2,
        barGap: 4,
      });

      waveSurferInstance.load(mp3FileUrl); // Load the single audio file ..

      // Listen for the finish event to reset the play button
      waveSurferInstance.on('finish', () => {
        showPlayIcon = false;
      });
    }

    return () => {
      if (waveSurferInstance) {
        waveSurferInstance.destroy();
      }
    };
  });

  let showPlayIcon = $state(false);

  function playPauseAudio() {
    if (waveSurferInstance) {
      waveSurferInstance.playPause();
      showPlayIcon = !showPlayIcon;
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
  class="relative bg-hero-gradient lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem]">
  <img
    src="/grid.png"
    alt="grid overlay"
    class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100 mix-blend-overlay" />
  <div class="relative">
    <div
      class="container mx-auto pb-[4.22rem] pt-[8.47rem] text-white lg:px-24">
      <div
        class="grid w-full grid-cols-12 gap-y-[2.52rem] lg:gap-x-[6rem] xl:gap-x-[100px]">
        <div class="col-span-12 w-full lg:col-span-5 xl:col-span-8">
          <div
            class="flex w-full flex-col items-center text-center lg:items-start lg:text-left xl:w-[38.4rem]">
            <h1
              class="mb-[1.62rem] leading-tight w-fit text-center text-[1.625rem] font-semibold lg:max-w-[40.18rem] lg:text-left lg:text-[3rem]">
              <PortableText
                value={props?.title}
                components={{
                  marks: {
                    violetGradient: ViolateGradient,
                  },
                }} />
            </h1>

            <h2 class="text-[1.25rem] font-medium text-white lg:pr-5">
              {props.description}
            </h2>

            <div
              class=" mt-6 flex justify-center lg:mt-[1.88rem] lg:justify-start">
              <div
                class="inline-flex w-full max-w-[14.420rem]
              animate-shine items-center justify-center rounded-xl border-[1px]
              border-l border-t border-white/30 border-b-white/15 border-r-white/15 bg-[linear-gradient(110deg,#2e1065,50%,#7C3AED,55%,#2e1065)]
              bg-[length:200%_100%] px-2 py-2 text-sm shadow-xl transition-colors">
                <Button
                  class="flex h-[3.5rem]  w-[13.5rem] 
                  items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 px-6 
                  py-3 font-geist text-lg font-semibold text-white shadow-xl hover:shadow-xl focus:outline-none
        ">
                  <SanityImage
                    class="h-5 w-5"
                    src={props?.link?.icon}
                    sizes="5vw"
                    imageUrlBuilder={imgBuilder}
                    alt={props?.link?.icon?.alt || 'icon'} />

                  <span>{props?.link?.title}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 mx-auto lg:col-span-7 xl:col-span-4 xl:ml-[2rem] xl:mr-0">
          <!-- ml-0 mr-5 w-fit max-w-[19.75rem]  lg:mr-[19rem]-->
          <div
            style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
            class="w-[19rem] rounded-[1.38rem] border-[0.342px] border-gray-400 bg-transparent p-[0.63rem]">
            <div
              class="flex w-full flex-col rounded-[0.88rem] bg-white p-[0.55rem]">
              <div
                class="max-h-[215px] min-h-full overflow-hidden rounded-[0.88rem]">
                <SanityImage
                  class="h-full w-full object-cover"
                  src={industryUseCase?.useCaseImageForAI}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imageUrlBuilder={imgBuilder} />
              </div>
              <h3
                class="mt-[1.38rem] text-center text-[1.375rem] font-semibold text-black">
                {industryUseCase.useCaseTitleForAI}
              </h3>
              <h3
                class="mb-[1rem] text-center text-[1rem] font-normal text-[#5B6779]">
                {industryUseCase.useCaseSubTitleForAI}
              </h3>
              <hr />

              <div
                class="mt-[1rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden">
                <Button
                  class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
                  onclick={playPauseAudio}>
                  {#if showPlayIcon}
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
                </Button>
                <div
                  id={`waveform`}
                  class="w-full max-w-[90%] overflow-hidden rounded-lg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
