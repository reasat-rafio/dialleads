<script lang="ts">
  import Features from '$lib/components/pages/landing/features/Features.svelte';
  import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';
  import Faq from '$lib/components/pages/landing/faq/Faq.svelte';
  import Testimonials from '$lib/components/pages/landing/testimonials/Testimonials.svelte';
  import Comparison from '$lib/components/pages/landing/comparison/Comparison.svelte';
  import WhyDialleadsAi from '$lib/components/pages/landing/whyDialleadsAI/WhyDialleadsAI.svelte';
  import WhyChooseUs from '$lib/components/pages/landing/whyChooseUs/WhyChooseUs.svelte';

  let { data } = $props();
  let {
    page: { sections, pricing },
  } = $derived(data);
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'landing.testimonials'}
        <!-- <Testimonials {props} /> -->
      {:else if props._type === 'landing.features'}
        <!-- <Features {props} /> -->
      {:else if props._type === 'landing.faq'}
        <!-- <Faq {props} /> -->
      {:else if props._type === 'landing.comparison'}
        <Comparison {props} />
      {:else if props._type === 'landing.pricing'}
        <!-- <Pricing {props} {pricing} /> -->
      {:else if props._type === 'landing.whyDialleadsAI'}
        <!-- <WhyDialleadsAi {props} /> -->
      {:else if props._type === 'landing.whyChooseUs'}
        <!-- <WhyChooseUs {props} /> -->
      {/if}
    {/each}
  {/if}
</div>
