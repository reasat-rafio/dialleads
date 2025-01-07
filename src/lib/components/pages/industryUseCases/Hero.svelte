<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { onMount } from 'svelte';

  import type {
    HeroProps,
    IndustryUseCaseProps,
  } from '../../../../types/industryUseCases.types';
  import WaveSurfer from 'wavesurfer.js';
  import { cn } from '$lib/utils';
  let {
    props,
    industryUseCases,
  }: { props: HeroProps; industryUseCases: IndustryUseCaseProps } = $props();

  let windowWidth = $state(0);

  function resolveMp3Url(ref: string) {
    return `https://cdn.sanity.io/files/ttleus4d/production/${ref
      .replace('file-', '')
      .replace('-', '.')}`;
  }

  const mp3FileUrl = resolveMp3Url(industryUseCases?.mp3File.asset._ref);

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

      waveSurferInstance.load(mp3FileUrl); // Load the single audio file
    }

    return () => {
      // Cleanup WaveSurfer instance on unmount
      if (waveSurferInstance) {
        waveSurferInstance.destroy();
      }
    };
  });

  function playPauseAudio() {
    if (waveSurferInstance) {
      waveSurferInstance.playPause();
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="absolute top-[5.41rem] lg:top-[8.56rem] xl:px-0">
  <div class="relative">
    <div
      class={cn(
        'container mx-auto h-full w-full lg:h-[10.5rem]',
        'sm:min-w-lg max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl',
        'flex  sm:flex-col ',
        'text-white',
      )}>
      <div
        class="grid w-full grid-cols-12 gap-y-[2.52rem] lg:gap-x-[110px] xl:gap-x-[100px]">
        <div class="col-span-12 w-full lg:col-span-6 lg:w-full xl:col-span-8">
          <div
            class="flex w-[19.0625rem] flex-col text-center lg:w-[38.4rem] lg:text-left">
            {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children)}
              <h1
                class="mb-[1.62rem] w-fit text-center text-[1.625rem] font-semibold lg:max-w-[40.18rem] lg:text-left lg:text-[3rem]">
                {props?.title[0]?.children[0]?.text}

                <span
                  class="bg-gradient-to-r from-[#731AFF] to-[#FCCEEE] bg-clip-text text-transparent">
                  {props.title[1].children[0]?.text}
                </span>
              </h1>
            {/if}

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
                    alt="" />

                  <span>{props?.link?.title}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 mr-5 w-fit max-w-[19.75rem] lg:col-span-6 xl:col-span-4">
          <div
            style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
            class="w-[19rem] rounded-[1.38rem] border-[0.342px] border-gray-400 bg-transparent p-[0.63rem]">
            <div
              class="flex w-full flex-col rounded-[0.88rem] bg-white p-[0.55rem]">
              <SanityImage
                class="h-full w-full object-cover"
                src={industryUseCases?.useCaseImage}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                imageUrlBuilder={imgBuilder} />
              <h3
                class="mt-[1.38rem] text-center text-[1.375rem] font-semibold text-black">
                {industryUseCases.useCaseTitle}
              </h3>
              <h3
                class="mb-[1rem] text-center text-[1rem] font-normal text-[#5B6779]">
                {industryUseCases.useCaseSubTitle}
              </h3>
              <hr />

              <!-- WaveSurfer Audio Player -->
              <div
                class="mt-[1rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden">
                <button
                  class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
                  onclick={playPauseAudio}>
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
                </button>
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
