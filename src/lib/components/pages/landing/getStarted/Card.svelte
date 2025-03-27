<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { GetStartedCard } from '../../../../../types/landing.types';

	let { card }: { card: GetStartedCard } = $props();
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

	<a
		href={card?.ctaBtnURL ?? '/'}
		class={`group relative mt-[30px] flex h-[52px] w-full justify-center items-center gap-3 overflow-clip rounded-[0.75rem] border border-violet-600 bg-transparent px-7 py-4 text-violet-600 transition-all duration-200 ease-linear after:absolute after:inset-y-0 after:right-[100%] after:z-[-1] after:w-[150%] after:transition-all after:duration-300 after:ease-linear after:content-[''] after:[background-image:_linear-gradient(to_right,_rgba(113,48,214,1.0)_0%,_rgba(177,136,240,1.0)_70%,_rgba(177,136,240,0.0)_100%)] hover:bg-transparent hover:text-white hover:after:right-[-40%]`}
	>
		<SanityImage
			class="h-fit w-fit flex-none"
			innerClass="object-contain w-6 h-6 group-hover:brightness-[100]"
			src={card?.ctaBtnIcon}
			sizes="5vw"
			imageUrlBuilder={imgBuilder}
			alt={'icon'}
		/>
		<span
			class="w-fit max-w-full text-nowrap font-geist text-[18px] font-normal leading-[18px] tracking-normal"
		>
			{card.ctaBtnText}
		</span>
	</a>
</div>
