<script lang="ts">
  interface Props {
    props: UseCaseProps;
  }
  let { props }: Props = $props();

  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import type { UseCaseProps } from '../../../../../types/landing.types';

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
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="relative mx-[0.31rem] mb-5 mt-5">
  <div class="absolute h-full w-full">
    <SanityImage
      innerClass="h-full  w-full object-cover"
      class=" h-full w-full overflow-hidden rounded-[1.25rem] bg-black object-cover  lg:rounded-[2rem]"
      src={props?.useCaseSectionImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
  </div>

  <div class="z-50 mt-[5.13rem] flex flex-col items-center justify-center">
    <div
      style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
      class="z-50 mb-[1.5rem] flex gap-x-[0.5rem] rounded-full px-[1.52rem] py-[0.52rem]">
      <SanityImage
        class="z-50 h-[1.25rem] w-[1.25rem] pt-1 "
        src={props?.sectionIcon}
        sizes="05vw"
        imageUrlBuilder={imgBuilder} />
      <h1 class="z-50 text-white">{props.sectionTitle}</h1>
    </div>

    <h2
      class="z-50 mb-[0.88rem] text-center text-[1.625rem] font-semibold text-white lg:text-[3rem]">
      {props.title}
    </h2>
    <h3
      class="z-50 mb-[3.13rem] px-10 text-center text-[1rem] font-normal text-white lg:px-0 lg:text-[1.125rem]">
      {props.description}
    </h3>

    <div>
      <Carousel.Root
        setApi={(emblaApi) => (api = emblaApi)}
        class="mx-5 w-full max-w-xs  sm:min-w-[40.9rem] md:max-w-[56rem] md:px-[1.56rem]  lg:max-w-[72rem] lg:px-[5.56rem]  xl:max-w-[72rem]">
        <Carousel.Content>
          {#each props.useCases as useCase, i}
            <Carousel.Item
              class=" w-full basis-full bg-transparent sm:basis-1/2 lg:basis-1/3">
              <Card.Root
                style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
                class="w-full  rounded-[1.38rem] border-[0.342px] border-gray-400 bg-transparent p-[0.75rem]">
                <div
                  class="flex w-full flex-col rounded-[0.88rem] bg-white p-[0.55rem]">
                  <SanityImage
                    class="h-full  w-full object-cover"
                    src={useCase?.useCaseImage}
                    sizes="100vw"
                    imageUrlBuilder={imgBuilder} />
                  <h3
                    class="mt-[1.38rem] h-fit text-center text-[1.375rem] font-semibold">
                    {useCase.useCaseTitle}
                  </h3>
                  <h3
                    class="mb-[1rem] text-center text-[1rem] font-normal text-[#5B6779]">
                    {useCase.useCaseSubTitle}
                  </h3>
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

<!-- <div class="mt-4 w-full">
                    <audio controls class="w-full outline-none">
                      <source src={useCase.mp3File} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div> -->
