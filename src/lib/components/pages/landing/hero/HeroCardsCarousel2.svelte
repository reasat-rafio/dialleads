<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Pause, Play } from 'lucide-svelte';
	import WaveSurfer from 'wavesurfer.js';
	import type { UseCases } from '../../../../../types/landing.types';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import HeroCard from './HeroCard.svelte';

	let { useCases }: { useCases: UseCases[] } = $props();
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	let currentActiveIndex = $state(0);
	let carouselApi: any = null;

	let waveSurferInstances: WaveSurfer[] = [];
	const playStates = writable<boolean[]>([]);

	function resolveMp3Url(ref: string) {
		return `https://cdn.sanity.io/files/zhic6sia/production/${ref.replace('file-', '').replace('-', '.')}`;
	}

	// Set all playStates to false
	$effect(() => {
		useCases.forEach((_, index) => {
			playStates.update((states) => {
				states[index] = false;
				return states;
			});
		});
	});

	onMount(() => {
		const canvas = document.createElement('canvas');
		canvas.width = 100;
		canvas.height = 1;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, '#6d28d9');
		gradient.addColorStop(0.3, '#8d78df');
		gradient.addColorStop(1, 'white');

		useCases.forEach((useCase, index) => {
			const waveformElement = document.getElementById(`waveform-${index}`);
			const ref = useCase.mp3File?.asset?._ref;
			if (!waveformElement || !ref) return;

			const waveSurfer = WaveSurfer.create({
				container: waveformElement,
				waveColor: gradient,
				progressColor: '#1d1869',
				height: 40,
				barWidth: 4,
				barRadius: 4,
				barGap: 4
			});

			waveSurfer.load(resolveMp3Url(ref));
			waveSurferInstances[index] = waveSurfer;

			waveSurfer.on('finish', () => {
				playStates.update((states) => {
					states[index] = false;
					return states;
				});
			});
		});

		return () => {
			waveSurferInstances.forEach((w) => w?.destroy());
		};
	});

	function togglePlay(index: number) {
		playStates.update((states) => {
			states[index] = !states[index];
			waveSurferInstances[index]?.playPause();

			states.forEach((_, i) => {
				if (i !== index && waveSurferInstances[i]?.isPlaying()) {
					waveSurferInstances[i]?.pause();
					states[i] = false;
				}
			});
			return [...states];
		});
	}
</script>

<Carousel.Root
	plugins={[plugin]}
	class="relative mx-auto w-full max-w-[420px] overflow-visible px-0 md:max-w-[600px]"
	onmouseenter={plugin.stop}
	onmouseleave={plugin.reset}
	setApi={(api) => {
		carouselApi = api;
		if (carouselApi) {
			currentActiveIndex = carouselApi.selectedScrollSnap();
			carouselApi.on('select', () => {
				currentActiveIndex = carouselApi.selectedScrollSnap();
			});
		}
	}}
	opts={{ loop: true }}
>
	<Carousel.Content class="flex overflow-visible">
		{#each useCases as useCase, index}
			<Carousel.Item class="max-w-[420px] flex-shrink-0 flex-grow-0 basis-[85%] md:basis-[60%]">
				<div class="flex justify-center">
					<HeroCard {useCase} id={useCase._id ?? String(index)} />
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>

	<!-- Dot Navigation -->
	<div class="mt-4 flex justify-center gap-3">
		{#each useCases as _, index}
			<button
				type="button"
				class={currentActiveIndex === index
					? 'h-3 w-8 rounded-full bg-violet-500 transition-all duration-300'
					: 'h-3 w-3 rounded-full bg-white transition-all duration-300'}
				onclick={() => carouselApi && carouselApi.scrollTo(index)}
				aria-label={`Go to slide ${index + 1}`}
			></button>
		{/each}
	</div>
</Carousel.Root>
