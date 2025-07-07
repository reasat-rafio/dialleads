<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { Card } from '../../../../../types/landing.types';

	let { card }: { card: Card } = $props();
</script>

<div
	class="group h-full w-full max-w-none rounded-2xl border border-transparent p-[1.563rem] transition-colors duration-300 hover:border-violet-700"
>
	<SanityImage
		lqip
		class="h-12 w-12"
		src={card?.cardIcon}
		sizes="100vw"
		imageUrlBuilder={imgBuilder}
		alt={card?.cardIcon?.alt || 'icon'}
	/>

	<div class="mt-6 w-full space-y-2.5">
		<h3
			class="w-full font-geist text-[22px] leading-[38px] lg:text-[26px] font-semibold tracking-[-1%] text-black transition-colors duration-300 group-hover:text-[#16181c]"
		>
			{card?.cardTitle}
		</h3>
		<p
			class="w-full font-geist text-[#5B6779]/80 text-[18px] font-normal leading-[28px] tracking-[0%] transition-colors duration-300 group-hover:text-[#16181c]"
		>
			{card?.cardDescription}
		</p>
	</div>
</div>

