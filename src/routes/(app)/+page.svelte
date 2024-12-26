<script lang="ts">
  import Comparison from '$lib/components/pages/landing/comparison/Comparison.svelte';
import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';

    let {data} = $props();
    let {page: {sections, pricing}} = $derived(data);
</script>

<div>
    {#each sections as props}
        {#if props._type === 'landing.hero'}
        <div></div>
        {:else if props._type === 'landing.comparison'}
            <Comparison {props} />
        {:else if props._type === 'landing.pricing'}
            <Pricing {props} pricing={pricing} />
        {/if}
    {/each}
</div>
