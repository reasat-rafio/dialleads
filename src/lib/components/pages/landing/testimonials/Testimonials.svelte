<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import * as HoverCard from '$lib/components/ui/hover-card/index.js';
  import { Dot } from 'lucide-svelte';
  import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import type { TestimonialsProps } from '../../../../../types/landing.types';
  interface Props {
    props: TestimonialsProps;
  }
  let windowWidth = $state(0);
  let showDialog = $state(false);
  let testimonials: TestimonialsProps['testimonials'] = $state([]);

  let { props }: Props = $props();

  function truncateText(text: string, maxWords: number) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }

  $effect(() => {
    if (windowWidth < 640) {
      testimonials = props.testimonials.slice(0, 4);

      showDialog = false;
    } else if (windowWidth < 1024) {
      testimonials = props.testimonials.slice(0, 6);
      showDialog = true;
    } else if (windowWidth > 1024) {
      testimonials = props.testimonials.slice(0, 6);
      showDialog = true;
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="mt-[2.5rem] flex flex-col items-center justify-center lg:mt-[5rem]">
  <div
    class="mb-[1rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
    <SanityImage
      class="h-[1.25rem] w-[1.25rem] "
      src={props?.sectionIcon}
      sizes="05vw"
      imageUrlBuilder={imgBuilder} />
    <h1>{props.sectionTitle}</h1>
  </div>

  <h2
    class="mb-[1.625rem] text-center text-[1.625rem] font-semibold md:text-[3rem] lg:mb-[3.12rem]">
    {props.title}
  </h2>
</div>

<div
  class="m-5 grid max-w-[74.8125rem] grid-cols-1 gap-[0.75rem] sm:grid-cols-2 md:gap-[1.88rem] lg:grid-cols-3 xl:m-0">
  {#each testimonials as testimonial, i}
    {#if showDialog}
      <Dialog.Root>
        <Dialog.Trigger>
          <div
            class="col-span-1 rounded-[1rem] border bg-[#F9F9F9] p-4 sm:col-span-1 lg:col-span-1">
            <div class="flex gap-x-[0.5rem]">
              <div class="h-[3rem] w-[3rem] rounded-full">
                <SanityImage
                  class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
                  src={testimonial?.reviewerImage}
                  sizes="05vw"
                  imageUrlBuilder={imgBuilder} />
              </div>
              <div class="text-left">
                <h2 class="font-semibold">{testimonial.name}</h2>

                <div class="flex items-center">
                  <div class="pr-[0.38rem]">
                    {#if !!testimonial.companyLogo}
                      <SanityImage
                        class="h-fit w-fit "
                        src={testimonial.companyLogo}
                        sizes="05vw"
                        imageUrlBuilder={imgBuilder} />
                    {/if}
                  </div>

                  {#if testimonial.companyName.length > 12}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <h2 class="max-w-[130px] truncate text-[#5B6779]">
                          {testimonial.companyName}
                        </h2>
                      </HoverCard.Trigger>
                      <HoverCard.Content
                        class="rounded-lg bg-white p-4 shadow-lg">
                        <p>{testimonial.companyName}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <h2 class="text-[#5B6779]">{testimonial.companyName}</h2>
                  {/if}
                  <Dot class="text-[#5B6779]" />

                  {#if testimonial.position.length > 12}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <h2
                          class="max-w-[90px] truncate text-[#5B6779] lg:max-w-[110px]">
                          {testimonial.position}
                        </h2>
                      </HoverCard.Trigger>
                      <HoverCard.Content
                        class="rounded-lg  bg-white p-4 shadow-lg">
                        <p>{testimonial.position}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <h2 class="text-[#5B6779]">{testimonial.position}</h2>
                  {/if}
                </div>
              </div>
            </div>
            <div class="pt-[1.25rem] text-left text-[#5B6779]">
              <h3>{truncateText(testimonial.review, 20)}</h3>
            </div>
          </div>
        </Dialog.Trigger>
        <Dialog.Content>
          <!-- class="sm:max-w-[425px]" -->
          <div
            class="col-span-1 rounded-[1rem] border bg-[#F9F9F9] p-1 sm:col-span-1 md:p-4 lg:col-span-1">
            <div class="flex gap-x-[0.5rem]">
              <div class="h-[3rem] w-[3rem] rounded-full">
                <SanityImage
                  class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
                  src={testimonial?.reviewerImage}
                  sizes="05vw"
                  imageUrlBuilder={imgBuilder} />
              </div>
              <div class="">
                <h2 class="font-semibold">{testimonial.name}</h2>

                <div class="flex items-center">
                  <div class="pr-[0.38rem]">
                    {#if !!testimonial.companyLogo}
                      <SanityImage
                        class="h-fit w-fit "
                        src={testimonial.companyLogo}
                        sizes="05vw"
                        imageUrlBuilder={imgBuilder} />
                    {/if}
                  </div>

                  {#if testimonial.companyName.length > 12}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <h2 class="max-w-[130px] truncate text-[#5B6779]">
                          {testimonial.companyName}
                        </h2>
                      </HoverCard.Trigger>
                      <HoverCard.Content
                        class="rounded-lg bg-white p-4 shadow-lg">
                        <p>{testimonial.companyName}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <h2 class="text-[#5B6779]">{testimonial.companyName}</h2>
                  {/if}
                  <Dot class="text-[#5B6779]" />

                  {#if testimonial.position.length > 12}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <h2
                          class="max-w-[90px] truncate text-[#5B6779] lg:max-w-[110px]">
                          {testimonial.position}
                        </h2>
                      </HoverCard.Trigger>
                      <HoverCard.Content
                        class="rounded-lg bg-white p-4 shadow-lg">
                        <p>{testimonial.position}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <h2 class="text-[#5B6779]">{testimonial.position}</h2>
                  {/if}
                </div>
              </div>
            </div>
            <div class="pt-[1.25rem] text-[#5B6779]">
              <h3>{testimonial.review}</h3>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    {:else}
      <div
        class="relative col-span-1 rounded-[1rem] border bg-[#F9F9F9] p-4 sm:col-span-1 lg:col-span-1">
        <div class="flex gap-x-[0.5rem]">
          <div class="h-[3rem] w-[3rem] rounded-full">
            <SanityImage
              class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
              src={testimonial?.reviewerImage}
              sizes="05vw"
              imageUrlBuilder={imgBuilder} />
          </div>
          <div class="text-left">
            <h2 class="font-semibold">{testimonial.name}</h2>

            <div class="flex items-center">
              <div class="pr-[0.38rem]">
                {#if !!testimonial.companyLogo}
                  <SanityImage
                    class="h-fit w-fit "
                    src={testimonial.companyLogo}
                    sizes="05vw"
                    imageUrlBuilder={imgBuilder} />
                {/if}
              </div>

              {#if testimonial.companyName.length > 12}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <h2 class="max-w-[130px] truncate text-[#5B6779]">
                      {testimonial.companyName}
                    </h2>
                  </HoverCard.Trigger>
                  <HoverCard.Content class="rounded-lg bg-white p-4 shadow-lg">
                    <p>{testimonial.companyName}</p>
                  </HoverCard.Content>
                </HoverCard.Root>
              {:else}
                <h2 class="text-[#5B6779]">{testimonial.companyName}</h2>
              {/if}
              <Dot class="text-[#5B6779]" />

              {#if testimonial.position.length > 12}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <h2
                      class="max-w-[90px] truncate text-[#5B6779] lg:max-w-[110px]">
                      {testimonial.position}
                    </h2>
                  </HoverCard.Trigger>
                  <HoverCard.Content class="rounded-lg  bg-white p-4 shadow-lg">
                    <p>{testimonial.position}</p>
                  </HoverCard.Content>
                </HoverCard.Root>
              {:else}
                <h2 class="text-[#5B6779]">{testimonial.position}</h2>
              {/if}
            </div>
          </div>
        </div>

        {#if i === 3}
          <div
            class="pointer-events-none absolute bottom-0 left-0 right-0 h-full rounded-md bg-gradient-to-t from-white/90 via-white/20 to-white/0">
          </div>
        {/if}

        <div class="pt-[1.25rem] text-left text-[#5B6779]">
          <h3>{truncateText(testimonial.review, 200)}</h3>
        </div>
      </div>
    {/if}
  {/each}
</div>
