<script lang="ts">
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';
	import type { WhyUsProps } from '../../../../../types/industries.types';
	import Card from './Card.svelte';
	import { cn } from '$lib/utils';

	let { props }: { props: WhyUsProps } = $props();
	let { whyUs } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, description, cards } = $derived(whyUs);
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
	<div
		class={cn(
			'mt-10 flex h-fit w-fit rounded-full',
			'mx-auto border border-gray-200 p-px md:mt-24'
		)}
	>
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
	<div class="mx-auto mt-4 w-full">
		<h2
			class={cn(
				'relative z-[0] w-full flex-shrink-0 text-center font-geist text-black',
				'text-[2.25rem] font-semibold leading-[2.625rem] tracking-[-1%]',
				'lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]'
			)}
		>
			<PortableText
				value={sectionTitle}
				components={{
					marks: {
						violateGradient: VioletGradient
					}
				}}
			/>
		</h2>

		<div
			class="mx-auto mt-4 max-w-[43.313rem] text-center text-balance font-geist text-[1.125rem] font-normal leading-7 tracking-[0%] text-gray-600/80 lg:text-[1.25rem] lg:leading-[150%]"
		>
			{description}
		</div>
	</div>
	<div
		class="mt-8 grid grid-cols-1 justify-items-center gap-[1.25rem] md:grid-cols-2 lg:mt-16"
	>
		{#each cards as card}
			<Card {card} />
		{/each}
	</div>
</div>
