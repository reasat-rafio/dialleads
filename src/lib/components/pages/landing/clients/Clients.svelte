<script lang="ts">
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

<div class="mb-[2.5rem] mt-[1.88rem] lg:mb-[5.25rem] lg:mt-[4.94rem]">
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
        <Carousel.Item class="flex basis-1/3  md:basis-1/4 xl:basis-1/5 ">
          <div class="h-[1.375rem] w-full md:min-h-[3rem]">
            <SanityImage
              class="h-[1.375rem] w-fit  object-contain  md:h-auto"
              src={client.clientImage}
              sizes="15vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
