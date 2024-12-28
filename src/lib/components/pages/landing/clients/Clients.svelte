<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
  interface Props {
    props: any;
  }
  let { props }: Props = $props();
  let api = $state<CarouselAPI>();
</script>

<div>
  <Carousel.Root
    setApi={(emblaApi) => (api = emblaApi)}
    class="w-full  max-w-xs border border-red-400">
    <Carousel.Content>
      {#each Array(10) as _, i (i)}
        <Carousel.Item class="rounded-[2rem] md:basis-1/2 lg:basis-1/5">
          <Card.Root class="">
            <Card.Content
              class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{i + 1}</span>
            </Card.Content>
          </Card.Root>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
