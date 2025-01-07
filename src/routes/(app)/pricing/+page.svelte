<script lang="ts">
  import Hero from '$lib/components/pages/pricing/hero/Hero.svelte';
  import SubsCriptionDetails from '$lib/components/pages/pricing/susbcriptionDetails/SubsCriptionDetails.svelte';


  let { data } = $props();
  let {
    page: { sections, plans, saveUpTo },
  } = $derived(data);
</script>

<div>
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'pricing.hero'}
        <Hero {props} {plans} {saveUpTo} />
      {:else if props._type === 'pricing.subscriptionDetails'}
      <SubsCriptionDetails {props} {plans} {saveUpTo}/>
      {/if}
    {/each}
  {/if}
</div>
