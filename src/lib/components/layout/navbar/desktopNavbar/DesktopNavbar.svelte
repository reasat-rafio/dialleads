<script lang="ts">
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { SanityImageWithAlt } from '../../../../../types/common.types';
	import type { Nav } from '../../../../../types/site.types';
	import { page } from '$app/state';

	interface Props {
		nav: Nav;
		logo: SanityImageWithAlt;
	}

	let { nav, logo }: Props = $props();
	let { companyName, cta } = $derived(nav);

	let isScrolled = $state(false);

	function handleScroll() {
		isScrolled = window.scrollY > 0;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const isPolicyPage = $derived.by(() => {
		return ['/privacy-policy', '/terms-conditions'].includes(page.url.pathname);
	});
</script>

<div class="relative mx-5 rounded-[1.875rem] xl:mx-0 xl:px-0">
	<div
		class={`${isScrolled ? 'fixed left-0 top-0 z-[1000] w-full bg-white pb-4 pt-4 text-black transition-[background-color] duration-300 ease-linear [box-shadow:_0_4px_6px_rgba(0,_0,_0,_0.1)]' : 'fixed inset-0 z-[300] pt-[2.2rem]'}`}
	>
		<div class="mx-auto flex max-w-7xl justify-between lg:px-5 2xl:px-0">
			<a href="/" class="flex items-center gap-[0.49rem]">
				<SanityImage
					class="h-[1.625rem] w-[1.875rem]"
					src={logo}
					sizes="100vw"
					imageUrlBuilder={imgBuilder}
					alt={logo?.alt || 'logo'}
				/>
				<h5
					class={`font-geist text-[1.154rem] font-normal ${isScrolled || isPolicyPage ? 'text-black' : 'text-white'}`}
				>
					{companyName}
				</h5>
			</a>
			<div class="flex items-center gap-10 xl:gap-[4.063rem]">
				{#each nav?.menu as item}<div
						role="button"
						tabindex="0"
						class="relative z-50 flex items-center"
					>
						<a
							data-sveltekit-preload-data="off"
							href={item?.link?.type === 'internal'
								? item?.link?.internalLink
								: item?.link?.externalLink}
							class="font-geist text-[1rem] font-normal leading-[150%] opacity-80 {isScrolled ||
							isPolicyPage
								? 'text-black'
								: 'text-white'}"
						>
							{item?.link?.title}
						</a>
					</div>
				{/each}
			</div>

			<div class="z-50 bg-transparent">
				<a
					href={cta.type === 'internal' ? cta.internalLink : cta.externalLink}
					class="flex h-[2.875rem] w-[8.25rem] items-center justify-center rounded-[0.75rem] border border-violet-600 bg-primary-gradient
          px-5 py-[0.875rem] font-geist font-medium text-white"
				>
					{cta.title}
				</a>
			</div>
		</div>
	</div>
</div>
