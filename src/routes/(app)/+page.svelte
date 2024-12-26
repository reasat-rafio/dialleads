<script lang="ts">

  import Faq from '$lib/components/pages/landing/faq/Faq.svelte';
  import Testimonials from '$lib/components/pages/landing/testimonials/Testimonials.svelte';
import Comparison from '$lib/components/pages/landing/comparison/Comparison.svelte';
import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';

    let {data} = $props();
    let {page: {sections, pricing}} = $derived(data);
 
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'landing.testimonials'}
        <Testimonials {props} />
      {:else if props._type === 'landing.faq'}
        <Faq {props} />
       {:else if props._type === 'landing.comparison'}
            <Comparison {props} />
        {:else if props._type === 'landing.pricing'}
            <Pricing {props} pricing={pricing} />
      {/if}
    {/each}
  {/if}

</div>