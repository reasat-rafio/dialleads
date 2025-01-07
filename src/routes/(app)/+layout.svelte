<script lang="ts">
  import FooterCopy from '$lib/components/layout/mobileNavbar/FooterCopy.svelte';
  import { page } from '$app/state';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import { urlFor } from '$lib/sanity/sanity-client';

  let { data, children } = $props();

  let {
    site: {
      nav,
      logos: { favicon, logo },
      footer,
    },
  } = $derived(data);

  let faviconImage = $derived.by(() => {
    return favicon
      ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
      : null;
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<div class="relative">
  <div class="px-2">
    <Navbar pathName={page.url.pathname} {nav} {logo} />
  </div>

  {@render children()}

  <FooterCopy {footer} />
</div>
