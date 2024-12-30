<script lang="ts">
  import { urlFor } from '$lib/sanity/sanity-client';

  import NavbarWithModal from '$lib/components/layout/NavbarWithModal.svelte';
  import { page } from '$app/stores';

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

<div class="">
  <NavbarWithModal {nav} {logo} />
</div>

{@render children()};
