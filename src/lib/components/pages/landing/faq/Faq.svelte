<script lang="ts">
  import * as Accordion from '$lib/components/ui/accordion/index.js';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { FaqProps } from '../../../../../types/landing.types';

  interface Props {
    props: FaqProps;
  }
  let { props }: Props = $props();
</script>

<div
  class="mx-5 mt-[2.5rem] grid max-w-[74.8125rem] grid-cols-1 gap-x-[3rem] gap-y-[1.88rem] md:grid-cols-12 md:gap-y-[0rem] lg:mt-[5.94rem] xl:mx-0">
  <div class="col-span-1 md:col-span-5">
    <div class="flex flex-col items-center md:items-start">
      <div
        class="mb-[1rem] flex w-fit gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
        <SanityImage
          class="h-[1.25rem] w-[1.25rem]"
          src={props?.sectionIcon}
          sizes="05vw"
          imageUrlBuilder={imgBuilder} />
        <h1>{props.sectionTitle}</h1>
      </div>
      <h2 class="mb-[1rem] text-[3rem] font-semibold lg:mb-[3.12rem]">
        {props.title}
      </h2>
      <h2 class="mb-[1.88rem] text-center text-[1.125rem] md:text-left">
        {props.description}
      </h2>
    </div>
  </div>
  <div class="col-span-1 w-full md:col-span-7">
    <Accordion.Root type="single" class="w-full">
      {#each props.faq as faqItem}
        <Accordion.Item
          class="mb-[1rem]  rounded-[1rem] bg-[#F9FAFB] px-[2rem] py-[1rem] "
          value={faqItem._key}>
          <Accordion.Trigger class="text-[1.125rem] hover:no-underline">
            {faqItem.question}
          </Accordion.Trigger>
          <Accordion.Content class="text-[1rem] text-[#5B6779]">
            {faqItem.answer}
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
