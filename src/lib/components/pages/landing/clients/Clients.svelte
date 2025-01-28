<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import Autoplay from 'embla-carousel-autoplay';
  import type { ClientProps } from '../../../../../types/landing.types';
  import { PortableText } from '@portabletext/svelte';
  import ViolateGradient from './ViolateGradient.svelte';

  interface Props {
    props: ClientProps;
  }
  let { props }: Props = $props();

  let api = $state<CarouselAPI>();
</script>

<div class="mb-[2.5rem] mt-[1.88rem]  lg:mt-[2.8rem]">
  <h3 class="mb-[2rem] text-center text-[1.125rem] font-semibold">
    <PortableText
      value={props?.title}
      components={{
        marks: {
          violateGradient: ViolateGradient,
        },
      }} />
  </h3>

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
    class="container w-screen  max-w-sm   sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
    <Carousel.Content class="">
      {#each props.clients as client}
        <Carousel.Item
          class="flex basis-1/3 items-center justify-center md:basis-1/4 xl:basis-1/4 ">
          <div
            class=" h-[1.5rem] w-full sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem]">
            <SanityImage
              class="h-[1.375rem] w-fit  object-contain md:h-[1.36rem] lg:h-[2rem]"
              src={client.clientImage}
              sizes={' (min-width:1024px) 14vw, 26vw'}
              imageUrlBuilder={imgBuilder}
              alt={client?.clientImage?.alt || 'clientImg'} />
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
