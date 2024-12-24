<script lang="ts">
  // import Carousel from '$lib/components/ui/carousel/carousel.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import * as Carousel from '$lib/components/ui/carousel/index.ts';
  import Autoplay from 'embla-carousel-autoplay';

  let { props } = $props();
</script>

<!-- <div>Customers - image issue </div> -->
<div class="">
  <h1 class="max-w-[64rem] text-center text-[2.5rem] font-semibold">
    {props.title}
  </h1>
  <div>
    <Carousel.Root
      opts={{ align: 'start', loop: true }}
      plugins={[Autoplay({ delay: 760 })]}
      class="w-full">
      <Carousel.Content>
        {#each props.brands as { brandImage }, i}
          <Carousel.Item class="basis-1/6 md:basis-1/6">
            <div class="p-1">
              <!-- <img
                    class="aspect-video h-full w-full object-cover shadow-sm"
                    /> -->
              <SanityImage
                class="w-auto"
                src={brandImage}
                sizes="05vw"
                imageUrlBuilder={imgBuilder} />
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <!-- <Carousel.Previous />
      <Carousel.Next /> -->
    </Carousel.Root>
  </div>
</div>
