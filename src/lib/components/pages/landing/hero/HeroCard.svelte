<script lang="ts">
	import { Pause, Play } from 'lucide-svelte';
	import { Howl } from 'howler';
	import { onMount } from 'svelte';
	import type { UseCases } from '../../../../../types/landing.types';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';

	let { useCase }: { useCase: UseCases } = $props();
	let { useCaseImage, useCaseTitle, useCaseSubTitle, mp3File } = $derived(useCase);

	let sound: Howl;
	let isPlaying: boolean = $state(false);
	let duration: number = $state(0);
	let progress: number = $state(0);

	onMount(() => {
		if (!mp3File?.url) return;

		sound = new Howl({
			src: [mp3File.url],
			html5: true,
			onload: () => {
				duration = sound.duration();
			}
		});

		const updateProgress = () => {
			if (sound.playing()) {
				progress = sound.seek() as number;
				requestAnimationFrame(updateProgress);
			}
		};

		sound.on('play', () => {
			isPlaying = true;
			requestAnimationFrame(updateProgress);
		});

		sound.on('pause', () => (isPlaying = false));
		sound.on('end', () => {
			isPlaying = false;
			progress = 0;
		});

		return () => {
			sound?.unload();
		};
	});

	const togglePlay = () => {
		if (!sound) return;
		isPlaying ? sound.pause() : sound.play();
	};
</script>

<!-- Cards -->

<div class="h-[414px] w-[305px]">
	<div
		class="h-fit w-full rounded-[1.38rem] border-[0.342px] border-violet-600 bg-[linear-gradient(242deg,_rgba(255,_255,_255,_0.21)_0%,_rgba(255,_255,_255,_0.10)_100%)] px-4 pb-6 pt-4 backdrop-blur-sm"
	>
		<div class="flex h-full w-full flex-col">
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

			<h2
				class="font-Geist mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]"
			>
				{useCaseTitle}
			</h2>
			<h3 class="font-Geist text-center text-[0.875rem] font-light text-white lg:text-[1rem]">
				{useCaseSubTitle}
			</h3>

			<div class="mt-4 flex w-full items-center justify-center gap-3">
				<!-- Play/Pause Button -->
				<button
					onclick={togglePlay}
					class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-violet-600 bg-violet-50 text-violet-600 outline outline-[0.75px] outline-offset-[-0.75px] transition-colors duration-200 focus:outline-none"
				>
					{#if isPlaying}
						<Pause class="h-4 w-4" />
					{:else}
						<Play class="h-4 w-4" />
					{/if}
				</button>

				<div class="relative h-4 w-32 overflow-hidden rounded bg-white/10">
					<div
						class="absolute left-0 top-0 h-full bg-white transition-all duration-100"
						style="width: {duration > 0 ? (progress / duration) * 100 : 0}%"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
