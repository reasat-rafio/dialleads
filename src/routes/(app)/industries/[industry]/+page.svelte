<script lang="ts">
	import SecuredAndEfficient from '$lib/components/pages/industries/securedAndEfficient/SecuredAndEfficient.svelte';
	import Banner from '$lib/components/common/banner/Banner.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();

	let {
		page: { sections, seo },
		site: {
			logos: { ogImage }
		}
	} = $derived(data);
</script>

<Seo {seo} siteOgImg={ogImage} />

<div>
	{#if !!sections?.length}
		{#each sections as props}
			{#if props._type === 'industries.securedAndEfficient'}
				<SecuredAndEfficient {props} />
			{:else if props._type === 'common.banner'}
				<Banner {props} />
			{/if}
		{/each}
	{/if}
</div>
