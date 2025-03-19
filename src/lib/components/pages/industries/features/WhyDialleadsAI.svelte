<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import type { WhyDialleadsAI, WhyDialleadsAIProps } from '../../../../../types/industries.types';
	import Card from './Card.svelte';

	let { props }: { props: WhyDialleadsAIProps } = $props();
	let { whyDialleadsAI }: { whyDialleadsAI: WhyDialleadsAI } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, cards } = $derived(whyDialleadsAI);
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
		class="mb-[2.5rem] mt-8 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:mb-[6.26rem] lg:mt-16 xl:grid-cols-4"
	>
		{#each cards as card}
			<Card {card} />
		{/each}
	</div>
</div>
