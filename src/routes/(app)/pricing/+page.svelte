<script lang="ts">
  import ComparePlans from '$lib/components/pages/pricing/comparePlans/ComparePlans.svelte';


    let {data} = $props();
    let {page: {sections}} = $derived(data);
</script>

<div class="">
    {#each sections as props}
        {#if props._type === 'pricingPage.comparePlans'}
                <ComparePlans {props} />
        {/if}
    {/each}
</div>