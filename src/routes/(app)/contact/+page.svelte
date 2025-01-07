<script lang="ts">
  import ContactForm from '$lib/components/pages/contact/ContactForm.svelte';
  import Hero from '$lib/components/pages/contact/Hero.svelte';

  let { data } = $props();

  let {
    page: { sections },
  } = $derived(data);

</script>

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
