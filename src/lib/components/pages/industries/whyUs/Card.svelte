<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { WhyUsCard } from '../../../../../types/industries.types';

	let { card }: { card: WhyUsCard; } = $props();
	let { cardImage, cardTitle, cardDescription, cta } = $derived(card);

	const handleCTAClick = (url?: string) => {
		goto(url ?? '/');
	};
</script>

<div class="flex h-full w-full flex-col rounded-[1rem] border border-[#e4e3e9] p-4 lg:p-[1.875rem]">
	<div class="h-[16rem] flex-none w-full overflow-hidden rounded-[0.875rem]">
		<SanityImage
			class="h-full w-full rounded-[0.875rem]"
			innerClass="h-full w-full object-cover"
			lqip
			src={cardImage}
			imageUrlBuilder={imgBuilder}
			alt={cardImage?.alt || 'image'}
		/>
	</div>

	<div class="mt-[1.875rem] h-full w-full space-y-4">
		<h4
			class="w-full font-geist text-[22px] font-semibold leading-[38px] tracking-[-1%] text-black lg:text-[24px] lg:leading-[auto]"
		>
			{cardTitle}
		</h4>
		<p
			class="w-full font-geist text-[16px] font-normal leading-[150%] tracking-[0%] text-[#5B6779]/80"
		>
			{cardDescription}
		</p>
	</div>

	<Button
		onclick={() => handleCTAClick(cta.type === 'internal' ? cta.internalLink : cta.externalLink)}
		class={`mt-8 flex h-[52px] w-full items-center gap-3 rounded-[0.75rem] border border-[#9F9FA3] bg-transparent text-black hover:bg-violet-600/10 transition-colors duration-200 ease-linear px-7 py-4`}
	>
		<SanityImage
			class="h-fit w-fit"
			innerClass="object-contain w-5 h-5"
			src={cta.icon}
			sizes="5vw"
			imageUrlBuilder={imgBuilder}
			alt={'icon'}
		/>
		<span class="font-geist text-[18px] font-normal leading-[18px] tracking-normal">
			{cta.title}
		</span>
	</Button>
</div>
