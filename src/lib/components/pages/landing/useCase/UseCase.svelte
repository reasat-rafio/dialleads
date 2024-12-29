<script lang="ts">
  interface Props {
    props: any;
  }
  let { props }: Props = $props();

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

<div class="relative mb-5 mt-5">
  <div class="absolute h-full w-full">
    <!-- {#if !!props.sectionImage} -->
    <SanityImage
      innerClass="h-full  w-full object-cover"
      class=" h-full w-full bg-black  object-cover"
      src={props?.useCaseSectionImage}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
    <!-- {/if} -->
  </div>

  <div class="z-50 mt-[5.13rem] flex flex-col items-center justify-center">
    <div
      style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
      class="z-50 mb-[1.5rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem]">
      <SanityImage
        class="z-50 h-[1.25rem] w-[1.25rem] "
        src={props?.sectionIcon}
        sizes="05vw"
        imageUrlBuilder={imgBuilder} />
      <h1 class="z-50 text-white">{props.sectionTitle}</h1>
    </div>

    <h2 class="z-50 mb-[0.88rem] text-[3rem] font-semibold text-white">
      {props.title}
    </h2>
    <h3 class="z-50 mb-[3.13rem] text-[1.125rem] font-normal text-white">
      {props.description}
    </h3>

    <div>
      <Carousel.Root
        setApi={(emblaApi) => (api = emblaApi)}
        class="w-full min-w-[64.9rem]  max-w-xs px-[5.56rem]  lg:min-w-[74.9rem]">
        <Carousel.Content>
          {#each props.useCases as useCase, i}
            <Carousel.Item class="rounded-[2rem]  md:basis-1/2 lg:basis-1/3">
              <Card.Root class=" backdrop-blur-xl">
                <Card.Content class="flex flex-col border border-red-600 ">
                  <!-- items-center justify-center p-6  aspect-square-->
                  <SanityImage
                    class="h-full w-full "
                    src={useCase?.useCaseImage}
                    sizes="35vw"
                    imageUrlBuilder={imgBuilder} />
                  <h3 class="text-center text-[1.375rem] font-semibold">
                    {useCase.useCaseTitle}
                  </h3>
                  <h3
                    class="text-center text-[1rem] font-normal text-[#5B6779]">
                    {useCase.useCaseSubTitle}
                  </h3>

                  <div class="mt-4 w-full">
                    <audio controls class="w-full outline-none">
                      <source src={useCase.mp3File} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </Card.Content>
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
