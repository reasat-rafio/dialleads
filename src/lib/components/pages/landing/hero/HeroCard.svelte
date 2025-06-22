
<script lang="ts">
	import { onMount } from 'svelte';
	import { Pause, Play } from 'lucide-svelte';
	import WaveSurfer from 'wavesurfer.js';
	import type { UseCases } from '../../../../../types/landing.types';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import { writable } from 'svelte/store';

	// Global store to track which card is playing
	export const currentlyPlayingId = writable<string | null>(null);

	let { useCase, id }: { useCase: UseCases; id: string } = $props();
	let { useCaseImage, useCaseTitle, useCaseSubTitle } = $derived(useCase);

	let isPlaying: boolean = $state(false);
	let waveSurfer: WaveSurfer;
	let waveformElement: HTMLDivElement;

	// Generate mp3 URL from Sanity asset ref
	function resolveMp3Url(ref: string) {
		return `https://cdn.sanity.io/files/zhic6sia/production/${ref.replace('file-', '').replace('-', '.')}`;
	}

	onMount(() => {
		const ref = useCase.mp3File?.asset?._ref;
		if (!ref || !waveformElement) return;

		// gradient for waveform
		const canvas = document.createElement('canvas');
		canvas.width = 100;
		canvas.height = 1;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, '#6d28d9');
		gradient.addColorStop(0.3, '#8d78df');
		gradient.addColorStop(1, 'white');

		//  WaveSurfer instance
		waveSurfer = WaveSurfer.create({
			container: waveformElement,
			waveColor: gradient,
			progressColor: '#1d1869',
			height: 40,
			barWidth: 4,
			barRadius: 4,
			barGap: 4
		});

		waveSurfer.load(resolveMp3Url(ref));

		waveSurfer.on('play', () => (isPlaying = true));
		waveSurfer.on('pause', () => (isPlaying = false));
		waveSurfer.on('finish', () => (isPlaying = false));

		return () => {
			waveSurfer?.destroy();
		};
	});

	$effect(() => {
		const unsubscribe = currentlyPlayingId.subscribe((playingId) => {
			if (playingId !== id && isPlaying && waveSurfer) {
				waveSurfer.pause();
			}
		});
		return unsubscribe;
	});

	function togglePlay() {
		if (!isPlaying) {
			currentlyPlayingId.set(id);
		}
		waveSurfer?.playPause();
	}
</script>

<!-- Card Body -->
<div class="h-[414px] w-[305px]">
	<div
		class="h-fit w-full rounded-[1.38rem] border-[0.342px] border-violet-600 bg-[linear-gradient(242deg,_rgba(255,_255,_255,_0.21)_0%,_rgba(255,_255,_255,_0.10)_100%)] px-4 pb-6 pt-4 backdrop-blur-sm"
	>
		<div class="flex h-full w-full flex-col">
			<!-- Card Image -->
			<div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
				<SanityImage
					class="h-full w-full rounded-[0.88rem]"
					innerClass="h-full w-full object-cover"
					lqip
					src={useCaseImage}
					imageUrlBuilder={imgBuilder}
					alt={useCaseImage?.alt || 'agent image'}
				/>
			</div>

			<!-- Card Title & Subtitle -->
			<h2
				class="font-Geist mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]"
			>
				{useCaseTitle}
			</h2>
			<h3 class="font-Geist text-center text-[0.875rem] font-light text-white lg:text-[1rem]">
				{useCaseSubTitle}
			</h3>

			<!--Play/Pause -->

			<div class="mt-4 flex w-full items-center justify-center gap-3 px-2">
				<button
					onclick={togglePlay}
					class="flex h-9 w-9 items-center justify-center rounded-full border border-violet-600 bg-violet-50 text-violet-600"
				>
					{#if isPlaying}
						<Pause class="h-4 w-4" />
					{:else}
						<Play class="h-4 w-4" />
					{/if}
				</button>

				<!-- Waveform -->
				<div
					bind:this={waveformElement}
					class="w-[80%] max-w-[200px] overflow-hidden rounded-lg"
				></div>
			</div>
		</div>
	</div>
</div>

