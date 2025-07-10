<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/layout/footer/Footer.svelte';
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
	import { urlFor } from '$lib/sanity/sanity-client';

	let { data, children } = $props();

	let {
		site: {
			nav,
			logos: { favicon, logo },
			footer
		}
	} = $derived(data);

	let faviconImage = $derived.by(() => {
		return favicon ? urlFor(favicon).size(256, 256).format('png').ignoreImageParams().url() : null;
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<div class="relative font-geist">
	<div>
		<Navbar {nav} {logo} pathName={page.url.pathname} />
	</div>

	{@render children()}

	<Footer {footer} />
</div>
