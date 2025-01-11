<script lang="ts">
  import type { Plan } from '../../../../../types/landing.types';
  import type { SubscriptionDetailsProps } from '../../../../../types/pricing.types';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import PricingCard from './PricingCard.svelte';

  interface Props {
    props: SubscriptionDetailsProps;
    plans: Plan[];
    saveUpTo: number;
  }
  let { props, plans, saveUpTo }: Props = $props();
  let {
    subscriptionDetails: { features },
  } = $derived(props);

  // Extract unique plan names from relatedPlan
  const relatedPlanNames = Array.from(
    new Set(
      features?.flatMap((feature) =>
        feature.featureLists.flatMap((list) =>
          list.values.map((value) => value.relatedPlan?.name),
        ),
      ),
    ),
  ).filter((name): name is string => Boolean(name));
  let selectedPlanName = relatedPlanNames[0];
  let selectedSubscriptionType = $state('monthly');
</script>

<div class="relative">
  <div class="relative -top-[4.5rem]  rounded-[1.25rem] border pb-[1.875rem]">
    <Tabs.Root value={relatedPlanNames[0]} class="">
      <div class="flex w-full justify-center bg-[#F8FAFC] py-3">
        <Tabs.List class="bg-transparent ">
          <div class="mx-auto flex w-full justify-between px-5">
            {#each relatedPlanNames as planName}
              <Tabs.Trigger
              class="w-full border-b border-transparent 
              bg-none text-lg
              font-semibold
              text-black
              data-[state=active]:border-b data-[state=active]:border-[#6D28D9]
              data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none
              "
                value={planName}>
                {planName}
              </Tabs.Trigger>
            {/each}
          </div>
        </Tabs.List>
      </div>

      {#each relatedPlanNames as planName}
        <Tabs.Content value={planName}>
          {#each plans as plan}
            {#if plan?.planName?.name === planName}
              <div
                class="sticky top-[5rem] py-5 z-50 mt-6 border-b bg-white pb-[2.13rem]">
                <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
              </div>
            {/if}
          {/each}
          {#each features as feature, index}
            <div class="flex items-center gap-4 px-[1.63rem] pt-10">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#EDE9FE]">
                <SanityImage
                  class="h-5 w-5"
                  src={feature?.featureIcon}
                  imageUrlBuilder={imgBuilder}
                  alt="featureTitleIcon" />
              </div>
              <p class="text-base font-medium text-black">
                {feature?.featureHeading}
              </p>
            </div>

            <div
              class={index === plans.length - 1
                ? ''
                : 'border-b border-dashed pb-6'}>
              {#each feature?.featureLists as list}
                <div
                  class="mt-6 flex items-center justify-between px-[1.63rem]">
                  <div>
                    {#each list.featureName.split('*') as part, index}
                      {part}
                      {#if index < list.featureName.split('*').length - 1}
                        <span class="text-red-500">*</span>
                      {/if}
                    {/each}
                  </div>
                  {#each list?.values.filter((value) => value.relatedPlan?.name === planName) as value}
                    <!-- Render only values related to the current tab (planName) -->
                    {#if value.type === 'text'}
                      <p>{value.text}</p>
                    {:else if value.type === 'status'}
                      {#if value.isAvailable}
                        <p class="flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none">
                            <g clip-path="url(#clip0_715_7081)">
                              <path
                                d="M5.625 9.50293L7.875 11.7529L12.375 7.25293M16.5 9.50293C16.5 13.6451 13.1421 17.00293 9 17.00293C4.85786 17.00293 1.5 13.6451 1.5 9.50293C1.5 5.36079 4.85786 2.00293 9 2.00293C13.1421 2.00293 16.5 5.36079 16.5 9.50293Z"
                                stroke="#6D28D9"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_715_7081">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0 0.50293)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </p>
                      {:else}
                        <p
                          class=" flex h-[0.125rem] items-center justify-center">
                          -
                        </p>
                      {/if}
                    {/if}
                  {/each}
                </div>
              {/each}
              <div>
                {#if Array.isArray(feature.instructions)}
                  <div class="mt-5 pl-[1.6rem] text-left">
                    <div class="flex gap-1">
                      <p class="text-red-500">*</p>
                      <h4
                        class="text-nowrap text-[0.875rem] font-normal text-[#6D28D9] hover:underline">
                        {(Array.isArray(feature.instructions) &&
                          (feature.instructions as any[])[0]?.instruction?.[0]
                            ?.children?.[0]?.text) ??
                          ''}
                      </h4>
                    </div>
                    <div class="">
                      <h4 class="text-[0.875rem] font-normal text-[#212121]">
                        {(Array.isArray(feature.instructions) &&
                          (feature.instructions as any[])[0]?.instruction?.[1]
                            ?.children?.[0]?.text) ??
                          ''}
                      </h4>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </div>
</div>
