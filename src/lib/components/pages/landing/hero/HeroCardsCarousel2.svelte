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
	bind:selectedIndex={currentActiveIndex}
	plugins={[plugin]}
	class="relative mx-auto w-full max-w-[420px] overflow-visible px-0 md:max-w-[600px]"
	onmouseenter={plugin.stop}
	onmouseleave={plugin.reset}
	setApi={(api) => (carouselApi = api)}
	opts={{ loop: true }}
>
	<Carousel.Content class="flex overflow-visible">
		{#each useCases as useCase, index}
			<Carousel.Item class="max-w-[420px] flex-shrink-0 flex-grow-0 basis-[85%] md:basis-[60%]">
				<div class="flex justify-center">
					<div class="w-full rounded-[1.38rem] border border-violet-600 bg-[linear-gradient(242deg,_rgba(255,_255,_255,_0.21)_0%,_rgba(255,_255,_255,_0.10)_100%)] p-1 px-4 pb-6 pt-4 shadow-lg backdrop-blur-sm">
						<div class="flex flex-col h-full w-full">
							<!-- Card Image -->
							<div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
								<SanityImage
									class="h-full w-full rounded-[0.88rem]"
									innerClass="h-full w-full object-cover"
									lqip
									src={useCase.useCaseImage}
									imageUrlBuilder={imgBuilder}
									alt={useCase.useCaseImage?.alt || 'agent image'}
								/>
							</div>

							<!-- Titles -->
							<h2 class="font-Geist mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]">
								{useCase.useCaseTitle}
							</h2>
							<h3 class="font-Geist text-center text-[0.875rem] font-light text-white lg:text-[1rem]">
								{useCase.useCaseSubTitle}
							</h3>

							<!-- Waveform and Play Button -->
							<div class="mt-4 flex w-full items-center justify-center gap-3 px-2">
								<!-- Play/Pause Button -->
								<button
									onclick={() => togglePlay(index)}
									class="flex h-9 w-9 items-center justify-center rounded-full border border-violet-600 bg-violet-50 text-violet-600"
								>
									{#if $playStates[index]}
										<Pause class="h-4 w-4" />
									{:else}
										<Play class="h-4 w-4" />
									{/if}
								</button>

								<!-- Waveform Container -->
								<div id={`waveform-${index}`} class="w-[80%] max-w-[200px] overflow-hidden rounded-lg"></div>
							</div>
						</div>
					</div>
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
