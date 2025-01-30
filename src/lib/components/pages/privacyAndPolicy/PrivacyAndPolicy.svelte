<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { Section } from '../../../../types/privacyAndPolicy.types';
  import VioletGradient from './VioletGradient.svelte';
  import type { PortableTextBlock } from 'sanity';
  import ListItem from '$lib/components/rich-text/ListItem.svelte';
  import UnorderedListWrapper from '$lib/components/rich-text/UnorderedListWrapper.svelte';
  import { cn } from '$lib/utils';
  import CustomParagraph from '$lib/components/rich-text/CustomParagraph.svelte';

  interface Props {
    sections: Section[];
    title: PortableTextBlock[];
    _updatedAt: string;
    description: PortableTextBlock[];
  }

  let { sections, title, _updatedAt, description } = $props();

  // Convert _updatedAt to a formatted date
  const formattedDate = new Date(_updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  $inspect(sections[0]);
</script>

<div class="container mx-auto">
  <div>
    <h1 class="mt-[5.25rem] text-center text-[3.875rem] font-bold text-black">
      <PortableText
        value={title}
        components={{
          marks: {
            violetGradient: VioletGradient,
          },
        }} />
    </h1>
    <h3 class="mb-4 mt-[5.38rem] text-[1.5625rem] font-bold text-black">
      Last Updated: {formattedDate}
    </h3>
    <p class="text-xl font-medium text-[#525252]">
      <PortableText value={description} components={{}} />
    </p>
  </div>
  <div class="mt-[2.63rem]">
    {#each sections as section}
      <h3 class="mt-[2.63rem] text-[2rem] font-bold text-black">
        {section?.sectionTitle}
      </h3>
      <div class="mt-4 space-y-4">
        {#each section?.content as item}
          <div class={cn('prose-ul:list-disc', '')}>
            <PortableText
              value={item}
              components={{
                list: {
                  bullet: UnorderedListWrapper,
                },
                listItem: {
                  bullet: ListItem,
                },
                block: {
                  p: CustomParagraph,
                },
              }} />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
