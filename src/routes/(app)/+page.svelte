<script lang="ts">
  import Banner from "$lib/components/common/banner/Banner.svelte";
  import Video from "$lib/components/common/video/Video.svelte";
  import Clients from "$lib/components/pages/landing/clients/Clients.svelte";
  import Comparison from "$lib/components/pages/landing/comparison/Comparison.svelte";
  import Faq from "$lib/components/pages/landing/faq/Faq.svelte";
  import WhyDialleadsAi from "$lib/components/pages/landing/features/WhyDialleadsAI.svelte";
  import HowToGetStarted from "$lib/components/pages/landing/getStarted/HowToGetStarted.svelte";
  import Hero from "$lib/components/pages/landing/hero/Hero.svelte";
  import Industries from "$lib/components/pages/landing/industry/Industries.svelte";
  import Integrations from "$lib/components/pages/landing/integrations/Integrations.svelte";
  import Testimonials from "$lib/components/pages/landing/testimonials/Testimonials.svelte";
  import TryIt from "$lib/components/pages/landing/tryIt/TryIt.svelte";
  import WhyChooseUs from "$lib/components/pages/landing/whyChooseUs/WhyChooseUs.svelte";
  import Seo from "$lib/components/Seo.svelte";

  let { data } = $props();
  let {
    page: { sections, seo },
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

<Seo {seo} siteOgImg={ogImage} />

<div>
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === "landing.hero"}
        <Hero {props} />
      {:else if props._type === "landing.industry"}
        <Industries {props} />
      {:else if props._type === "landing.clients"}
        <Clients {props} />
      {:else if props._type === "landing.testCall"}
        <TryIt {props} form={data.testCallForm} />
      {:else if props._type === "common.video"}
        <Video {props} />
      {:else if props._type === "landing.whyDialleadsAI"}
        <WhyDialleadsAi {props} />
        <!-- {:else if props._type === 'landing.useCase'}
				<UseCase {props} /> -->
      {:else if props._type === "landing.comparison"}
        <Comparison {props} />
      {:else if props._type === "landing.whyChooseUs"}
        <WhyChooseUs {props} />
      {:else if props._type === "landing.getStarted"}
        <HowToGetStarted {props} />
      {:else if props._type === "landing.integrations"}
        <Integrations {props} />
      {:else if props._type === "landing.testimonials"}
        <Testimonials {props} />
      {:else if props._type === "landing.faq"}
        <Faq {props} />
      {:else if props._type === "common.banner"}
        <Banner {props} />
      {/if}
    {/each}
  {/if}
</div>
