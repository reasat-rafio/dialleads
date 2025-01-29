<script lang="ts">
	import { SectionIcon } from 'lucide-svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import type { FeatureProps } from '../../../../../types/landing.types';
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  interface Props {
    props: FeatureProps;
  }

  let { props }: Props = $props();
</script>

<div class="mt-[2.4rem] lg:mt-[5rem] mb-5 md:mb-10 leading-tight px-5 md:px-0">
  <SectionIconAndName 
  sectionNameClass="text-[#495568]"
  sectionTitleClass="max-w-[40rem] mx-auto"
  sectionIcon={props?.sectionIcon} sectionName={props?.sectionTitle} sectionTitle={props?.title} />
</div>

<div class="flex items-center justify-center">
  <Tabs.Root value="Outbound" class="flex flex-col justify-center">
    <Tabs.List class="mb-[0.6rem] flex gap-x-5 bg-white lg:mb-[2.2rem]">
      {#each props.features as feature}
        <Tabs.Trigger
          class="rounded-[0.75rem]  px-[1.25rem] py-[0.75rem] text-[#8B5CF6]  ring-2 ring-[#8B5CF6] data-[state=active]:ring-2 lg:py-[0.88rem] "
          value={feature.featureGroupName}>
          {feature.featureGroupName}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each props.features as feature}
      <Tabs.Content value={feature.featureGroupName}>
        <div
          class=" m-5 grid max-w-[74.8125rem] grid-cols-1 gap-[0.75rem] sm:grid-cols-2 md:gap-[1.88rem] lg:grid-cols-3 xl:m-0">
          {#each feature.features as features}
            <div
            style="box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.07)"
              class="col-span-1 rounded-[1rem] border bg-[#FFFFFF] p-7  sm:col-span-1 lg:col-span-1">
              {#if !!features?.featureIcon}
                <SanityImage
                  class="h-[2.5rem] w-[2.5rem] overflow-hidden object-contain"
                  src={features?.featureIcon}
                  sizes="60vw"
                  imageUrlBuilder={imgBuilder} />
              {/if}
              <h2 class="mb-2 mt-[1.5rem] text-[22px] font-semibold">
                {features.featureTitle}
              </h2>
              <h3 class="text-base font-normal text-[#5B6779]">
                {features.featureDescription}
              </h3>
            </div>
          {/each}
        </div>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
