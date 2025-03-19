<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { imgBuilder, urlFor } from '$lib/sanity/sanity-client';
	import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
	import { page } from '$app/stores';
	import type { SeoProps } from '../../types/common.types';

	interface Props {
		seo: SeoProps;
		siteOgImg: SanityImageSource | undefined;
	}

	let { seo, siteOgImg }: Props = $props();

	const HEIGHT = 630;
	const WIDTH = 1200;
	let title = seo?.title;
	let description = seo?.description;
	let ogImage = seo?.ogImage ?? siteOgImg;

	const makeOpenGraphImages = () => {
		const pageOgImageIsSet = !!seo?.ogImage;

		const sanityImgUrl = imgBuilder.image(ogImage).width(WIDTH).height(HEIGHT).url();

		const defaultImgUrl = urlFor(ogImage).width(WIDTH).height(HEIGHT).url();
		const fallbackImgUrl = `${$page.url.origin}/api/og?title=${title}&img=${encodeURIComponent(sanityImgUrl)}&pageUrl=${encodeURIComponent($page.url.href)}`;

		return [
			{
				url: pageOgImageIsSet ? defaultImgUrl : fallbackImgUrl,
				width: WIDTH,
				height: HEIGHT,
				alt: title
			}
		];
	};
</script>

<MetaTags
	{title}
	{description}
	keywords={seo?.keywords}
	canonical="https://dialleads.vercel.app{$page.url.pathname}"
	openGraph={{
		type: 'website',
		title,
		description,
		url: `https://dialleads.vercel.app${$page.url.pathname}`,
		images: makeOpenGraphImages(),
		siteName: 'Edistys'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image: urlFor(ogImage).width(600).height(400).auto('format').url()
	}}
/>
