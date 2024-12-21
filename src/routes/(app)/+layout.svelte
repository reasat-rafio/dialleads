<script lang="ts">
  import { urlFor } from '$lib/sanity/sanity-client';

  let { children, data } = $props();
  let {
    site: {
      logos: { logo, favicon },
    },
  } = $derived(data);

  let faviconImage = $derived( favicon
    ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
    : null)
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<main class="overflow-hidden">
  {@render children()}
</main>
