<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import type { FeatureProps } from '../../../../../types/landing.types';
  interface Props {
    props: FeatureProps;
  }

  let { props }: Props = $props();
</script>

<div class="mt-[2.4rem] flex flex-col items-center justify-center lg:mt-[5rem]">
  <div
    class="mb-[1rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
    {#if !!props?.sectionIcon}
      <SanityImage
        class="h-[1.25rem] w-[1.25rem] "
        src={props?.sectionIcon}
        sizes="05vw"
        imageUrlBuilder={imgBuilder} />
    {/if}
    <h1>{props.sectionTitle}</h1>
  </div>

  <h2
    class="mb-[1.25rem] w-[20.5625rem] text-center text-[1.625rem] font-semibold lg:mb-[1.3rem] lg:w-full lg:text-[3rem]">
    {props.title}
  </h2>
</div>

<div class="flex items-center justify-center">
  <Tabs.Root value="Outbound" class="flex flex-col justify-center">
    <Tabs.List class="mb-[0.6rem] flex gap-x-5 bg-white lg:mb-[2.2rem]">
      {#each props.features as feature}
        <Tabs.Trigger
          class="rounded-[0.75rem]  text-[#8B5CF6] ring-2 ring-[#8B5CF6] data-[state=active]:ring-2 "
          value={feature.featureGroupName}>
          {feature.featureGroupName}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each props.features as feature}
      <Tabs.Content value={feature.featureGroupName}>
        <div
          class=" m-5 grid max-w-[74.8125rem] grid-cols-1 gap-[1.88rem] sm:grid-cols-2 lg:grid-cols-3 xl:m-0">
          {#each feature.features as features}
            <div
              class="col-span-1 rounded-[1rem] border bg-[#FFFFFF] p-7 sm:col-span-1 lg:col-span-1">
              <!-- bg-[#F9F9F9] -->
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
              <h3 class="text-[16px] font-normal">
                {features.featureDescription}
              </h3>
            </div>
          {/each}
        </div>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
