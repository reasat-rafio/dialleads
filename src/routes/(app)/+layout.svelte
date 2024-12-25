<script lang="ts">
  import { urlFor } from '$lib/sanity/sanity-client';

  import NavbarWithModal from '$lib/components/layout/NavbarWithModal.svelte';
  import { page } from '$app/stores';

  export let data;
  $: ({
    site: {
      nav,
      logos: { favicon, logo },
      footer,
    },
  } = data);

  let faviconImage = favicon
    ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
    : null;
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<div class="">
  <NavbarWithModal {nav} {logo} />
</div>

<slot />

<!-- {#if $page.url.pathname === '/contact'}
  <FooterForContactPage {footer} />
{:else}
  <Footer {footer} />
{/if} -->
