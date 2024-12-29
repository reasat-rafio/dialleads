<script lang="ts">
  interface Props {
    props: any;
    industries: any;
  }
  let { props, industries }: any = $props();

  $inspect(props);

  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  let api = $state<CarouselAPI>();

  const count = $derived(api ? api.scrollSnapList().length : 0);
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

<div class="relative mb-5">
  <div class="absolute h-full w-full">
    <!-- {#if !!props.sectionImage} -->
    <SanityImage
      innerClass="h-full  w-full object-cover"
      class=" h-full w-full bg-black  object-cover"
      src={props?.sectionImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
    <!-- {/if} -->
  </div>

  <div class=" flex flex-col items-center justify-center pt-[6rem]">
    <div
      style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
      class="z-50 mb-[1.5rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem]">
      <SanityImage
        class="h-[1.25rem]  w-[1.25rem] pt-1 "
        src={props?.sectionIcon}
        sizes="05vw"
        imageUrlBuilder={imgBuilder} />
      <h1 class="text-[1.125rem] font-medium text-white">
        {props.sectionTitle}
      </h1>
    </div>

    <h2 class="z-50 mb-[3.12rem] text-[3rem] font-semibold text-white">
      {props.title}
    </h2>
  </div>

  <div class="z-50 pb-[6rem]">
    <Carousel.Root
      setApi={(emblaApi) => (api = emblaApi)}
      class="w-full min-w-[75rem] max-w-xs px-[7.56rem] ">
      <Carousel.Content class="px-5">
        {#each industries as industry}
          <Carousel.Item class=" md:basis-1/2 lg:basis-1/3">
            <Card.Root
              style="background: linear-gradient(217deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.08) 100%);"
              class="rounded-[2rem] border border-[#FFFFFF] ">
              <!-- bg-transparent backdrop-blur-lg -->
              <Card.Content
                class="flex  flex-col items-center justify-center p-6">
                <!-- aspect-square -->
                {#if !!industry.useCaseImage}
                  <SanityImage
                    class="mb-[1.25rem] h-[7.5rem] w-[7.5rem]"
                    src={industry?.useCaseImage}
                    sizes="35vw"
                    imageUrlBuilder={imgBuilder} />
                {/if}

                <h3
                  class="mb-[0.75rem] text-center text-[1.375rem] font-semibold text-[#F1F1F4]">
                  {industry.title}
                </h3>
                <h3
                  class="max-w-[17.34rem] text-center text-[1rem] font-normal text-[#F1F1F4]">
                  {industry.description}
                </h3>
              </Card.Content>
            </Card.Root>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
    </Carousel.Root>
    <div class="flex justify-center gap-x-2 py-[3.12rem]">
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
