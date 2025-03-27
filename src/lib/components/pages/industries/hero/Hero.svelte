<script lang="ts">
	import WaveSurfer from 'wavesurfer.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import Button from '$lib/components/ui/button/button.svelte';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';
	import type { Hero, HeroProps } from '../../../../../types/industries.types';
	import { onMount } from 'svelte';

	let { props }: { props: HeroProps } = $props();
	let { hero }: { hero: Hero } = $derived(props);
	let { agentCard } = $derived(hero);

	let playState = $state<boolean>(false);

	let waveSurferInstance: WaveSurfer; // Store WaveSurfer instance here

	// Initialize WaveSurfer instances on mount
	onMount(() => {
		const canvas = document.createElement('canvas');
		canvas.width = 100;
		canvas.height = 1; // Minimal height is enough
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.error('Unable to get 2D context for gradient.');
			return;
		}

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, '#6d28d9');
		gradient.addColorStop(0.3, '#8d78df');
		gradient.addColorStop(1, 'white');

		const waveformElement = document.getElementById(`waveform-herocard`) as HTMLElement;
		const mp3FileUrl = hero.agentCard.mp3File.asset.url;

		const waveSurfer = WaveSurfer.create({
			container: waveformElement,
			waveColor: gradient,
			progressColor: '#1d1869',
			height: 40,
			barWidth: 4,
			barRadius: 4,
			barGap: 4
		});
		waveSurfer.load(mp3FileUrl); // load the audio file
		waveSurferInstance = waveSurfer; // store the instance

		// Initialize play state for the player
		playState = false;

		// Listen for the finish event to reset the play button
		waveSurfer.on('finish', () => {
			playState = false;
		});

		return () => {
			waveSurferInstance.destroy();
		};
	});

	const togglePlay = () => {
		playState = !playState;
		waveSurferInstance?.playPause();
	};
</script>

<div class="relative mt-[0.3125rem] w-full px-[0.3125rem] lg:mt-[0.625rem] lg:px-[0.625rem]">
	<div
		class="relative rounded-[0.75rem] bg-hero-gradient-mobile lg:rounded-b-[1.5rem] lg:rounded-t-[1rem] lg:bg-hero-gradient-2"
	>
		<img
			src="/grid.png"
			alt="grid overlay"
			class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover mix-blend-overlay"
		/>

		<div
			class="mx-auto flex min-h-[49.375rem] w-full max-w-7xl flex-col gap-x-5 px-3 pb-[6.25rem] pt-[5.0625rem] sm:pt-[12.875rem] lg:flex-row lg:items-center lg:justify-between lg:px-5 2xl:px-0"
		>
			<div class="relative w-full max-w-[40.625rem] max-lg:mx-auto">
				<div class="relative z-10 w-full bg-transparent">
					<h1
						class="mb-3 block w-full overflow-hidden font-geist text-[3rem] font-semibold leading-[115%] tracking-[-1px] text-white max-lg:mx-auto max-lg:text-center lg:text-[4.25rem] lg:font-bold lg:leading-[5.125rem] lg:tracking-[-1.4px]"
					>
						<PortableText
							value={hero?.heroTitle}
							components={{
								marks: {
									violetGradient: VioletGradient
								}
							}}
						/>
					</h1>
				</div>
				<p
					class="app-body-4 mt-4 w-full max-w-[20.938rem] font-normal text-[#DCDAE0] max-lg:mx-auto max-lg:text-center lg:mt-[0.75rem] lg:max-w-[37.6875rem] lg:text-[1.25rem] lg:leading-[150%] lg:tracking-[0%]"
				>
					{hero?.subtitle}
				</p>

				<!-- contact sales button -->
				<div class="mt-[1.88rem] flex max-lg:justify-center">
					<div
						class="relative z-[10] inline-flex h-fit w-full max-w-[14.420rem] animate-shine
                    items-center justify-center rounded-xl border-[1px] border-l
      				border-t border-white/30 border-b-white/15 border-r-white/15 bg-transparent bg-[linear-gradient(110deg,rgba(46,16,101,0.8)_50%,rgba(124,58,237,0.8)_55%,rgba(46,16,101,0.8))] bg-[length:200%_100%]
      				px-2 py-2 text-sm shadow-xl backdrop-blur-[1px] transition-colors"
					>
						<Button
							href={hero.link.type === 'internal' ? hero.link.internalLink : hero.link.externalLink}
							class="flex h-[3.5rem] w-[13.5rem] items-center rounded-lg bg-primary-gradient px-6
          							py-3 font-geist text-lg font-semibold text-white shadow-xl transition-all duration-200 ease-linear 
									hover:shadow-xl hover:brightness-90 focus:outline-none"
						>
							<!-- Icon (SanityImage) -->
							{#if hero?.link?.icon}
								<SanityImage
									class="h-5 w-5"
									src={hero.link.icon}
									sizes="5vw"
									imageUrlBuilder={imgBuilder}
									alt={hero.link.icon.alt || 'icon'}
								/>
							{/if}
							<!-- Button Text {hero?.link?.title} -->
							<span>{hero?.link?.title}</span>
						</Button>
					</div>
				</div>
			</div>

			<!-- card -->
			<div
				class="flex w-full max-w-[20.3125rem] justify-center max-lg:mx-auto max-lg:mt-[1.875rem]"
			>
				<Card.Root
					style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.10) 100%);"
					class="h-fit w-full rounded-[1.38rem] border-[0.342px] border-violet-600 px-4 pb-6 pt-4 backdrop-blur-sm"
				>
					<div class="flex h-[22.25rem] w-full flex-col rounded-[0.88rem] md:h-[22.75rem]">
						<div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
							<SanityImage
								class="h-full w-full rounded-[0.88rem]"
								innerClass="h-full w-full object-cover"
								lqip
								src={agentCard?.cardImage}
								imageUrlBuilder={imgBuilder}
								alt={agentCard?.cardImage?.alt || 'agent image'}
							/>
						</div>

						<h2
							class="mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]"
						>
							{agentCard.cardTitle}
						</h2>
						<h3 class="text-center text-[0.875rem] font-[300] text-white lg:text-[1rem]">
							{agentCard.cardSubTitle}
						</h3>

						<!-- WaveSurfer Audio Player -->
						<div
							class="mt-[1.5rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden px-4"
						>
							<button
								type="button"
								class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
								onclick={togglePlay}
								aria-label="play-pause button"
							>
								{#if playState}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-pause text-[#8B5CF6]"
									>
										<rect x="14" y="4" width="4" height="16" rx="1" />
										<rect x="6" y="4" width="4" height="16" rx="1" />
									</svg>
								{:else}
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVG">
											<path
												id="Vector"
												d="M12.7019 6.26776L4.17882 1.22898C3.48632 0.819773 2.42578 1.21687 2.42578 2.22899V12.3041C2.42578 13.2121 3.41126 13.7594 4.17882 13.3041L12.7019 8.26778C13.4622 7.81984 13.4646 6.71571 12.7019 6.26776Z"
												fill="#8B5CF6"
											/>
										</g>
									</svg>
								{/if}
							</button>
							<div
								id={`waveform-herocard`}
								class="w-full max-w-[90%] overflow-hidden rounded-lg"
							></div>
						</div>
					</div>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
