<script lang="ts">
  import Hero from "$lib/components/pages/industries/hero/Hero.svelte";
  import WhyUs from "$lib/components/pages/industries/whyUs/WhyUs.svelte";
  import WhyDialleadsAi from "$lib/components/pages/industries/features/WhyDialleadsAI.svelte";
  import SecuredAndEfficient from "$lib/components/pages/industries/securedAndEfficient/SecuredAndEfficient.svelte";
  import Banner from "$lib/components/common/banner/Banner.svelte";
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
      {#if props._type === "industries.hero"}
        <Hero {props} />
        <!-- {#if props._type === 'industries.whyUs'}
				<WhyUs {props} /> -->
      {:else if props._type === "industries.whyUs"}
        <WhyUs {props} />
      {:else if props._type === "industries.whyDialleadsAI"}
        <WhyDialleadsAi {props} />
      {:else if props._type === "industries.securedAndEfficient"}
        <SecuredAndEfficient {props} />
      {:else if props._type === "common.banner"}
        <Banner {props} />
      {/if}
    {/each}
  {/if}
</div>
