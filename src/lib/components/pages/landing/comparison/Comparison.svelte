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
		sectionTitleClass="mx-auto font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px] sm:max-w-[774px]"
		borderClass="border border-gray-200"
		{sectionIcon}
		{sectionName}
		{sectionTitle}
	/>
	<div
		class="flex w-full flex-col items-center justify-center gap-20 mt-[82px] lg:mt-[114px] lg:mx-auto lg:flex-row lg:gap-10"
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
