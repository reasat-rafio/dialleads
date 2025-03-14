<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { IndustriesProps } from '../../../../../types/landing.types';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { props }: { props: IndustriesProps } = $props();
	let { useCaseIcon, industries } = $derived(props);

	let currentIndustry: number = $state(0);

	const handleButtonClick = (industryno: number) => {
		currentIndustry = industryno;
	};
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
	<SectionIconAndName
		sectionNameClass="text-[#495568]"
		sectionTitleClass="font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]"
		borderClass="border border-gray-200"
		sectionIcon={props.sectionIcon}
		sectionName={props.sectionTitle}
		sectionTitle={props.title}
	/>

	<div
		class="mt-8 flex w-full flex-col justify-between lg:mt-16 lg:flex-row lg:gap-[3.125rem] xl:gap-[4.375rem]"
	>
		<div class="flex w-full lg:w-fit">
			<Carousel.Root class="w-full lg:hidden">
				<Carousel.Content class="-ml-4 w-full">
					{#each industries as industry, idx}
						<Carousel.Item class="flex basis-auto items-center pl-4">
							<button
								onclick={() => handleButtonClick(idx)}
								class={`relative flex h-[3rem] w-[13.625rem] flex-none items-center gap-4 rounded-[4.125rem] border border-primary p-2 pr-8 ${currentIndustry === idx ? 'bg-primary' : 'bg-transparent'} transition-colors duration-100`}
							>
								{#if currentIndustry === idx}
									<SanityImage
										class="h-fit w-fit flex-none"
										innerClass="object-contain w-8 h-8"
										src={industry.buttonIcon2}
										sizes="30vw"
										imageUrlBuilder={imgBuilder}
										alt={'icon'}
									/>
								{:else}
									<SanityImage
										class="h-fit w-fit flex-none"
										innerClass="object-contain w-8 h-8"
										src={industry.buttonIcon}
										sizes="30vw"
										imageUrlBuilder={imgBuilder}
										alt={'icon'}
									/>
								{/if}
								
								<p
									class={`text-nowrap text-[1.25rem] font-medium leading-[100%] ${currentIndustry === idx ? 'text-white' : 'text-primary'}`}
								>
									{industry.title}
								</p>
							</button>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>

			<div class="hidden w-fit flex-col gap-5 lg:flex">
				{#each industries as industry, idx}
					<button
						onclick={() => handleButtonClick(idx)}
						class={`relative flex h-[3rem] w-[13.625rem] items-center gap-4 rounded-[4.125rem] border border-primary p-2 ${currentIndustry === idx ? 'bg-primary' : 'bg-transparent'}`}
					>
						{#if currentIndustry === idx}
							<SanityImage
								class="h-fit w-fit flex-none"
								innerClass="object-contain w-8 h-8"
								src={industry.buttonIcon2}
								sizes="30vw"
								imageUrlBuilder={imgBuilder}
								alt={'icon'}
							/>
						{:else}
							<SanityImage
								class="h-fit w-fit flex-none"
								innerClass="object-contain w-8 h-8"
								src={industry.buttonIcon}
								sizes="30vw"
								imageUrlBuilder={imgBuilder}
								alt={'icon'}
							/>
						{/if}

						<p
							class={`text-[1.25rem] font-medium leading-[100%] ${currentIndustry === idx ? 'text-white' : 'text-primary'}`}
						>
							{industry.title}
						</p>
					</button>
				{/each}
			</div>
		</div>

		{#each industries as industry, idx (`industry${idx}`)}
			{#if currentIndustry === idx}
				<div class="mt-8 flex justify-center gap-[3.125rem] lg:mt-0 xl:gap-[4.375rem]">
					<div class="flex w-full max-w-[32rem] flex-col">
						<h4
							class="w-full text-[1.125rem] leading-7 text-black lg:text-[1.25rem] lg:leading-[150%]"
						>
							{industry.description}
						</h4>

						<div class="mt-6 flex w-full flex-col gap-y-5 lg:mt-[2.625rem]">
							{#each industry.useCases as iuseCase}
								<div class="flex w-full gap-4">
									<SanityImage
										class="h-fit w-fit flex-none"
										innerClass="object-contain w-8 h-8"
										src={useCaseIcon}
										sizes="30vw"
										imageUrlBuilder={imgBuilder}
										alt={'icon'}
									/>

									<div class="flex w-full flex-col gap-2">
										<h3
											class="text-[1.125rem] font-semibold leading-6 text-black lg:text-[1.5rem] lg:tracking-[-0.7px]"
										>
											{iuseCase.title}
										</h3>
										<p
											class="text-[1rem] leading-[150%] text-[#737275] lg:text-[1.125rem] lg:leading-7"
										>
											{iuseCase.description}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div class="hidden h-fit max-h-[25rem] w-[23.25rem] lg:block">
						<SanityImage
							class="h-fit w-full"
							innerClass="object-cover w-full h-auto"
							src={industry.useCaseImage}
							sizes={'(min-width:1024px) 12vw, 20vw'}
							imageUrlBuilder={imgBuilder}
							alt={'usecase image'}
						/>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
