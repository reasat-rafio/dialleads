<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import Autoplay from "embla-carousel-autoplay";
  import type { ClientProps } from "../../../../../types/landing.types";
  import { PortableText } from "@portabletext/svelte";
  import ViolateGradient from "./ViolateGradient.svelte";

  interface Props {
    props: ClientProps;
  }
  let { props }: Props = $props();

  let api = $state<CarouselAPI>();
</script>

<div class="mb-[2.5rem] mt-[1.88rem] px-5 lg:mt-[2.8rem]">
  <h2
    class="mb-8 text-center font-geist text-[1.125rem] font-semibold leading-[1.5rem] tracking-[0%] text-black md:text-[1.5rem] md:tracking-[-0.044rem]">
    <PortableText
      value={props?.title}
      components={{
        marks: {
          violateGradient: ViolateGradient,
        },
      }} />
  </h2>

  <Carousel.Root
    opts={{
      align: "start",
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
    class="container w-full max-w-7xl px-0">
    <Carousel.Content class="-ml-8 xl:-ml-[4.75rem]">
      {#each props.clients as client}
        <Carousel.Item class="flex basis-1/3 items-center justify-center pl-8 md:basis-1/4 xl:basis-1/4 xl:pl-[4.75rem]">
          <div class="relative flex h-[2.5rem] w-auto py-1">
            <SanityImage
              class="h-full w-auto"
              innerClass="object-contain w-auto h-full"
              src={client.clientImage}
              sizes="(min-width:64rem) 12vw, 20vw"
              imageUrlBuilder={imgBuilder}
              alt={client?.clientImage?.alt || "clientImg"} />
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</div>
