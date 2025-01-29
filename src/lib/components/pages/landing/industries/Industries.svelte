<script lang="ts">
  interface Props {
    props: IndustriesProps;
  }
  let { props }: any = $props();

  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import type { IndustriesProps } from '../../../../../types/landing.types';
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';

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
<div class="relative mb-0 w-full">
  <div
    class="h-full w-full bg-industry-gradient
    py-5 lg:py-0
    ">
    <img
      src="/grid.png"
      alt="grid overlay"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay lg:opacity-100" />

    <div class="pb-[1.88rem] pt-8 md:pb-[2.25rem] md:pt-24">
      <SectionIconAndName
        bgColor="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
        wrapperClass="mt-0 lg:mt-0 border-none "
        sectionNameClass="text-white"
        sectionTitleClass="text-white   mb-[0.88rem] leading-tight"
        sectionIcon={props?.sectionIcon}
        sectionName={props?.sectionTitle}
        sectionTitle={props?.title} />
    </div>

    <div
      class="container z-50 mx-auto px-[1.5rem] pb-[0rem] md:pb-[4.21rem] lg:px-[7.5rem]">
      <Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full  ">
        <Carousel.Content class="lg:-ml-1">
          {#each props?.industries as industry}
            <Carousel.Item
              class="basis-full bg-transparent pl-4 md:basis-1/2  lg:basis-1/3 lg:pl-7">
              <Card.Root
                style="background: linear-gradient(217deg, rgba(255, 255, 255, 0.05) 100%, rgba(255, 255, 255, 0.08) 90%);"
                class="rounded-[2rem] border-[0.09rem]   border-[#413e3e] border-b-[#4a4848]  bg-transparent px-1 shadow-lg backdrop-blur-sm ">
                <Card.Content
                  class="m-1  flex flex-col items-center justify-center bg-transparent p-6">
                  {#if !!industry.useCaseImage}
                    <SanityImage
                      class="mb-[1.25rem] h-[7.5rem] w-[7.5rem]"
                      src={industry?.useCaseImage}
                      sizes="35vw"
                      imageUrlBuilder={imgBuilder} />
                  {/if}

                  <h3
                    class="mb-[0.75rem] text-center text-[1.25rem] font-semibold text-[#F1F1F4] md:text-[1.375rem]">
                    {industry.title}
                  </h3>
                  <h3
                    class="h-[3.5rem] max-w-[17.34rem] text-center text-[1rem] font-normal text-[#F1F1F4]">
                    {industry.description}
                  </h3>
                </Card.Content>
              </Card.Root>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
      </Carousel.Root>
      <div class="my-[1.88rem] flex justify-center gap-x-2">
        {#each Array(count) as _, i}
          {#if i === current - 1}
            <div class="z-50 h-3 w-12 rounded-full bg-[#8B5CF6]"></div>
          {/if}
          {#if i < count - 1}
            <div class="z-50 h-3 w-3 rounded-full bg-[#a583f3]"></div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>
