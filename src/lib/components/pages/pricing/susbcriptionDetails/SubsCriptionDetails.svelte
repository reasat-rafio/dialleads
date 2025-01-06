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
  <div class=" rounded-xl border">
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
      <Table.Body>
        <!-- Iterate through features -->
        {#each features as feature}
          <Table.Row class="border-b-0">
            <Table.Cell class=" ">
              <div class="flex items-center gap-4">
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
            <Table.Row class="border-b-0">
              <Table.Cell class="text-gray-400">
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
                        <Check class="text-purple-600" size={24} />
                      </p>
                    {:else}
                      <p>--</p>
                    {/if}
                  {/if}
                </Table.Cell>
              {/each}
            </Table.Row>
          {/each}
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
