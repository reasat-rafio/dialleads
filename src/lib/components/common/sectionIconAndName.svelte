<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { cn } from '$lib/utils';
	import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

	interface Props {
		sectionName?: string;
		sectionIcon?: SanityImageObject;
		borderClass?: string;
		wrapperClass?: string;
		sectionTitle?: string;
		sectionNameClass?: string;
		sectionTitleClass?: string;
		bgColor?: string;
	}

	let {
		sectionName,
		sectionIcon,
		borderClass,
		wrapperClass,
		sectionTitle,
		sectionTitleClass,
		sectionNameClass,
		bgColor
	}: Props = $props();
</script>

<div>
	<div class={cn('mx-auto mt-10 md:mt-24 flex w-fit h-fit bg-primary-gradient bg-clip-padding p-px rounded-full', borderClass)}>
		<div
			style={bgColor}
			class={cn(
				'flex w-fit items-center justify-center gap-2 rounded-full px-[0.89rem] py-2',
				wrapperClass
			)}
		>
			<SanityImage
				class="h-[1.125rem] w-[1.125rem]"
				src={sectionIcon || ''}
				sizes="5vw"
				imageUrlBuilder={imgBuilder}
				alt="sectionIcon"
			/>
			<p class={cn('max-w-[269px] truncate text-nowrap sm:max-w-none', sectionNameClass)}>
				{sectionName}
			</p>
		</div>
	</div>
	<h2
		class={cn(
			'mt-6 text-center font-geist text-[1.625rem] font-semibold text-black lg:text-5xl',
			sectionTitleClass
		)}
	>
		{sectionTitle}
	</h2>
</div>
