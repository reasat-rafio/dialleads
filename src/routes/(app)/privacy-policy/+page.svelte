<script lang="ts">
  import Content from '$lib/components/common/Content.svelte';
  import Seo from '$lib/components/Seo.svelte';

  let { data } = $props();
  let {
    page: { sections, seo, title, _updatedAt, description },
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

{#if seo}
  <Seo {seo} siteOgImg={ogImage} />
{/if}

<div>
  <Content {sections} {title} {_updatedAt} {description} />
</div>
