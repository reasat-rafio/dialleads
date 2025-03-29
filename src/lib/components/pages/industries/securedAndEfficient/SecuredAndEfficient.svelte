<script lang="ts">
	import { cn } from '$lib/utils';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { SecuredAndEfficientProps } from '../../../../../types/industries.types';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';
	import AnimatedCounter from '$lib/components/common/AnimatedCounter.svelte';
	import { inview } from 'svelte-inview';
	import { page } from '$app/state';

	let { props }: { props: SecuredAndEfficientProps } = $props();
	let { securedAndEfficient } = $derived(props);
	let { sectionIcon, sectionName, sectionTitle, description, stats } =
		$derived(securedAndEfficient);

	const separateValue = (input: string) => {
		const match = input.match(/^(\d+(?:\.\d+)?)(.*)$/);
		if (match) {
			return {
				numeric: match[1],
				nonNumeric: match[2].trim()
			};
		}
		return { numeric: '', nonNumeric: '' };
	};

	let prevIndustry: string | undefined = $state(undefined);
	let elementvisible: boolean = $state(false);

	$effect(() => {
		const currentIndustry = page.params.industry;
		// if the industry param changes, reset elementvisible
		if (currentIndustry !== prevIndustry) {
			elementvisible = false;
			prevIndustry = currentIndustry;
		}
	});
</script>

<div class="mx-auto mb-[3.75rem] max-w-7xl px-5 2xl:px-0">
	<div
		class={cn(
			'mt-10 flex h-fit w-fit rounded-full',
			'border border-gray-200 p-px max-lg:mx-auto md:mt-24'
		)}
	>
		<div class={cn('flex w-fit items-center gap-2 rounded-full bg-transparent px-4 py-2')}>
			<SanityImage
				class="h-[1.125rem] w-[1.125rem]"
				src={sectionIcon}
				sizes="5vw"
				imageUrlBuilder={imgBuilder}
				alt="sectionIcon"
			/>
			<p class={cn('max-w-[269px] truncate text-nowrap text-[#495568]')}>
				{sectionName}
			</p>
		</div>
	</div>

	<div
		class="mt-6 flex flex-col gap-x-[2.5rem] gap-y-8 max-lg:items-center lg:flex-row lg:justify-between"
	>
		<div class="w-full max-w-[32.625rem]">
			<h2
				class={cn(
					'relative z-[0] w-full flex-shrink-0 font-geist text-black max-lg:text-center',
					'text-[2.25rem] font-semibold leading-[2.625rem] tracking-[-1%]',
					'lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]'
				)}
			>
				<PortableText
					value={sectionTitle}
					components={{
						marks: {
							violateGradient: VioletGradient
						}
					}}
				/>
			</h2>

			<div
				class="mt-3 font-geist text-[18px] font-normal leading-[150%] tracking-[0%] text-gray-600/80 max-lg:text-center"
			>
				{description}
			</div>
		</div>

		{#key page.params.industry}
			<div
				use:inview={{ threshold: 0.2, unobserveOnEnter: false, rootMargin: '80px 0px -80px 0px' }}
				oninview_enter={() => {
					elementvisible = true;
				}}
				class="flex w-full flex-col gap-[2.25rem] max-lg:mt-8 max-md:items-center md:flex-row md:justify-center"
			>
				{#each stats as stat (stat)}
					{@const valueWithText = separateValue(stat.value)}
					<div class="flex w-full max-w-[14.188rem] flex-col items-center gap-y-3">
						<h3
							class="flex items-center justify-center font-geist text-[3rem] font-semibold leading-[115%] tracking-[-0.063rem] text-black"
						>
							<AnimatedCounter
								values={Array.from({ length: parseFloat(valueWithText.numeric) + 1 }, (_, i) =>
									new String(i).padStart(valueWithText.numeric.length, '0')
								)}
								direction="up"
								ease="cubic-bezier(0.83, 0.4, 0.04, 1)"
								duration={1800}
								bind:startCounting={elementvisible}
							/>
							<span>{valueWithText.nonNumeric}</span>
						</h3>
						<p
							class="text-center font-geist text-[1.375rem] font-semibold leading-[140%] tracking-[-0.044rem] text-black"
						>
							{stat.description}
						</p>
					</div>
				{/each}
			</div>
		{/key}
	</div>
</div>
