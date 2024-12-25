<script lang="ts">
  import Faq from '$lib/components/pages/landing/faq/Faq.svelte';
  import Testimonials from '$lib/components/pages/landing/testimonials/Testimonials.svelte';

  let data = $props();

  let { sections } = $derived(data?.data?.page);
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'landing.testimonials'}
        <Testimonials {props} />
      {:else if props._type === 'landing.faq'}
        <Faq {props} />
      {/if}
    {/each}
  {/if}
</div>
