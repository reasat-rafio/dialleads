<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import * as Accordion from '$lib/components/ui/accordion/index.js';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { FaqProps } from '../../../../../types/landing.types';

  interface Props {
    props: FaqProps;
  }
  let { props }: Props = $props();
</script>

<div class="max-w-[74.8125rem] mx-auto">
  <div
    class="  mb-10 mt-[2.5rem] grid
   grid-cols-1 justify-center gap-x-[3rem] gap-y-[1.88rem] md:grid-cols-12 md:gap-y-[0rem] lg:mt-[5.94rem] xl:mx-0">
    <div class="col-span-1 md:col-span-5">
      <div class="flex flex-col items-center md:items-start">
        <div>
          <SectionIconAndName
            sectionTitleClass="mb-[1.5rem]"
            sectionIcon={props?.sectionIcon}
            sectionName={props?.sectionTitle}
            sectionTitle={props?.title} />
        </div>
        <h2
          class="[mb-[1.88rem] text-center text-[1.125rem] font-normal text-[#5B6779] md:text-left">
          {props.description}
        </h2>
      </div>
    </div>
    <div class="col-span-1 w-full md:col-span-7">
      <Accordion.Root type="single" class="w-full">
        {#each props.faq as faqItem}
          <Accordion.Item
            class="mb-[0.75rem]  rounded-[1rem]  bg-[#F9FAFB] px-[2rem] py-[1rem] lg:mb-[1rem] "
            value={faqItem._key}>
            <Accordion.Trigger
              class="text-left text-[1.125rem] hover:no-underline">
              {faqItem.question}
            </Accordion.Trigger>
            <Accordion.Content class="text-left text-[1rem] text-[#5B6779]">
              {faqItem.answer}
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
    </div>
  </div>
</div>
