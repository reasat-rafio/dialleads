<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import * as Accordion from '$lib/components/ui/accordion/index.js';

  import type { FaqProps } from '../../../../../types/landing.types';

  interface Props {
    props: FaqProps;
  }
  let { props }: Props = $props();
</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="mx-5 mb-10 mt-[2.5rem] grid max-w-[74.8125rem] grid-cols-1 gap-x-[3rem] gap-y-[1.88rem] md:grid-cols-12 md:gap-y-[0rem] lg:mt-[5.94rem] xl:mx-0">
    <div class="col-span-1 md:col-span-5">
      <div class="flex flex-col items-center md:items-start">
        <div class="mb-[1rem] lg:mb-[1.5rem]">
          <SectionIconAndName
            sectionIcon={props?.sectionIcon}
            sectionName={props.sectionTitle}
            className="" />
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
