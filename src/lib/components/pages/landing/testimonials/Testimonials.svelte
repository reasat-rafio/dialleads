<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";
  import { Dot } from "lucide-svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import type { TestimonialsProps } from "../../../../../types/landing.types";
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import { innerWidth } from "svelte/reactivity/window";
  import Masonry from "$lib/components/common/masonry.svelte";

  interface Props {
    props: TestimonialsProps;
  }
  let showDialog = $state(false);
  let gridGap = $state("0.75rem");
  let testimonials: TestimonialsProps["testimonials"] = $state([]);

  let { props }: Props = $props();

  $effect(() => {
    if (innerWidth.current && innerWidth.current >= 768) {
      gridGap = "1.25rem";
    } else {
      gridGap = "0.75rem";
    }
  });

  $effect(() => {
    if (innerWidth.current && innerWidth.current < 640) {
      testimonials = props.testimonials.slice(0, 6);
      showDialog = false;
    } else if (innerWidth.current && innerWidth.current < 1024) {
      testimonials = props.testimonials.slice(0, 12);
      showDialog = true;
    } else if (innerWidth.current && innerWidth.current >= 1024) {
      testimonials = props.testimonials.slice(0, 12);
      showDialog = true;
    }
  });
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
  <SectionIconAndName
    sectionNameClass="text-[#495568]"
    sectionTitleClass="text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-1%] lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]"
    borderClass="border border-gray-200"
    sectionIcon={props?.sectionIcon}
    sectionName={props?.sectionTitle}
    sectionTitle={props?.title} />
  <div class="mt-8 h-fit w-full md:mt-[3.125rem]">
    <Masonry items={testimonials} bind:gridGap colWidth={`minmax(Min(20.938em, 100%), 1fr)`} stretchFirst={false} reset>
      {#each testimonials as testimonial}
        {#if showDialog}
          <Dialog.Root>
            <Dialog.Trigger>
              <div
                class="group break-inside-avoid rounded-[1rem] border border-gray-200 bg-[#F9F9F9] p-4 transition-colors hover:border-primary">
                <div class="flex gap-x-4 items-center justify-center">
                  <div class="h-[3rem] w-[3rem] rounded-full">
                    <SanityImage
                      class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
                      innerClass="object-cover w-full h-full rounded-full"
                      src={testimonial?.reviewerImage}
                      sizes="5vw"
                      imageUrlBuilder={imgBuilder}
                      alt={testimonial?.reviewerImage?.alt || "image"} />
                  </div>
                  <div class="w-full text-left">
                    <h3 class="w-full truncate text-[1rem] font-semibold leading-[120%]">
                      {testimonial.name}
                    </h3>

                    <div class="flex w-full items-center">
                      {#if testimonial.companyName.length > 24}
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <h3
                              class="max-w-[8.125rem] truncate text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.companyName}
                            </h3>
                          </HoverCard.Trigger>
                          <HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
                            <p class="text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.companyName}
                            </p>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      {:else}
                        <h3 class="text-[0.875rem] font-light leading-[120%] text-[#737275]">
                          {testimonial.companyName}
                        </h3>
                      {/if}
                      <Dot class="text-[#737275]" />
                      {#if testimonial.position.length > 24}
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <h3 class="w-full truncate text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.position}
                            </h3>
                          </HoverCard.Trigger>
                          <HoverCard.Content class="rounded-lg  bg-white px-4 py-2.5 shadow-lg">
                            <p class="text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.position}
                            </p>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      {:else}
                        <h3 class="text-[0.875rem] font-light leading-[120%] text-[#737275]">
                          {testimonial.position}
                        </h3>
                      {/if}
                    </div>
                  </div>
                </div>
                <div
                  class="pt-[1.25rem] text-left text-[0.875rem] font-normal leading-[150%] text-[#737275] transition-colors duration-200 group-hover:text-[#141313] md:text-[1rem]">
                  <p>{testimonial.review}</p>
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Content class="p-0">
              <div class="rounded-[1rem] border bg-[#F9F9F9] p-4 md:p-5">
                <div class="flex gap-x-4">
                  <div class="h-[3rem] w-[3rem] rounded-full">
                    <SanityImage
                      class="h-[3rem] w-[3rem] rounded-full overflow-hidden "
                      innerClass="object-cover w-full h-full rounded-full"
                      src={testimonial?.reviewerImage}
                      sizes="5vw"
                      imageUrlBuilder={imgBuilder}
                      alt={testimonial?.reviewerImage?.alt || "image"} />
                  </div>
                  <div class="w-full text-left">
                    <h3 class="w-full truncate text-[1rem] font-semibold leading-[120%]">
                      {testimonial.name}
                    </h3>

                    <div class="flex w-full items-center">
                      {#if testimonial.companyName.length > 24}
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <h3 class="max-w-[8.125rem] truncate text-[#737275]">
                              {testimonial.companyName}
                            </h3>
                          </HoverCard.Trigger>
                          <HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
                            <p>{testimonial.companyName}</p>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      {:else}
                        <h3 class="text-[#737275]">{testimonial.companyName}</h3>
                      {/if}
                      <Dot class="text-[#737275]" />

                      {#if testimonial.position.length > 24}
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <h3 class="w-full truncate text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.position}
                            </h3>
                          </HoverCard.Trigger>
                          <HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
                            <p class="text-[0.875rem] font-light leading-[120%] text-[#737275]">
                              {testimonial.position}
                            </p>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      {:else}
                        <h3 class="text-[#737275]">{testimonial.position}</h3>
                      {/if}
                    </div>
                  </div>
                </div>
                <div class="pt-[1.25rem] text-[#737275]">
                  <p>{testimonial.review}</p>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        {:else}
          <div
            class="group relative rounded-[1rem] border border-gray-200 bg-[#F9F9F9] p-4 transition-colors hover:border-primary">
            <div class="flex items-center gap-4">
              <div class="h-[3rem] w-[3rem] shrink-0">
                <SanityImage
                  class="h-[3rem] w-[3rem] rounded-full object-cover"
                  innerClass="object-cover w-full h-full rounded-full"
                  src={testimonial?.reviewerImage}
                  sizes="5vw"
                  imageUrlBuilder={imgBuilder}
                  alt={testimonial?.reviewerImage?.alt || "image"} />
              </div>
              <div class="flex flex-col justify-center text-left">
                <h3 class="text-[1rem] font-semibold leading-[120%]">
                  {testimonial.name}
                </h3>
                <div
                  class="flex flex-wrap items-center gap-x-2 text-[0.875rem] font-light leading-[120%] text-[#737275]">
                  {#if testimonial.companyName.length > 24}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <span class="max-w-[8rem] truncate">{testimonial.companyName}</span>
                      </HoverCard.Trigger>
                      <HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
                        <p>{testimonial.companyName}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <span>{testimonial.companyName}</span>
                  {/if}

                  <Dot class="text-[#737275]" />

                  {#if testimonial.position.length > 24}
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <span class="max-w-[8rem] truncate">{testimonial.position}</span>
                      </HoverCard.Trigger>
                      <HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
                        <p>{testimonial.position}</p>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  {:else}
                    <span>{testimonial.position}</span>
                  {/if}
                </div>
              </div>
            </div>

            <div
              class="pt-[1.25rem] text-left text-[0.875rem] font-normal leading-[150%] text-[#737275] transition-colors duration-200 group-hover:text-[#141313] md:text-[1rem]">
              <p>{testimonial.review}</p>
            </div>
          </div>
        {/if}
      {/each}
    </Masonry>
  </div>
</div>
