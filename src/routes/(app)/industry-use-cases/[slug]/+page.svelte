<script lang="ts">
  import Details from '$lib/components/pages/industryUseCases/Details.svelte';
  import Features from '$lib/components/pages/industryUseCases/Features.svelte';
  import Hero from '$lib/components/pages/industryUseCases/Hero.svelte';
  import Stat from '$lib/components/pages/industryUseCases/Stat.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import type { IndustryUseCaseProps } from '../../../../types/industryUseCases.types';

  let data = $props();

  let {
    data: {
      page: { sections, seo },
      site: {
        logos: { ogImage },
      },
    },
  } = $derived(data);

  $inspect(data.data.page);

  const industryUseCase = $derived.by(() => {
    return {
      useCaseImageForAI: data.data.page.useCaseImageForAI,
      useCaseSubTitleForAI: data.data.page.useCaseSubTitleForAI,
      mp3File: data.data.page.mp3File,
      slug: data.data.page.slug,
      useCaseTitleForAI: data.data.page.useCaseTitleForAI,
    };
  });
</script>

<Seo {seo} siteOgImg={ogImage} />

<div class="">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'industryUseCase.details'}
        <Details {props} />
      {:else if props._type === 'industryUseCase.hero'}
        <Hero {props} {industryUseCase} />
      {:else if props._type === 'industryUseCase.features'}
        <Features {props} />
      {:else if props._type === 'industryUseCase.stat'}
        <Stat {props} />
      {/if}
    {/each}
  {/if}
</div>
