<script lang="ts">
  import type { Plan } from '../../../../../types/landing.types';
  import type { SubscriptionDetailsProps } from '../../../../../types/pricing.types';
  import * as Table from '$lib/components/ui/table/index.js';
  import { Check } from 'lucide-svelte';
  import Tab from './Tab.svelte';
  import PricingCard from './PricingCard.svelte';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  interface Props {
    props: SubscriptionDetailsProps;
    plans: Plan[];
    saveUpTo: number;
  }
  let { props, plans, saveUpTo }: Props = $props();
  let {
    subscriptionDetails: { features },
  } = $derived(props);
  let selectedSubscriptionType = $state('monthly');
</script>

<div class=" mx-auto max-w-[75rem] px-5 xl:px-0">
  <div class=" rounded-[1.25rem] border overflow-hidden">
    <Table.Root>
      <Table.Header class="bg-[#F8FAFC]">
        <Table.Row>
          <Table.Head class="border-r">
            <div class="pb-[2rem] pt-[1.81rem]">
              <h4
                class="text-center text-2xl font-semibold leading-[1.5rem] text-black">
                Subscription Type
              </h4>
              <p
                class="mt-[0.38rem] text-center text-xl font-normal leading-[1.25rem] text-[#495568]">
                Save Money with an Annual plan
              </p>
              <div class="mt-[1.88rem] flex justify-center">
                <Tab {saveUpTo} bind:selectedSubscriptionType />
              </div>
            </div>
          </Table.Head>
          {#each plans as plan, index}
            <Table.Head class={index === plans.length - 1 ? '' : 'border-r'}>
              <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
            </Table.Head>
          {/each}
        </Table.Row>
      </Table.Header>
      <Table.Body >
        <!-- Iterate through features -->
        {#each features as feature}
          <Table.Row class="border-b-0">
            <Table.Cell class=" ">
              <div class="flex items-center gap-4 pt-10 pl-[1rem]">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#EDE9FE]">
                  <SanityImage
                    class="h-5 w-5"
                    src={feature?.featureIcon}
                    imageUrlBuilder={imgBuilder}
                    alt="featureTitleIcon" />
                </div>
                <p class="text-2xl text-black">
                  {feature?.featureHeading}
                </p>
              </div>
            </Table.Cell>
          </Table.Row>
          {#each feature?.featureLists as list}
            <Table.Row class="border-b-0 ">
              <Table.Cell class="text-lg font-normal text-black pl-[1.88rem]">
                {list.featureName}
              </Table.Cell>
              <!-- Values for each subscription type -->
              {#each list.values as value}
                <Table.Cell class="text-center">
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
                              d="M5.625 9.50293L7.875 11.7529L12.375 7.25293M16.5 9.50293C16.5 13.6451 13.1421 17.0029 9 17.0029C4.85786 17.0029 1.5 13.6451 1.5 9.50293C1.5 5.36079 4.85786 2.00293 9 2.00293C13.1421 2.00293 16.5 5.36079 16.5 9.50293Z"
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
                        class="mx-auto flex h-[0.125rem] w-[0.875rem] items-center justify-center">
                        -
                      </p>
                    {/if}
                  {/if}
                </Table.Cell>
              {/each}
            </Table.Row>
          {/each}
          <Table.Row class="border-b border-dashed ">
            <Table.Cell>
              {#if Array.isArray(feature.instructions)}
              <div class="mt-5 flex items-center gap-1 pb-[0.44rem] pl-[1rem]">
                <p class="text-red-500">*</p>
                <h4 class="text-[0.875rem] font-normal text-[#6D28D9]">
                  {(Array.isArray(feature.instructions) &&
                    (feature.instructions as any[])[0]?.instruction?.[0]
                      ?.children?.[0]?.text) ??
                    ''}
                </h4>
                <h4 class="text-[0.875rem] font-normal text-[#212121]">
                  {(Array.isArray(feature.instructions) &&
                    (feature.instructions as any[])[0]?.instruction?.[1]
                      ?.children?.[0]?.text) ??
                    ''}
                </h4>
              </div>
              {/if}
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
