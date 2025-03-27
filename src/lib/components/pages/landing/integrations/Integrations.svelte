<script lang="ts">
	import { cn } from '$lib/utils';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { IntegrationsProps } from '../../../../../types/landing.types';
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import Autoplay from 'embla-carousel-autoplay';

	let { props }: { props: IntegrationsProps } = $props();
	let { integrations } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, description, ctaBtnIcon, ctaBtnText, brands } =
		$derived(integrations);

	let api = $state<CarouselAPI>();
</script>

<div class="mx-auto max-w-7xl px-5 xl:px-0">
	<div class={cn('mt-10 flex h-fit w-fit rounded-full', 'border border-gray-200 p-px md:mt-24')}>
		<div class={cn('flex w-fit items-center gap-2 rounded-full bg-transparent px-4 py-2')}>
			<SanityImage
				class="h-[1.125rem] w-[1.125rem]"
				src={sectionIcon}
				sizes="5vw"
				imageUrlBuilder={imgBuilder}
				alt="sectionIcon"
			/>
			<p class={cn('max-w-[269px] truncate text-nowrap text-[#495568]')}>
				{sectionName}
			</p>
		</div>
	</div>

	<div
		class="mt-6 flex flex-col justify-between gap-x-[30px] gap-y-7 lg:flex-row lg:justify-center"
	>
		<h2
			class={cn(
				'w-full flex-shrink-0 font-geist text-[1.625rem] font-semibold text-black',
				'font-geist text-[36px] font-semibold leading-[42px] tracking-[-1%]',
				'lg:max-w-[523px] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]'
			)}
		>
			{sectionTitle}
		</h2>

		<div class={cn('flex flex-col gap-6')}>
			<div
				class="font-geist text-[18px] font-normal leading-[150%] tracking-[0%] text-gray-600/80 lg:text-[24px]"
			>
				{description}
			</div>

			<Button
				class={`flex h-[3.25rem] w-fit items-center gap-3 rounded-[0.5rem] bg-primary-gradient px-8 py-4 text-white`}
			>
				<span class="font-geist text-[18px] font-normal leading-[18px] tracking-normal">
					{ctaBtnText}
				</span>
				<SanityImage
					class="h-fit w-fit"
					innerClass="object-contain w-6 h-6"
					src={ctaBtnIcon}
					sizes="5vw"
					imageUrlBuilder={imgBuilder}
					alt={'icon'}
				/>
			</Button>
		</div>
	</div>

	<div class="mt-[52px] lg:mt-14">
		<Carousel.Root
			opts={{
				align: 'start',
				loop: true,
				dragFree: true,
				watchDrag: false,
				duration: 8000
			}}
			plugins={[
				Autoplay({
					delay: 0
				})
			]}
			setApi={(emblaApi) => (api = emblaApi)}
			class="container w-full max-w-7xl px-0"
		>
			<Carousel.Content class="-ml-[43px] xl:-ml-[56px]">
				{#each brands as brand}
					<Carousel.Item
						class="flex basis-1/2 items-center justify-center pl-[43px] sm:basis-1/3 md:basis-1/4 xl:basis-1/6 xl:pl-[56px]"
					>
						<div class="relative flex h-[2.5rem] w-auto">
							<SanityImage
								class="h-full w-auto"
								innerClass="object-contain w-auto h-full"
								src={brand.brandImage}
								sizes={'(min-width:1024px) 12vw, 20vw'}
								imageUrlBuilder={imgBuilder}
								alt={brand?.brandImage.alt || 'brandlogo'}
							/>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>
