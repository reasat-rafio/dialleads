<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { onMount } from 'svelte';
	import type { UseCases } from '../../../../../types/landing.types';
	import HeroCard from './HeroCard.svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	let { useCases }: { useCases: UseCases[] } = $props();

	const pluginMedium = Autoplay({ delay: 2500, stopOnInteraction: true });
	const pluginSmall = Autoplay({ delay: 2500, stopOnInteraction: true });

	let currentActiveIndexMedium = $state(0);
	let carouselApiMedium: EmblaCarouselType | null = null;

	let currentActiveIndexSmall = $state(0);
	let carouselApiSmall: EmblaCarouselType | null = null;

	let visibleCount = $state(1);
	let shouldCarousel = $state(false);

	function updateShouldCarousel() {
		const width = window.innerWidth;

		if (width < 768) visibleCount = 1;
		else if (width < 1024) visibleCount = 3;
		else visibleCount = 4;

		shouldCarousel = useCases.length > visibleCount;
	}

	onMount(() => {
		updateShouldCarousel();
		window.addEventListener('resize', updateShouldCarousel);
		return () => window.removeEventListener('resize', updateShouldCarousel);
	});
</script>

{#if shouldCarousel}
	<!-- Small device carousel: visible only on small screens -->
	<Carousel.Root
		plugins={[pluginSmall]}
		class="relative mx-auto w-full max-w-[420px] overflow-visible px-0 md:hidden"
		onmouseenter={pluginSmall.stop}
		onmouseleave={pluginSmall.reset}
		setApi={(api) => {
			carouselApiSmall = api;
			if (carouselApiSmall) {
				currentActiveIndexSmall = carouselApiSmall.selectedScrollSnap();
				carouselApiSmall.on('select', () => {
					currentActiveIndexSmall = carouselApiSmall.selectedScrollSnap();
				});
			}
		}}
		opts={{ loop: true }}
	>
		<Carousel.Content class="flex gap-4 overflow-visible px-4">
			{#each useCases as useCase, index}
				<Carousel.Item class="max-w-[420px] flex-shrink-0 flex-grow-0 basis-[85%]">
					<div class="flex justify-center">
						<HeroCard {useCase} id={String(index)} />
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<div class="mt-4 flex justify-center gap-3">
			{#each useCases as _, index}
				<button
					type="button"
					class={currentActiveIndexSmall === index
						? 'h-3 w-8 rounded-full bg-violet-500 transition-all duration-300'
						: 'h-3 w-3 rounded-full bg-white transition-all duration-300'}
					onclick={() => carouselApiSmall && carouselApiSmall.scrollTo(index)}
					aria-label={`Go to slide ${index + 1}`}
				></button>
			{/each}
		</div>
	</Carousel.Root>

	<!-- Medium+ device carousel: visible only on md and larger -->
	<Carousel.Root
		plugins={[pluginMedium]}
		class="relative mx-auto hidden w-full max-w-7xl md:block"
		onmouseenter={pluginMedium.stop}
		onmouseleave={pluginMedium.reset}
		setApi={(api) => {
			carouselApiMedium = api;
			if (carouselApiMedium) {
				currentActiveIndexMedium = carouselApiMedium.selectedScrollSnap();
				carouselApiMedium.on('select', () => {
					currentActiveIndexMedium = carouselApiMedium.selectedScrollSnap();
				});
			}
		}}
		opts={{
			loop: useCases.length > 4,
			align: 'start',
			slidesToScroll: 1
		}}
	>
		<Carousel.Content class="flex">
			{#each useCases as useCase, index}
				<Carousel.Item
					class="flex-shrink-0 basis-[100%] sm:basis-[100%] md:basis-[32.3333%] lg:basis-[25%]"
				>
					<HeroCard {useCase} id={String(index)} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<!-- Dots -->
		<div class="mt-4 flex justify-center gap-3">
			{#each useCases as _, index}
				<button
					type="button"
					class={currentActiveIndexMedium === index
						? 'h-3 w-8 rounded-full bg-violet-500 transition-all duration-300'
						: 'h-3 w-3 rounded-full bg-white transition-all duration-300'}
					onclick={() => carouselApiMedium && carouselApiMedium.scrollTo(index)}
					aria-label={`Go to slide ${index + 1}`}
				></button>
			{/each}
		</div>
	</Carousel.Root>
{:else}
	<!-- Static Grid Mode for all screens -->
	<div
		class="mx-auto mt-4 grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each useCases as useCase, index}
			<HeroCard {useCase} id={String(index)} />
		{/each}
	</div>
{/if}
