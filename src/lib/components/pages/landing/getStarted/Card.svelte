<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { GetStartedCard } from '../../../../../types/landing.types';

	let { card }: { card: GetStartedCard; } = $props();

	const handleCTAClick = () => {
		goto(card?.ctaBtnURL ?? '/');
	};
</script>

<div class="flex h-full w-full flex-col rounded-[16px] border border-gray-200 p-[30px]">
	<div
		class="h-fit w-fit rounded-[6px] border border-violet-600 bg-violet-600/5 px-[14px] py-2 font-geist text-[20px] font-semibold leading-[100%] tracking-[-0.7px] text-primary"
	>
		{card?.stepText}
	</div>

	<div class="mt-9 h-full w-full space-y-2.5">
		<h3
			class="w-full font-geist text-[22px] font-semibold leading-[38px] tracking-[-1%] text-black lg:text-[24px] lg:leading-[auto]"
		>
			{card?.cardTitle}
		</h3>
		<p
			class="w-full font-geist text-[16px] font-normal leading-[150%] tracking-[0%] text-[#5B6779]/80"
		>
			{card?.cardDescription}
		</p>
	</div>

	<Button
		onclick={handleCTAClick}
		class={`mt-[30px] flex h-[52px] w-full items-center gap-3 rounded-[0.75rem] border border-violet-600 bg-transparent text-violet-600 transition-colors duration-0 hover:bg-primary-gradient hover:text-white group px-7 py-4`}
	>
		<SanityImage
			class="h-fit w-fit"
			innerClass="object-contain w-6 h-6 group-hover:brightness-[100]"
			src={card?.ctaBtnIcon}
			sizes="5vw"
			imageUrlBuilder={imgBuilder}
			alt={'icon'}
		/>
		<span class="font-geist text-[18px] font-normal leading-[18px] tracking-normal">
			{card.ctaBtnText}
		</span>
	</Button>
</div>
