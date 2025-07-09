<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { WhyUsCard } from '../../../../../types/industries.types';
	import type { Link } from '../../../../../types/common.types';

	let { card, cta }: { card: WhyUsCard; cta: Link } = $props();
	let { cardImage, cardTitle, cardDescription } = $derived(card);
</script>

<div class="flex h-full w-full flex-col rounded-[1rem] border border-[#e4e3e9] p-4 lg:p-[1.875rem]">
	<div class="h-[16rem] w-full flex-none overflow-hidden rounded-[0.875rem]">
		{#key cardImage}
			<SanityImage
				class="h-full w-full rounded-[0.875rem]"
				innerClass="h-full w-full object-cover"
				lqip
				src={cardImage}
				imageUrlBuilder={imgBuilder}
				sizes="100vw"
				alt={cardImage?.alt || 'image'}
			/>
		{/key}
	</div>

	<div class="mt-[1.875rem] h-full w-full space-y-4">
		<h3
			class="w-full font-geist text-[22px] font-semibold leading-[38px] tracking-[-1%] text-black lg:text-[24px] lg:leading-[auto]"
		>
			{cardTitle}
		</h3>
		<p
			class="w-full font-geist text-[16px] font-normal leading-[150%] tracking-[0%] text-[#5B6779]/80"
		>
			{cardDescription}
		</p>
	</div>

	{#if cta && cta.icon && cta.title}
		<a
			href={cta.type === 'internal' ? cta.internalLink : cta.externalLink}
			class={buttonVariants({
				className: `group relative mt-8 flex h-[52px] w-full items-center gap-3 overflow-clip rounded-[0.75rem] border border-[#9F9FA3] bg-transparent px-7 py-4 text-black transition-all duration-200 ease-linear after:absolute after:inset-y-0 after:right-[100%] after:z-[-1] after:w-[150%] after:transition-all after:duration-300 after:ease-linear after:content-[''] after:[background-image:_linear-gradient(to_right,_rgba(113,48,214,1.0)_0%,_rgba(177,136,240,1.0)_70%,_rgba(177,136,240,0.0)_100%)] hover:bg-transparent hover:text-white hover:after:right-[-40%]`
			})}
		>
			<SanityImage
				class="h-fit w-fit"
				innerClass="object-contain w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
				src={cta.icon}
				sizes="5vw"
				imageUrlBuilder={imgBuilder}
				alt={'icon'}
			/>
			<span class="font-geist text-[18px] font-normal leading-[18px] tracking-normal">
				{cta.title}
			</span>
		</a>
	{:else}
		
		<div class="mt-8 text-sm italic text-gray-400">
			Missing CTA information — please check CMS data.
		</div>
	{/if}
</div>
