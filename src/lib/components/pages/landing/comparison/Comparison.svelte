<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import type { ComparisonProps } from '../../../../../types/landing.types';
	import AiAgentCard from './cards/AIAgentCard.svelte';
	import HumanAgentCard from './cards/HumanAgentCard.svelte';

	let { props }: { props: ComparisonProps } = $props();
	let { comparison } = $derived(props);
	let { comparisonCards, sectionName, sectionTitle, sectionIcon } = $derived(comparison);
</script>

<div class="mx-auto max-w-7xl px-5 xl:px-0">
	<SectionIconAndName
		sectionNameClass="text-[#495568]"
		sectionTitleClass="mx-auto font-geist text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-1%] lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px] sm:max-w-[48.375rem]"
		borderClass="border border-gray-200"
		{sectionIcon}
		{sectionName}
		{sectionTitle}
	/>
	<div
		class="grid w-fit grid-cols-1 justify-items-center gap-20 mt-[5.125rem] lg:mt-[7.125rem] mx-auto lg:grid-cols-2 lg:gap-10"
	>
		{#each comparisonCards as card}
			{#if card.cardType === 'AI Phone Agent'}
				<AiAgentCard {card} />
			{:else if card.cardType === 'Human Phone Agent'}
				<HumanAgentCard {card} />
			{/if}
		{/each}
	</div>
</div>
