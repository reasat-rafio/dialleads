<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { Hero, HeroProps } from '../../../../../types/landing.types';
	import Video from './Video.svelte';
	import { X } from 'lucide-svelte';
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';

	let { props }: { props: HeroProps } = $props();
	let { hero }: { hero: Hero } = $derived(props);
	let isIntersecting = true;
	let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
	class=" bg-hero-gradient relative pt-[7.31rem] lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem] lg:pt-[5.7rem]"
>
	<img
		src="/grid.png"
		alt="grid overlay"
		class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover mix-blend-overlay"
	/>
	<SectionIconAndName
		bgColor="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
		wrapperClass=" border-none  hidden lg:flex z-10 bg-transparent relative"
		sectionNameClass="text-white"
		sectionTitleClass="text-white   mb-[0.88rem] leading-tight"
		sectionIcon={hero?.sectionIcon}
		sectionName={hero?.sectionName}
	/>
	<div class="relative z-10 bg-transparent">
		<h1
			class=" font-geist mx-auto
    mb-3 w-fit px-12 text-center text-[2.25rem] font-bold leading-[2.7rem] text-[#FFF] md:px-0 lg:text-7xl"
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
		class="mx-auto mt-[1.12rem] w-[17.5625rem]
       text-center text-base font-normal text-white lg:mt-[0.75rem] lg:w-[40.3125rem] lg:text-[1.25rem]"
	>
		{hero?.subtitle}
	</p>
	<div class=" mx-[0.94rem] mt-[3rem] flex justify-center lg:mt-[1.88rem]">
		<div
			class="animate-shine z-50 inline-flex w-full max-w-[14.420rem]
      items-center justify-center rounded-xl border-[1px] border-l
      border-t border-white/30 border-b-white/15 border-r-white/15 bg-transparent bg-[linear-gradient(110deg,#2e1065,50%,#7C3AED,55%,#2e1065)]
      bg-[length:200%_100%] px-2 py-2 text-sm shadow-xl transition-colors"
		>
			<Button
				class="font-geist flex  h-[3.5rem] 
          w-[13.5rem] items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 
          px-6 py-3 text-lg font-semibold text-white shadow-xl hover:shadow-xl focus:outline-none
  "
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
		style="
    "
		class=" relative mx-auto mt-[3.4rem]
    flex h-fit w-full
    max-w-[75rem] justify-center px-5 opacity-70 lg:h-full xl:px-0
    {windowWidth <= 320 ? 'mt-[5.95rem] h-fit' : 'h-fit'}
    "
	>
		<div
			class="w-full rounded-tl-full rounded-tr-full bg-gradient-to-t from-violet-900 to-violet-100"
		>
			{#if windowWidth > 700}
				<SanityImage
					lqip
					innerClass=" w-full  object-cover"
					class="mx-auto  h-full w-full rounded-tl-full rounded-tr-full object-cover "
					src={hero?.thumbnailForDesktop}
					sizes="100vw"
					imageUrlBuilder={imgBuilder}
					alt={hero?.thumbnailForDesktop?.alt || 'tuhumbnail'}
				/>
			{:else}
				<SanityImage
					lqip
					class="mx-auto h-full w-full  rounded-tl-full rounded-tr-full  object-cover "
					src={hero?.thumbnailForMobile}
					sizes="100vw"
					imageUrlBuilder={imgBuilder}
					alt={hero?.thumbnailForMobile?.alt || 'thumbnail'}
				/>
			{/if}

			<div
				class="absolute left-1/2 top-28 flex h-[4.375rem]
      w-[4.375rem] -translate-x-1/2 items-center justify-center rounded-full border border-violet-600
      bg-white shadow-xl lg:top-1/2 lg:-translate-y-1/2"
			>
				<AlertDialog.Root>
					<AlertDialog.Trigger>
						<Button class="bg-white hover:bg-white">
							<SanityImage
								class="h-[1.6rem] w-[1.6rem]"
								src={hero?.videoPlayBtnIcon}
								imageUrlBuilder={imgBuilder}
								alt={hero?.videoPlayBtnIcon?.alt || 'icon'}
							/>
						</Button>
					</AlertDialog.Trigger>
					<AlertDialog.Content class=" flex justify-center lg:max-w-screen-2xl">
						<Video {isIntersecting} mov={hero?.video?.mov} webm={hero?.video?.webm} />

						<AlertDialog.Footer class="absolute right-4 top-4">
							<AlertDialog.Cancel class="border-none bg-none">
								<X size={24} />
							</AlertDialog.Cancel>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>
			</div>
		</div>
	</div>
</div>
