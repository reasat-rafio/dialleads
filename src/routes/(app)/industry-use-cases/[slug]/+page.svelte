<script lang="ts">
  import AboutUs from '$lib/components/pages/industryUseCases/AboutUs.svelte';
  import Customers from '$lib/components/pages/industryUseCases/Customers.svelte';
  import Details from '$lib/components/pages/industryUseCases/Details.svelte';
  import DiscussWithUs from '$lib/components/pages/industryUseCases/DiscussWithUs.svelte';
  import Faq from '$lib/components/pages/industryUseCases/Faq.svelte';
  import Features from '$lib/components/pages/industryUseCases/Features.svelte';
  import FeaturesV2 from '$lib/components/pages/industryUseCases/FeaturesV2.svelte';
  import Integration from '$lib/components/pages/industryUseCases/Integration.svelte';
  import Offer from '$lib/components/pages/industryUseCases/Offer.svelte';
  import Review from '$lib/components/pages/industryUseCases/Review.svelte';
  import Sequrity from '$lib/components/pages/industryUseCases/Sequrity.svelte';
  import Stat from '$lib/components/pages/industryUseCases/Stat.svelte';
  import Testimonials from '$lib/components/pages/industryUseCases/Testimonials.svelte';
  import TryIt from '$lib/components/pages/industryUseCases/TryIt.svelte';

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
        <!-- {:else if props._type === 'industryUseCase.offer'}
        <Offer {props} />
      {:else if props._type === 'industryUseCase.customers'}
        <Customers {props} />
      {:else if props._type === 'industryUseCase.featuresV2'}
        <FeaturesV2 {props} />
      {:else if props._type === 'industryUseCase.tryIt'}
        <TryIt {props} />
      {:else if props._type === 'industryUseCase.review'}
        <Review {props} />
      {:else if props._type === 'industryUseCase.integration'}
        <Integration {props} />
      {:else if props._type === 'industryUseCase.sequrity'}
        <Sequrity {props} />
      {:else if props._type === 'industryUseCase.aboutUs'}
        <AboutUs {props} />
      {:else if props._type === 'industryUseCase.discussWithUs'}
        <DiscussWithUs {props} />
      {:else if props._type === 'industryUseCase.testimonials'}
        <Testimonials {props} />
      {:else if props._type === 'industryUseCase.faq'}
        <Faq {props} /> -->
      {/if}
    {/each}
  {/if}
</div>
