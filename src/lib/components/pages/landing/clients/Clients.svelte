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
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
    setApi={(emblaApi) => (api = emblaApi)}
    class="h-[2.5rem] min-w-[75rem]  max-w-xs ">
    <Carousel.Content>
      {#each props.clients as client}
        <Carousel.Item class="  basis-1/5 pl-[1rem] md:basis-1/5 lg:basis-1/5">
          <div class="w-fit">
            <SanityImage
              class="h-[2.5rem] w-full  border  object-contain"
              src={client.clientImage}
              sizes="10vw"
              imageUrlBuilder={imgBuilder}
              alt="SliderMainImage" />
            <!-- min-w-[7.1875rem] -->
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
