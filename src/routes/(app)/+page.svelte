<script lang="ts">
  import Features from '$lib/components/pages/landing/features/Features.svelte';
  import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';

  let { data } = $props();
  let {
    page: { sections, pricing },
  } = $derived(data);

  $inspect(data);
</script>

<div>
  {#each sections as props}
    {#if props._type === 'landing.hero'}
      <div></div>
    {:else if props._type === 'landing.features'}
      <Features {props} />
    {:else if props._type === 'landing.pricing'}
      <Pricing {props} {pricing} />
    {/if}
  {/each}
</div>
