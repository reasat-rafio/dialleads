<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { ComparisonCard } from '../../../../../../types/landing.types';

	let { card }: { card: ComparisonCard } = $props();
</script>

<div
	class="relative h-fit w-full rounded-2xl border-2 border-violet-400
  bg-violet-700 sm:max-w-[29.5625rem] lg:h-full"
>
	<div class="absolute -top-[5.5rem] left-1/2 -translate-x-1/2 rounded-xl p-[0.62rem]">
		<SanityImage
			class="h-[9.3125rem] w-[9.317rem]"
			src={card?.icon}
			sizes="5vw"
			imageUrlBuilder={imgBuilder}
			alt={card?.icon?.alt || 'icon'}
		/>
	</div>
	<div>
		<h3
			class="mx-auto mt-[5.5rem] w-full px-8 text-center font-geist text-[1.5rem] font-semibold tracking-[-0.7px] text-white lg:px-[2.75rem] lg:text-[2.25rem] lg:leading-tight lg:tracking-[0%]"
		>
			{card?.cardTitle}
		</h3>
		<div>
			<div
				class="mb-[1.625rem] mt-[2.19rem] space-y-[1.12rem] pl-7 pr-2 lg:mb-[4.4375rem] lg:mt-[2.88rem] lg:pl-[2.75rem]"
			>
				{#each card?.features as feature}
					<div class="flex items-center gap-3">
						<SanityImage
							innerClass="h-6 lg:h-8 w-auto"
							class="h-fit w-auto"
							src={feature?.featureIcon}
							sizes="5vw"
							imageUrlBuilder={imgBuilder}
							alt={feature?.featureIcon?.alt || 'icon'}
						/>

						<p
							class="text-[1.125rem] font-normal leading-[1.75rem] text-[#FFF] lg:text-[1.25rem] lg:leading-[150%]"
						>
							{feature?.featureName}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
