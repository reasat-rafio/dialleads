<script lang="ts">
  import Banner from "$lib/components/common/banner/Banner.svelte";
  import ContactForm from "$lib/components/pages/contact/contact-form/ContactForm.svelte";
  import Hero from "$lib/components/pages/contact/hero/Hero.svelte";
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
      {#if props._type === "contact.hero"}
        <Hero {...props} />
      {:else if props._type === "contact.contactForm"}
        <ContactForm {...props} />
      {:else if props._type === "common.banner"}
        <Banner {props} />
      {/if}
    {/each}
  {/if}
</div>
