<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import type { WhyChooseUsProps } from '../../../../../types/landing.types';
	import Card from './Card.svelte';

	let { props }: { props: WhyChooseUsProps } = $props();
	let { whyChooseUs } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, cards } = $derived(whyChooseUs);
</script>

<div class="mx-auto max-w-[75rem] px-5 xl:px-0">
	<SectionIconAndName
		sectionNameClass="text-[#495568]"
		sectionTitleClass="font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]"
		borderClass="border border-gray-200"
		{sectionIcon}
		{sectionName}
		{sectionTitle}
	/>
	<div
		class="mt-8 grid grid-cols-1 gap-[0.75rem] md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-[1.88rem]"
	>
		{#each cards as card}
			<Card {card} />
		{/each}
	</div>
</div>
