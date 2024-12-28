<script lang="ts">
  interface Props {
    props: any;
  }
  let { props }: Props = $props();

  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';

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

<div class="flex flex-col justify-center text-center">
  <div>Industries</div>
  <h1>Enterprise-Grade Security and Protection</h1>
</div>

<div>
  <Carousel.Root
    setApi={(emblaApi) => (api = emblaApi)}
    class="w-full min-w-[74.9rem] max-w-xs border border-red-400">
    <Carousel.Content>
      {#each Array(5) as _, i (i)}
        <Carousel.Item class="rounded-[2rem] md:basis-1/2 lg:basis-1/3">
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
