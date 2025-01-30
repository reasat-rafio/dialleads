<script lang="ts">
  import PrivacyAndPolicy from '$lib/components/pages/privacyAndPolicy/PrivacyAndPolicy.svelte';
  import Seo from '$lib/components/Seo.svelte';



  let { data } = $props();
  $inspect(data)
  let {
    page: { sections, seo, title, _updatedAt},
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

{#if seo}
  <Seo {seo} siteOgImg={ogImage} />
{/if}

<div>
  <h1>Somel</h1>
</div>
