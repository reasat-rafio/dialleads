<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import Autoplay from 'embla-carousel-autoplay';
	import type { ClientProps } from '../../../../../types/landing.types';
	import { PortableText } from '@portabletext/svelte';
	import ViolateGradient from './ViolateGradient.svelte';

	interface Props {
		props: ClientProps;
	}
	let { props }: Props = $props();

	let api = $state<CarouselAPI>();
</script>

<div class="mb-[2.5rem] mt-[1.88rem] px-5 lg:mt-[2.8rem]">
	<h3
		class="mb-8 text-center font-geist text-[18px] font-semibold leading-[24px] tracking-[0%] text-black md:text-[24px] md:tracking-[-0.7px]"
	>
		<PortableText
			value={props?.title}
			components={{
				marks: {
					violateGradient: ViolateGradient
				}
			}}
		/>
	</h3>

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
		<Carousel.Content class="-ml-8 xl:-ml-[76px]">
			{#each props.clients as client}
				<Carousel.Item
					class="flex basis-1/3 items-center justify-center pl-8 md:basis-1/4 xl:basis-1/4 xl:pl-[76px]"
				>
					<div class="relative flex h-[2.5rem] py-1 w-auto">
						<SanityImage
							class="w-auto h-full"
							innerClass="object-contain w-auto h-full"
							src={client.clientImage}
							sizes={'(min-width:1024px) 12vw, 20vw'}
							imageUrlBuilder={imgBuilder}
							alt={client?.clientImage?.alt || 'clientImg'}
						/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
