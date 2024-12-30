<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import Autoplay from 'embla-carousel-autoplay';

  interface Props {
    props: any;
  }
  let { props }: Props = $props();

  let api = $state<CarouselAPI>();
</script>

<div class="mb-[5.25rem]">
  <h1 class="mb-[2rem] text-center text-[1.125rem] font-semibold">
    {props.title}
  </h1>
  <Carousel.Root
    opts={{
      align: 'start',
      loop: true,
      dragFree: true,
      watchDrag: false,
      duration: 8000,
    }}
    plugins={[
      Autoplay({
        delay: 0,
      }),
    ]}
    setApi={(emblaApi) => (api = emblaApi)}
    class="w-screen  px-[1.5rem] md:px-[3.5rem]  lg:px-[4.5rem] xl:min-w-[65rem] ">
    <!-- max-w-xs -->
    <Carousel.Content class=" ">
      {#each props.clients as client}
        <Carousel.Item class="flex basis-1/3  md:basis-1/3 xl:basis-1/5 ">
          <div class="h-[1.375rem] w-full object-contain md:min-h-[3rem]">
            <SanityImage
              class="h-[1.375rem] w-full object-contain  md:min-h-[3rem]"
              src={client.clientImage}
              sizes="15vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
            <!-- h-[2.5rem] w-[11.25rem] -->
            <!-- min-w-[7.1875rem] -->
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
