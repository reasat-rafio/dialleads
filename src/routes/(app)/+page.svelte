<script lang="ts">
  import Faq from '$lib/components/pages/landing/faq/Faq.svelte';
  import Testimonials from '$lib/components/pages/landing/testimonials/Testimonials.svelte';
  import Comparison from '$lib/components/pages/landing/comparison/Comparison.svelte';
  import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';
  import Industries from '$lib/components/pages/landing/industries/Industries.svelte';
  import Clients from '$lib/components/pages/landing/clients/Clients.svelte';
  import TryIt from '$lib/components/pages/landing/tryIt/TryIt.svelte';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { formSchema } from '$lib/formValidation.js';
  import UseCase from '$lib/components/pages/landing/useCase/UseCase.svelte';

  let { data } = $props();

  let {
    page: { sections, pricing, industries },
  } = $derived(data);
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'landing.testimonials'}
        <Testimonials {props} />
      {:else if props._type === 'landing.useCase'}
        <UseCase {props} />
      {:else if props._type === 'landing.industry'}
        <Industries {props} {industries} />
      {:else if props._type === 'landing.clients'}
        <!-- <Clients {props} /> -->
      {:else if props._type === 'landing.testCall'}
        <TryIt {props} form={data.testCallForm} />
      {:else if props._type === 'landing.faq'}
        <Faq {props} />
      {:else if props._type === 'landing.comparison'}
        <!-- <Comparison {props} /> -->
      {:else if props._type === 'landing.pricing'}
        <!-- <Pricing {props} {pricing} /> -->
      {/if}
    {/each}
  {/if}
</div>
