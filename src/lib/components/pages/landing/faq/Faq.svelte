<script lang="ts">
  import * as Accordion from '$lib/components/ui/accordion/index.js';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';

  let { props } = $props();
</script>

<div
  class="mx-5 mt-[5.94rem] grid max-w-[74.8125rem] grid-cols-12 gap-x-[3rem] xl:mx-0">
  <div class="col-span-5">
    <!-- min-w-[28rem] -->
    <div class="flex flex-col">
      <div
        class="mb-[1.5rem] flex w-fit rounded-full border px-[1.52rem] py-[0.52rem]">
        <SanityImage
          class="h-[1.25rem] w-[1.25rem]"
          src={props?.sectionIcon}
          sizes="05vw"
          imageUrlBuilder={imgBuilder} />
        <h1>{props.sectionTitle}</h1>
      </div>
      <h2 class="mb-[3.12rem] text-[3rem] font-semibold">{props.title}</h2>
      <h2 class="text-[1.125rem]">{props.description}</h2>
    </div>
  </div>
  <div class="col-span-7 w-full">
    <Accordion.Root type="single" class="w-full ">
      {#each props.faq as faqItem}
        <Accordion.Item
          class="mb-[1rem] rounded-[1rem] bg-[#F9FAFB] px-[2rem] py-[1rem]"
          value={faqItem._key}>
          <Accordion.Trigger class="hover:no-underline">
            {faqItem.question}
          </Accordion.Trigger>
          <Accordion.Content>{faqItem.answer}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
