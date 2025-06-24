<script lang="ts">
	import type { UseCases } from '../../../../../types/landing.types';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { Pause, Play } from 'lucide-svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import { onMount, onDestroy, tick } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';

	let {
		useCase,
		id,
		isPlaying,
		onPlayPause
	}: {
		useCase: UseCases;
		id: string;
		isPlaying: boolean;
		onPlayPause: () => void;
	} = $props();
	let { useCaseImage, useCaseTitle, useCaseSubTitle } = $derived(useCase);

	let waveformContainer: HTMLDivElement;
	let waveSurfer: WaveSurfer | null = null;

	function resolveMp3Url(ref: string) {
		return `https://cdn.sanity.io/files/zhic6sia/production/${ref
			.replace('file-', '')
			.replace('-', '.')}`;
	}

	onMount(async () => {
		await tick();
		const canvas = document.createElement('canvas');
		canvas.width = 100;
		canvas.height = 1;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, '#6d28d9');
		gradient.addColorStop(0.3, '#8d78df');
		gradient.addColorStop(1, 'white');

		const ref = useCase.mp3File?.asset?._ref;
		if (ref && waveformContainer) {
			waveSurfer = WaveSurfer.create({
				container: waveformContainer,
				waveColor: gradient,
				progressColor: '#1d1869',
				height: 40,
				barWidth: 4,
				barRadius: 4,
				barGap: 4
			});
			waveSurfer.load(resolveMp3Url(ref));
		}
	});

	onDestroy(() => {
		if (waveSurfer) {
			waveSurfer.destroy();
		}
	});

	$effect(() => {
		if (!waveSurfer) return;
		if (isPlaying && !waveSurfer.isPlaying()) {
			waveSurfer.play();
		} else if (!isPlaying && waveSurfer.isPlaying()) {
			waveSurfer.pause();
		}
	});
</script>

<div class="h-[414px] w-[295px]">
	<div
		class="h-fit w-full rounded-[1.38rem] border-[0.342px] border-violet-600 bg-[linear-gradient(242deg,_rgba(255,_255,_255,_0.21)_0%,_rgba(255,_255,_255,_0.10)_100%)] px-4 pb-6 pt-4 backdrop-blur-sm"
	>
		<div class="flex h-full w-full flex-col">
			<div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
				<SanityImage
					class="h-full w-full rounded-[0.88rem]"
					innerClass="h-full w-full object-cover"
					sizes="9vw"
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

			<div class="mt-4 flex w-full items-center justify-center gap-3 px-2">
				<!-- Play/Pause Button -->
				<button
					onclick={onPlayPause}
					class="flex h-9 w-9 items-center justify-center rounded-full border border-violet-600 bg-violet-50 text-violet-600"
				>
					{#if isPlaying}
						<Pause class="h-4 w-4" />
					{:else}
						<Play class="h-4 w-4" />
					{/if}
				</button>

				<!-- Waveform -->
				<div bind:this={waveformContainer} class="w-[80%] max-w-[200px] overflow-hidden rounded-lg"></div>
			</div>
		</div>
	</div>
</div>
