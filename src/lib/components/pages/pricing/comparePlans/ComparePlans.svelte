<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import type {
    ComparePlansProps,
    SubscriptionType,
  } from '../../../../../types/pricing.types';
  import Tabs from './Tabs.svelte';

  let { props }: { props: ComparePlansProps } = $props();
  let { plans } = $derived(props);

  let selectedType: string = $state('monthly');

  function getSelectedPrice(
    subscriptionType: SubscriptionType,
    selectedType: string,
  ): { message: string; fallback?: string } {
    const selectedPrice = subscriptionType.price?.find(
      (p) => p.type === selectedType,
    );
    if (selectedPrice) {
      return { message: `$${selectedPrice.value}/mo` };
    }

    const fallbackType = selectedType === 'monthly' ? 'annually' : 'monthly';
    const fallbackPrice = subscriptionType.price?.find(
      (p) => p.type === fallbackType,
    );

    return fallbackPrice
      ? {
          message: `Not Available for ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}`,
          fallback: `$${fallbackPrice.value}/mo`,
        }
      : { message: 'Not Available' };
  }
</script>

<div class="m-12 border rounded-xl">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {#each plans.subscriptionTypes as subscriptionType}
            <Table.Head class="text-center bg-gray-100 py-5 max-h-40">
              <h3 class="text-center text-2xl font-bold text-black">
                {subscriptionType?.title}
              </h3>
              <p class="text-center text-gray-400">
                {subscriptionType?.subtitle}
              </p>
              <div>
                {#if subscriptionType?.buttonText.length <= 1}
                  <!-- Display message and fallback price separately -->
                  {#if getSelectedPrice(subscriptionType, selectedType).fallback}
                    <h1>{getSelectedPrice(subscriptionType, selectedType).message}</h1>
                    <p>{getSelectedPrice(subscriptionType, selectedType).fallback}</p>
                  {:else}
                    <h1>{getSelectedPrice(subscriptionType, selectedType).message}</h1>
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
                     border-gray-200 bg-white px-4 py-3 text-gray-400"
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
        <Table.Row>
          <Table.Cell class="font-medium">INV001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell class="text-right">$250.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
</div>
  