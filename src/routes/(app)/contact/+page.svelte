<script lang="ts">
  import ContactForm from '$lib/components/pages/contact/ContactForm.svelte';
  import Hero from '$lib/components/pages/contact/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';

  let { data } = $props();

  let {
    page: { sections, seo },
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

<Seo {seo} siteOgImg={ogImage} />


<div class="flex max-w-full flex-col items-center justify-center font-geist">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'contact.hero'}
        <Hero {props} />
      {:else if props._type === 'contact.contactForm'}
        <ContactForm {props} />
      {/if}
    {/each}
  {/if}
</div>
