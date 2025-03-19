<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import type { HowtoGetStartedProps } from '../../../../../types/landing.types';
	import Card from './Card.svelte';

	let { props }: { props: HowtoGetStartedProps } = $props();
	let { getStarted } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, cards } = $derived(getStarted);
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
	<SectionIconAndName
		sectionNameClass="text-[#495568]"
		sectionTitleClass="font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]"
		borderClass="border border-gray-200"
		{sectionIcon}
		{sectionName}
		{sectionTitle}
	/>
	<div
		class="mt-8 grid grid-cols-1 justify-items-center gap-[1.25rem] md:grid-cols-2 xl:grid-cols-4"
	>
		{#each cards as card, idx}
			<Card {card} index={idx} />
		{/each}
	</div>
</div>
