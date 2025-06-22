<script lang="ts">
	import { onMount } from 'svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Pause, Play } from 'lucide-svelte';
	import { Howl } from 'howler';
	import type { UseCases } from '../../../../../types/landing.types';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';

	let { useCases }: { useCases: UseCases[] } = $props();

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	// Embla carousel instance & active index
	let embla: any;
	let currentActiveIndex = $state(0);

	// Audio state management for each card
	let audioStates = $state<
		Map<number, { sound: Howl; isPlaying: boolean; duration: number; progress: number }>
	>(new Map());

	// Handle embla index changes
	$effect(() => {
		if (embla) {
			const updateIndex = () => {
				currentActiveIndex = embla.selectedScrollSnap();
			};

			embla.on('select', updateIndex);
			updateIndex(); // Set initial index

			return () => {
				embla.off('select', updateIndex);
			};
		}
	});

	onMount(() => {
		// Initialize audio
		useCases.forEach((useCase, index) => {
			if (!useCase.mp3File?.url) return;

			const sound = new Howl({
				src: [useCase.mp3File.url],
				html5: true,
				onload: () => {
					const currentState = audioStates.get(index);
					if (currentState) {
						currentState.duration = sound.duration();
						audioStates.set(index, currentState);
					}
				}
			});

			audioStates.set(index, {
				sound,
				isPlaying: false,
				duration: 0,
				progress: 0
			});

			const updateProgress = () => {
				const currentState = audioStates.get(index);
				if (currentState && sound.playing()) {
					currentState.progress = sound.seek() as number;
					audioStates.set(index, currentState);
					requestAnimationFrame(updateProgress);
				}
			};

			sound.on('play', () => {
				const currentState = audioStates.get(index);
				if (currentState) {
					currentState.isPlaying = true;
					audioStates.set(index, currentState);
					requestAnimationFrame(updateProgress);
				}
			});

			sound.on('pause', () => {
				const currentState = audioStates.get(index);
				if (currentState) {
					currentState.isPlaying = false;
					audioStates.set(index, currentState);
				}
			});

			sound.on('end', () => {
				const currentState = audioStates.get(index);
				if (currentState) {
					currentState.isPlaying = false;
					currentState.progress = 0;
					audioStates.set(index, currentState);
				}
			});
		});

		return () => {
			audioStates.forEach((state) => {
				state.sound?.unload();
			});
		};
	});

	const togglePlay = (index: number) => {
		const state = audioStates.get(index);
		if (!state) return;

		state.isPlaying ? state.sound.pause() : state.sound.play();
		audioStates.set(index, state);
	};
</script>

<Carousel.Root
	setApi={(api) => (embla = api)}
	plugins={[plugin]}
	class="relative mx-auto w-full max-w-xs px-2"
	onmouseenter={plugin.stop}
	onmouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each useCases as useCase, index}
			<Carousel.Item>
				<div class="p-1">
					<div
						class="h-fit w-full rounded-[1.38rem] border-[0.342px] border-violet-600 bg-[linear-gradient(242deg,_rgba(255,_255,_255,_0.21)_0%,_rgba(255,_255,_255,_0.10)_100%)] px-4 pb-6 pt-4 backdrop-blur-sm"
					>
						<div class="flex h-full w-full flex-col">
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

							<h2
								class="font-Geist mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]"
							>
								{useCase.useCaseTitle}
							</h2>
							<h3
								class="font-Geist text-center text-[0.875rem] font-light text-white lg:text-[1rem]"
							>
								{useCase.useCaseSubTitle}
							</h3>

							<div class="mt-4 flex w-full items-center justify-center gap-3">
								<button
									onclick={() => togglePlay(index)}
									class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-violet-600 bg-violet-50 text-violet-600 outline outline-[0.75px] outline-offset-[-0.75px] transition-colors duration-200 focus:outline-none"
								>
									{#if audioStates.get(index)?.isPlaying}
										<Pause class="h-4 w-4" />
									{:else}
										<Play class="h-4 w-4" />
									{/if}
								</button>

								<div class="relative h-4 w-32 overflow-hidden rounded bg-white/10">
									{#if audioStates.get(index)}
										<div
											class="absolute left-0 top-0 h-full bg-white transition-all duration-100"
											style="width: {(audioStates.get(index)?.duration ?? 0) > 0
												? ((audioStates.get(index)?.progress ?? 0) /
														(audioStates.get(index)?.duration ?? 1)) *
													100
												: 0}%"
										></div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>

	<!-- Active Dot Pagination -->
	<div class="mt-4 flex justify-center gap-3">
		{#each useCases as _, index}
			{#if currentActiveIndex === index}
				<!-- Active dot -->
				<div class="h-3 w-8 rounded-full bg-violet-500 transition-all duration-300"></div>
			{:else}
				<!-- Inactive dot -->
				<div class="h-3 w-3 rounded-full bg-white transition-all duration-300"></div>
			{/if}
		{/each}
	</div>
</Carousel.Root>
