<script lang="ts">
	import WaveSurfer from 'wavesurfer.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { UseCaseProps } from '../../../../../types/landing.types';
	import { onMount } from 'svelte';
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import { SectionIcon } from 'lucide-svelte';

	interface Props {
		props: UseCaseProps;
	}
	let { props }: Props = $props();

	let api = $state<CarouselAPI>();

	let windowWidth = $state(0);
	let count = $derived.by(() => {
		if (windowWidth < 640) {
			return api ? api.scrollSnapList().length : 0;
		} else if (windowWidth < 1024) {
			return api ? api.scrollSnapList().length : 0;
		} else if (windowWidth > 1024) {
			return api ? api.scrollSnapList().length : 0;
		}
		return api ? api.scrollSnapList().length : 0;
	});
	let current = $state(0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});

	let playStates = $state<boolean[]>([]);

	let waveforms = [];

	function resolveMp3Url(ref: any) {
		if (!ref) {
			console.error('The mp3File reference is undefined or invalid.');
			return '';
		}

		return `https://cdn.sanity.io/files/zhic6sia/production/${ref
			.replace('file-', '')
			.replace('-', '.')}`;
	}

	let waveSurferInstances: WaveSurfer[] = []; // Store WaveSurfer instances here

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

		props.useCases.forEach((useCase: any, i: any) => {
			const waveformElement: any = document.getElementById(`waveform-${i}`);
			const mp3FileUrl = resolveMp3Url(useCase.mp3File.asset._ref); // Resolve URL

			const waveSurfer = WaveSurfer.create({
				container: waveformElement,
				waveColor: gradient,
				progressColor: '#1d1869',
				height: 40,
				barWidth: 4,
				barRadius: 4,
				barGap: 4
			});
			waveSurfer.load(mp3FileUrl); // Dynamically load the audio file
			waveSurferInstances[i] = waveSurfer; // Store the instance

			// Initialize play state for each player
			playStates[i] = false;

			// Listen for the finish event to reset the play button
			waveSurfer.on('finish', () => {
				playStates[i] = false;
			});
		});

		return () => {
			waveSurferInstances.forEach((waveSurfer) => waveSurfer.destroy());
		};
	});

	function togglePlay(index: number) {
		playStates[index] = !playStates[index];
		waveSurferInstances[index]?.playPause();

		// Pause all other players
		playStates.forEach((_, i) => {
			if (i !== index && waveSurferInstances[i]?.isPlaying()) {
				waveSurferInstances[i]?.pause();
				playStates[i] = false;
			}
		});
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="relative mt-[2.5rem] h-full w-full px-[0.31rem] md:px-5 lg:mt-[5.06rem]">
	<div class="h-full w-full rounded-[1.88rem] bg-real-world-gradient pt-[3rem] lg:pt-[5.13rem]">
		<img
			src="/grid.png"
			alt="grid overlay"
			class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60 mix-blend-overlay lg:opacity-100"
		/>

		<div
			class="relative z-50 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5"
		>
			<div class="relative">
				<SectionIconAndName
					bgColor="background: linear-gradient(to right, rgba(113,48,214,1.0) 0%, rgba(177,136,240,1.0) 100%);"
					wrapperClass="md:mt-0 border-none w-fit h-full"
					borderClass="mt-0 md:mt-0 border-0"
					sectionNameClass="text-white"
					sectionTitleClass="font-geist text-white text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]"
					sectionIcon={props?.sectionIcon}
					sectionName={props?.sectionTitle}
					sectionTitle={props?.title}
				/>
			</div>

			<p
				class="mb-8 mt-3 max-w-[850px] px-10 text-center text-[1rem] font-normal text-white lg:mb-[3.13rem] lg:px-0 lg:text-[1.125rem]"
			>
				{props.description}
			</p>

			<div class="mx-auto w-full">
				<Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full max-w-none">
					<Carousel.Content class="-ml-2 w-full lg:-ml-3">
						{#each props.useCases as useCase, index}
							<Carousel.Item
								class="flex justify-center w-full basis-auto bg-transparent pl-4 max-lg:max-w-[305px] lg:basis-1/3 lg:pl-5 xl:basis-1/4"
							>
								<Card.Root
									style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.10) 100%);"
									class="w-full rounded-[1.38rem] border-[0.342px] border-violet-600 px-4 pb-6 pt-4 backdrop-blur-sm lg:max-w-[305px]"
								>
									<div
										class="flex h-[24rem] w-full flex-col rounded-[0.88rem] sm:h-[22.4rem] md:h-[24.4rem] lg:h-[24.8rem] xl:h-[25rem]"
									>
										<div class="h-[14.188rem] w-full overflow-hidden rounded-[0.88rem]">
											<SanityImage
												class="h-full w-full rounded-[0.88rem]"
												innerClass="h-full w-full object-cover"
												lqip
												src={useCase?.useCaseImage}
												imageUrlBuilder={imgBuilder}
												alt={useCase?.useCaseImage?.alt || 'image'}
											/>
										</div>

										<h3
											class="mt-[1.38rem] text-center text-[1.125rem] font-semibold text-white lg:text-[1.375rem]"
										>
											{useCase.useCaseTitle}
										</h3>
										<h3 class="text-center text-[0.875rem] font-[300] text-white lg:text-[1rem]">
											{useCase.useCaseSubTitle}
										</h3>

										<!-- WaveSurfer Audio Player -->
										<div
											class="mt-[1.5rem] flex h-[2.4375rem] items-center gap-x-[0.5rem] overflow-hidden px-4"
										>
											<button
												class="flex min-h-[2.124rem] min-w-[2.124rem] items-center justify-center rounded-full border border-[#6d28d9] bg-[#EDE9FE] text-white"
												onclick={() => togglePlay(index)}
											>
												{#if playStates[index]}
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
												id={`waveform-${index}`}
												class="w-full max-w-[90%] overflow-hidden rounded-lg"
											></div>
										</div>
									</div>
								</Card.Root>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
				</Carousel.Root>

				<div class="z-50 flex justify-center gap-x-2 py-[3.12rem]">
					{#each Array(count) as _, i}
						{#if i === current - 1}
							<div class="z-50 h-3 w-12 rounded-full bg-[#8B5CF6]"></div>
						{/if}
						{#if i < count - 1}
							<div class="z-50 h-3 w-3 rounded-full bg-[#ad90f0]"></div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
