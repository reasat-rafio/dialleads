<script lang="ts">
  import Details from '$lib/components/pages/industryUseCases/Details.svelte';
  import Features from '$lib/components/pages/industryUseCases/Features.svelte';
  import Stat from '$lib/components/pages/industryUseCases/Stat.svelte';

  let data = $props();

  let { sections } = $derived(data?.data?.page);
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'industryUseCase.details'}
        <Details {props} />
      {:else if props._type === 'industryUseCase.features'}
        <Features {props} />
      {:else if props._type === 'industryUseCase.stat'}
        <Stat {props} />
      {/if}
    {/each}
  {/if}
</div>
