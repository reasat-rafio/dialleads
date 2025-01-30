<script lang="ts">
  import PrivacyAndPolicy from '$lib/components/pages/privacyAndPolicy/PrivacyAndPolicy.svelte';
  import Seo from '$lib/components/Seo.svelte';



  let { data } = $props();
  let {
    page: { sections, seo, title, _updatedAt, description},
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

{#if seo}
  <Seo {seo} siteOgImg={ogImage} />
{/if}

<div>
 <PrivacyAndPolicy {sections} {title} {_updatedAt} {description} />
</div>
