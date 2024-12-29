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

<div class="flex flex-col items-center justify-center">
  <div
    class="mb-[1.5rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem]">
    <SanityImage
      class="h-[1.25rem] w-[1.25rem] "
      src={props?.sectionIcon}
      sizes="05vw"
      imageUrlBuilder={imgBuilder} />
    <h1>{props.sectionTitle}</h1>
  </div>

  <h2 class="mb-[3.12rem] text-[3rem] font-semibold">{props.title}</h2>
</div>

<div>
  <Carousel.Root
    setApi={(emblaApi) => (api = emblaApi)}
    class="w-full min-w-[74.9rem] max-w-xs ">
    <Carousel.Content>
      {#each industries as industry}
        <Carousel.Item class="rounded-[2rem] md:basis-1/2 lg:basis-1/3">
          <Card.Root
            class="bg-gradient-to-b from-[#F9F9F9] to-[#F9F9F9] backdrop-blur-xl">
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
                class="mb-[0.75rem] text-center text-[1.375rem] font-semibold">
                {industry.title}
              </h3>
              <h3
                class="max-w-[17.34rem] text-center text-[1rem] font-normal text-[#5B6779]">
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
        <div class="h-3 w-12 rounded-full bg-slate-600"></div>
      {/if}
      {#if i < count - 1}
        <div class="h-3 w-3 rounded-full bg-slate-600"></div>
      {/if}
    {/each}
  </div>
</div>
