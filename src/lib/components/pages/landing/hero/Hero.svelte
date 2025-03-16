<script lang="ts">
	import { AnimatePresence, Motion } from 'svelte-motion';
	import { innerWidth } from 'svelte/reactivity/window';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import Video from './Video.svelte';
	import { X } from 'lucide-svelte';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';
	import type { Hero, HeroProps } from '../../../../../types/landing.types';

	let { props }: { props: HeroProps } = $props();
	let { hero }: { hero: Hero } = $derived(props);
	let isIntersecting = true;
	let windowWidth = $state(0);

	let isVideoOpen = $state(false);
	let isCloseHovered = $state(false);
	let isPlayHovered = $state(false);

	function openVideo() {
		isVideoOpen = true;
	}

	function closeVideo() {
		isVideoOpen = false;
	}

	let animationVariants = {
		'from-right': {
			initial: { x: 100, opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: 100, opacity: 0 }
		}
	};

	let selectedAnimation = animationVariants['from-right'];

	$effect(() => {
		if (innerWidth.current) {
			windowWidth = innerWidth.current;
		}
	});
</script>

<div
	class="relative bg-hero-gradient-mobile pt-[7.31rem] lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem] lg:bg-hero-gradient lg:pt-[5.7rem]"
>
	<img
		src="/grid.png"
		alt="grid overlay"
		class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover mix-blend-overlay"
	/>
	<SectionIconAndName
		bgColor="background: linear-gradient(120deg, rgba(32, 30, 44, 1.0) 0%, rgba(53, 50, 63, 1.0) 100%);"
		wrapperClass="relative"
		borderClass="z-10 relative"
		sectionNameClass="text-white app-title-3 !font-[500]"
		sectionTitleClass="text-white mb-[0.88rem] leading-tight"
		sectionIcon={hero?.sectionIcon}
		sectionName={hero?.sectionName}
	/>
	<div class="relative z-10 bg-transparent">
		<h1
			class="mx-auto mb-3 w-fit px-4 text-center font-geist text-[3rem] font-semibold leading-[115%] tracking-[-1px] text-white
	        md:px-0 lg:text-[4.25rem] lg:font-bold lg:leading-[5.125rem] lg:tracking-[-1.4px]"
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
		class="app-body-4 mx-auto mt-4 w-full max-w-[20.938rem] text-center font-normal text-[#DCDAE0] lg:mt-[0.75rem] lg:max-w-[39.188rem] lg:px-12 lg:text-[1.25rem] lg:leading-[150%] lg:tracking-[0%]"
	>
		{hero?.subtitle}
	</p>

	<!-- contact sales button -->
	<div class="mx-[0.94rem] mt-[3rem] flex justify-center lg:mt-[1.88rem]">
		<div
			class="z-[10] inline-flex w-full max-w-[14.420rem] animate-shine
      items-center justify-center rounded-xl border-[1px] border-l
      border-t border-white/30 border-b-white/15 border-r-white/15 bg-transparent bg-[linear-gradient(110deg,rgba(46,16,101,0.8)_50%,rgba(124,58,237,0.8)_55%,rgba(46,16,101,0.8))] bg-[length:200%_100%]
      px-2 py-2 text-sm shadow-xl backdrop-blur-[1px] transition-colors"
		>
			<Button
				class="flex h-[3.5rem] w-[13.5rem] 
          items-center rounded-lg bg-primary-gradient px-6 
          py-3 font-geist text-lg font-semibold text-white shadow-xl hover:shadow-xl focus:outline-none"
			>
				<!-- Icon (SanityImage) -->
				<SanityImage
					class="h-5 w-5"
					src={hero?.link?.icon}
					sizes="5vw"
					imageUrlBuilder={imgBuilder}
					alt={hero?.link?.icon?.alt || 'icon'}
				/>
				<!-- Button Text {hero?.link?.title} -->
				<span>{hero?.link?.title}</span>
			</Button>
		</div>
	</div>

	<div
		style=""
		class="relative mx-auto mt-[3.4rem] flex h-fit w-full max-w-[75rem] justify-center px-5 opacity-70 lg:h-full xl:px-0
		{windowWidth <= 320 ? 'mt-[5.95rem] h-fit' : 'h-fit'}"
	>
		<div class="relative w-full rounded-t-full">
			{#if windowWidth > 700}
				<SanityImage
					lqip
					innerClass="w-full object-cover"
					class="mx-auto h-full w-full rounded-t-full object-cover"
					src={hero?.thumbnailForDesktop}
					sizes="100vw"
					imageUrlBuilder={imgBuilder}
					alt={hero?.thumbnailForDesktop?.alt || 'tuhumbnail'}
				/>
			{:else}
				<SanityImage
					lqip
					innerClass="w-full object-cover"
					class="before:[blurred-img] mx-auto h-full w-full rounded-t-full object-cover"
					src={hero?.thumbnailForMobile}
					sizes="100vw"
					imageUrlBuilder={imgBuilder}
					alt={hero?.thumbnailForMobile?.alt || 'thumbnail'}
				/>
			{/if}

			<div
				class="absolute left-1/2 top-28 z-10 flex h-[4.375rem] w-[4.375rem] -translate-x-1/2 items-center justify-center rounded-full border border-violet-600 bg-white shadow-xl lg:top-1/2 lg:-translate-y-1/2"
			>
				<Button
					class="bg-transparent hover:bg-transparent"
					onmouseenter={() => (isPlayHovered = true)}
					onmouseleave={() => (isPlayHovered = false)}
					onclick={openVideo}
				>
					<SanityImage
						class="h-[1.6rem] w-[1.6rem]"
						src={hero?.videoPlayBtnIcon}
						imageUrlBuilder={imgBuilder}
						alt={hero?.videoPlayBtnIcon?.alt || 'icon'}
						style="transform: scale({isPlayHovered ? 1.1 : 1}); transition: transform 0.3s ease;"
					/>
				</Button>
			</div>
		</div>
	</div>

	<AnimatePresence let:item list={[{ key: isVideoOpen }]}>
		{#if item.key}
			<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} let:motion>
				<div
					use:motion
					class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
				>
					<!-- Modal Content -->
					<Motion
						initial={selectedAnimation.initial}
						animate={selectedAnimation.animate}
						exit={selectedAnimation.exit}
						transition={{ type: 'spring', damping: 30, stiffness: 300 }}
						let:motion
					>
						<div use:motion class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0">
							<Motion let:motion whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<button
									use:motion
									class="absolute -right-3 -top-3 z-[110] rounded-full bg-neutral-900/90 p-2 text-xl text-white ring-1 ring-violet-600 backdrop-blur-md"
									onclick={closeVideo}
									onmouseenter={() => (isCloseHovered = true)}
									onmouseleave={() => (isCloseHovered = false)}
								>
									<X class="size-4" />
								</button>
							</Motion>
							<Motion
								animate={{ scale: isCloseHovered ? 0.98 : 1 }}
								transition={{ duration: 0.2 }}
								let:motion
							>
								<div
									use:motion
									class="relative z-[100] flex h-auto w-full overflow-hidden rounded-2xl border-2 border-white"
								>
									<Video {isIntersecting} mov={hero?.video?.mov} webm={hero?.video?.webm} />
								</div>
							</Motion>
						</div>
					</Motion>
				</div>
			</Motion>
		{/if}
	</AnimatePresence>
</div>
