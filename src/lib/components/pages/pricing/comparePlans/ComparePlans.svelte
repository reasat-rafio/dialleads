<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { Check } from 'lucide-svelte';
  import Tabs from './Tabs.svelte';
  import type {
    ComparePlansProps,
    SubscriptionType,
  } from '../../../../../types/pricing.types';

  let { props }: { props: ComparePlansProps } = $props();

  let { plans, plansDetails, subscriptionTypes } = $derived(props);
  $inspect(props);

  let selectedType: string = $state('annually');

  function getSelectedPrice(
    subscriptionType: SubscriptionType,
    selectedType: string,
  ): { message: string; fallback?: string } {
    const selectedPrice = subscriptionType.price?.find(
      (p) => p.type === selectedType,
    );
    if (selectedPrice) {
      return { message: `$${selectedPrice.value}` };
    }

    const fallbackType = selectedType === 'monthly' ? 'annually' : 'monthly';
    const fallbackPrice = subscriptionType.price?.find(
      (p) => p.type === fallbackType,
    );

    return fallbackPrice
      ? {
          message: `Not Available for ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}`,
          fallback: `$${fallbackPrice.value}`,
        }
      : { message: 'Not Available' };
  }
</script>

<div class="mt-8">
  <div
    class="mx-auto mb-5 flex w-36 items-center gap-4 rounded-full border bg-white px-5">
    <SanityImage
      lqip
      class="w-14"
      src={plans?.subHeading?.icon}
      imageUrlBuilder={imgBuilder}
      alt="featureTitleIcon" />
    <p class="text-center">Comapre Plans</p>
  </div>
  <h2 class="text-center text-5xl font-bold text-black">{plans?.heading}</h2>
</div>

<div class="mt-8">
  <div class="m-12 rounded-xl border">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {#each subscriptionTypes as subscriptionType}
            <Table.Head
              class="h-fit max-w-64 border-r bg-gray-100 py-5 text-center">
              <h3 class="text-center text-3xl font-bold text-black">
                {subscriptionType?.title}
              </h3>
              <p class="text-center text-2xl text-gray-400">
                {subscriptionType?.subtitle}
              </p>
              <div class="mt-2">
                {#if subscriptionType?.buttonText.length <= 1}
                  {#if getSelectedPrice(subscriptionType, selectedType).fallback}
                    <h3 class="font-bold">
                      {getSelectedPrice(subscriptionType, selectedType).message}
                    </h3>
                    <p class="text-xl">
                      {getSelectedPrice(subscriptionType, selectedType)
                        .fallback}
                      /
                      <span class="font-normal text-gray-400">mo</span>
                    </p>
                  {:else}
                    <h1 class="text-xl">
                      {getSelectedPrice(subscriptionType, selectedType).message}
                      /
                      <span class="font-normal text-gray-400">mo</span>
                    </h1>
                  {/if}
                {/if}
              </div>
              {#if subscriptionType?.buttonText.length > 1}
                <div class="flex justify-center">
                  <Tabs
                    texts={subscriptionType?.buttonText}
                    bind:selectedType />
                </div>
              {:else}
                <div class="mt-4 flex justify-center">
                  <button
                    class="flex justify-center rounded-xl border-2
                       border-gray-200 bg-white px-4 py-2 text-gray-400">
                    {subscriptionType?.buttonText}
                  </button>
                </div>
              {/if}
            </Table.Head>
          {/each}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each plansDetails as plan}
          {#each plan.features as feature}
            <Table.Row class="border-b-0">
              <Table.Cell class="flex items-center">
                <SanityImage
                  lqip
                  class="w-14"
                  src={feature?.icon}
                  imageUrlBuilder={imgBuilder}
                  alt="featureTitleIcon" />
                <p class="mb-3 text-2xl text-black">
                  {feature?.featureHeading || 'No Heading'}
                </p>
              </Table.Cell>
            </Table.Row>
            {#each feature.featureLists as list}
              <Table.Row class="border-b-0">
                <Table.Cell class="pl-8 text-gray-400">
                  {list.featureName || 'No Feature Name'}
                </Table.Cell>
                {#each list.values as value}
                  <Table.Cell class="text-center">
                    {#if value.type === 'text'}
                      <p>{value.text || 'No Text'}</p>
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
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
