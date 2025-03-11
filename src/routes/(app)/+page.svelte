<script lang="ts">
	// import Faq from '$lib/components/pages/landing/faq/Faq.svelte';
	// import Testimonials from '$lib/components/pages/landing/testimonials/Testimonials.svelte';
	// import Pricing from '$lib/components/pages/landing/pricing/Pricing.svelte';
	// import Industries from '$lib/components/pages/landing/industries/Industries.svelte';
	import Comparison from '$lib/components/pages/landing/comparison/Comparison.svelte';
	import Clients from '$lib/components/pages/landing/clients/Clients.svelte';
	import TryIt from '$lib/components/pages/landing/tryIt/TryIt.svelte';
	import WhyDialleadsAi from '$lib/components/pages/landing/features/WhyDialleadsAI.svelte';
	import UseCase from '$lib/components/pages/landing/useCase/UseCase.svelte';
	// import Features from '$lib/components/pages/landing/features/Features.svelte';
	import WhyChooseUs from '$lib/components/pages/landing/whyChooseUs/WhyChooseUs.svelte';
	import HowToGetStarted from '$lib/components/pages/landing/getStarted/HowToGetStarted.svelte';
	import Integrations from '$lib/components/pages/landing/integrations/Integrations.svelte';
	import Hero from '$lib/components/pages/landing/hero/Hero.svelte';
	// import DataDriven from '$lib/components/pages/landing/dataDriven/DataDriven.svelte';

	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();

	let {
		page: { sections, pricing, seo },
		site: {
			logos: { ogImage }
		}
	} = $derived(data);
</script>

<Seo {seo} siteOgImg={ogImage} />

<div class="">
	{#if !!sections?.length}
		{#each sections as props}
			<!-- {#if props._type === 'landing.testimonials'}
				<Testimonials {props} /> -->
			{#if props._type === 'landing.hero'}
				<Hero {props} />
				<!-- {:else if props._type === 'landing.features'}
				<Features {props} />
			{:else if props._type === 'landing.industry'}
				<Industries {props} /> -->
			{:else if props._type === 'landing.clients'}
				<Clients {props} />
			{:else if props._type === 'landing.testCall'}
				<TryIt {props} form={data.testCallForm} />
			{:else if props._type === 'landing.whyDialleadsAI'}
				<WhyDialleadsAi {props} />
			{:else if props._type === 'landing.useCase'}
				<UseCase {props} />
			{:else if props._type === 'landing.comparison'}
				<Comparison {props} />
			{:else if props._type === 'landing.whyChooseUs'}
				<WhyChooseUs {props} />
			{:else if props._type === 'landing.getStarted'}
				<HowToGetStarted {props} />
			{:else if props._type === 'landing.integrations'}
				<Integrations {props} />
				<!--{:else if props._type === 'landing.faq'}
				<Faq {props} />
			{:else if props._type === 'landing.pricing'}
				<Pricing {props} {pricing} />
			{:else if props._type === 'landing.dataDriven'}
				<DataDriven {props} /> -->
			{/if}
		{/each}
	{/if}
</div>
