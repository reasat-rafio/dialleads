<!-- <script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Section } from '../../../types/privacyAndPolicy.types';
	import VioletGradient from '../pages/privacyAndPolicy/VioletGradient.svelte';
	import type { PortableTextBlock } from 'sanity';
	import ListItem from '$lib/components/common/rich-text/ListItem.svelte';
	import UnorderedListWrapper from '$lib/components/common/rich-text/UnorderedListWrapper.svelte';
	import { cn } from '$lib/utils';
	import CustomParagraph from '$lib/components/common/rich-text/CustomParagraph.svelte';
	import CustomHeading6 from '$lib/components/common/rich-text/CustomHeading6.svelte';
	import Strong from './rich-text/Strong.svelte';
	import OrderedListWrapper from './rich-text/OrderedListWrapper.svelte';

	interface Props {
		sections: Section[];
		title: PortableTextBlock[];
		_updatedAt: string;
		description: PortableTextBlock[];
	}

	let { sections, title, _updatedAt, description } = $props();

	// Convert _updatedAt to a formatted date
	const formattedDate = new Date(_updatedAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	$inspect(sections[2]);
</script>

<div class="container mx-auto mt-[7rem] px-5 lg:mt-[10rem] xl:px-28">
	<div>
		<h1 class=" text-center text-[1.625rem] font-bold text-black lg:text-[3.875rem]">
			<PortableText
				value={title}
				components={{
					marks: {
						violetGradient: VioletGradient
					}
				}}
			/>
		</h1>
		<h3 class="mb-4 mt-[2rem] text-[1.5625rem] font-bold text-black lg:mt-[5.38rem]">
			Last Updated: {formattedDate}
		</h3>
		<p class="text-xl font-medium text-[#525252]">
			<PortableText
				value={description}
				components={{
					marks: {
						strong: Strong
					}
				}}
			/>
		</p>
	</div>
	<div class="mt-[2.63rem]">
		{#each sections as section}
			<h3 class="mt-[2.63rem] text-[2rem] font-bold leading-tight text-black">
				{section?.sectionTitle}
			</h3>
			<div class="mt-4 space-y-4">
				{#each section?.content as item}
					<div class={cn('', '')}>
						<p class="text-xl font-medium text-[#525252]">
							<PortableText
								value={item}
								components={{
									list: {
										bullet: UnorderedListWrapper,
										number: OrderedListWrapper
									},
									listItem: {
										bullet: ListItem,
										number: ListItem
									},
									block: {
										normal: CustomParagraph,
										h6: CustomHeading6
									},
									marks: {
										strong: Strong
									}
								}}
							/>
						</p>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div> -->
