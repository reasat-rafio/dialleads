<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { Check } from 'lucide-svelte';
  import type {
    ComparePlansProps,
    SubscriptionType,
  } from '../../../../../types/pricing.types';
  import Tabs from './Tabs.svelte';

  let { props }: { props: ComparePlansProps } = $props();
  let { plans } = $derived(props);

  $inspect(plans?.features)

  let selectedType: string = $state('monthly');

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
    <div class="text-center">
        <div class="bg-white border rounded-full mb-3 w-24 font-medium mx-auto ">
            <p>Comapre Plans</p>
        </div>
        <h2 class="text-5xl font-bold text-black">{plans?.heading}</h2>
    </div>
    <div class="m-12 border rounded-xl">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              {#each plans.subscriptionTypes as subscriptionType}
                <Table.Head class="text-center bg-gray-100 py-5 max-w-52">
                  <h3 class="text-center text-3xl font-bold text-black">
                    {subscriptionType?.title}
                  </h3>
                  <p class="text-center text-gray-400">
                    {subscriptionType?.subtitle}
                  </p>
                  <div class="mt-2">
                    {#if subscriptionType?.buttonText.length <= 1}
                      <!-- Display message and fallback price separately -->
                      {#if getSelectedPrice(subscriptionType, selectedType).fallback}
                        <h3 class="font-bold ">{getSelectedPrice(subscriptionType, selectedType).message}</h3>
                        <p class="text-xl">{getSelectedPrice(subscriptionType, selectedType).fallback}
                            /<span class="text-gray-400 font-normal">mo</span>
                        </p>
                      {:else}
                        <h1 class="text-xl ">{getSelectedPrice(subscriptionType, selectedType).message}
                            /<span class="text-gray-400 font-normal">mo</span>
                        </h1>
                      {/if}
                    {/if}
                  </div>
                  {#if subscriptionType?.buttonText.length > 1}
                    <div class="flex justify-center">
                      <Tabs texts={subscriptionType?.buttonText} bind:selectedType />
                    </div>
                  {:else}
                    <div class="mt-4 flex justify-center">
                      <button
                        class="flex justify-center rounded-xl border-2
                         border-gray-200 bg-white px-4 py-2 text-gray-400"
                      >
                        {subscriptionType?.buttonText}
                      </button>
                    </div>
                  {/if}
                </Table.Head>
              {/each}
            </Table.Row>
          </Table.Header>
          <Table.Body>
             <!-- Iterate through features -->
          {#each plans?.features as feature}
          <Table.Row class="border-b-0">
            <Table.Cell class=" text-black text-2xl">{feature?.featureHeading}</Table.Cell>
    
          </Table.Row>
          {#each feature?.featureLists as list}
            <Table.Row class="border-b-0">
               
              <Table.Cell class="text-gray-400">{list.featureName}</Table.Cell>
              <!-- Values for each subscription type -->
              {#each list.values as value}
                <Table.Cell class="text-center">
                    {#if value.type === 'text'}
                        <p>{value.text}</p>
                    {:else if value.type === 'status' }
                    {#if value.isAvailable}
                    <p class="flex justify-center"><Check class="text-purple-600" size={24} /></p>
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
  