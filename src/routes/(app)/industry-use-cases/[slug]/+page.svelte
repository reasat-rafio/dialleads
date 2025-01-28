<script lang="ts">
  import Details from '$lib/components/pages/industryUseCases/Details.svelte';
  import Features from '$lib/components/pages/industryUseCases/Features.svelte';
  import Hero from '$lib/components/pages/industryUseCases/Hero.svelte';
  import Stat from '$lib/components/pages/industryUseCases/Stat.svelte';
  import Seo from '$lib/components/Seo.svelte';

  let { data } = $props();

  let {
    page: { sections, seo },
    site: {
      logos: { ogImage },
    },
  } = $derived(data);

  const industryUseCase = $derived.by(() => {
    return {
      useCaseImageForAI: data.page.useCaseImageForAI,
      useCaseSubTitleForAI: data.page.useCaseSubTitleForAI,
      mp3File: data.page.mp3File,
      slug: data.page.slug,
      useCaseTitleForAI: data.page.useCaseTitleForAI,
    };
  });
</script>

{#if seo}
  <Seo {seo} siteOgImg={ogImage} />
{/if}

<div class="">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props}
        {#if props?._type === 'industryUseCase.details'}
          <Details {props} />
        {:else if props._type === 'industryUseCase.hero'}
          <Hero {props} {industryUseCase} />
        {:else if props._type === 'industryUseCase.features'}
          <Features {props} />
        {:else if props._type === 'industryUseCase.stat'}
          <Stat {props} />
        {/if}
      {/if}
    {/each}
  {/if}
</div>
