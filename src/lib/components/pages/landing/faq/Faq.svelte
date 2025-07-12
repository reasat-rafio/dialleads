<script lang="ts">
  import SectionIconAndName from "$lib/components/common/sectionIconAndName.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import type { FaqProps } from "../../../../../types/landing.types";

  interface Props {
    props: FaqProps;
  }
  let { props }: Props = $props();
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
  <div
    class="mb-10
   mt-[3.75rem] grid grid-cols-1 justify-center gap-x-[3rem] gap-y-[1.88rem] md:grid-cols-12 md:gap-y-[0rem] lg:mt-[5.94rem] xl:mx-0">
    <div class="col-span-1 md:col-span-5">
      <div class="flex flex-col items-center md:items-start">
        <div>
          <SectionIconAndName
            sectionNameClass="text-[#495568]"
            borderClass="md:mt-0 border border-gray-200 md:mx-0"
            sectionTitleClass="mb-[1.5rem] md:text-left font-geist text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-1%] lg:text-[3rem] lg:leading-[115%] lg:tracking-[-0.063rem]"
            sectionIcon={props?.sectionIcon}
            sectionName={props?.sectionTitle}
            sectionTitle={props?.title} />
        </div>
      </div>
    </div>
    <div class="col-span-1 w-full md:col-span-7">
      <Accordion.Root type="single" class="w-full">
        {#each props.faq as faqItem}
          <Accordion.Item
            class="mb-[0.75rem] rounded-[1rem] border border-violet-400 bg-violet-50/80 p-0 lg:mb-[1rem]"
            value={faqItem._key}>
            <Accordion.FAQTrigger
              class="px-[2rem] py-[2rem] text-left text-[1rem] font-medium leading-4 hover:no-underline md:text-[1.125rem] md:font-semibold md:leading-5">
              {faqItem.question}
            </Accordion.FAQTrigger>
            <Accordion.Content
              innerclass="px-8 pb-8"
              class="text-left font-geist text-[0.875rem] font-normal leading-[150%] tracking-[0%] text-[#5B6779] md:text-[1rem]">
              {faqItem.answer}
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
    </div>
  </div>
</div>
