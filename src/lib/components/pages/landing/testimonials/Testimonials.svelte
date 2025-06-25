<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { Dot } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { TestimonialsProps } from '../../../../../types/landing.types';
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import { innerWidth } from 'svelte/reactivity/window';
	import Masonry from '$lib/components/common/masonry.svelte';

	interface Props {
		props: TestimonialsProps;
	}
	let showDialog = $state(false);
	let gridGap = $state('0.75rem');
	let testimonials: TestimonialsProps['testimonials'] = $state([]);

	let { props }: Props = $props();

	// function truncateText(text: string, maxWords: number) {
	// 	const words = text.split(' ');
	// 	if (words.length > maxWords) {
	// 		return words.slice(0, maxWords).join(' ') + '...';
	// 	}
	// 	return text;
	// }

	$effect(() => {
		if (innerWidth.current && innerWidth.current >= 768) {
			gridGap = '1.25rem';
		} else {
			gridGap = '0.75rem';
		}
	});

	$effect(() => {
		if (innerWidth.current && innerWidth.current < 640) {
			testimonials = props.testimonials.slice(0, 6);
			showDialog = false;
		} else if (innerWidth.current && innerWidth.current < 1024) {
			testimonials = props.testimonials.slice(0, 12);
			showDialog = true;
		} else if (innerWidth.current && innerWidth.current >= 1024) {
			testimonials = props.testimonials.slice(0, 12);
			showDialog = true;
		}
	});
</script>

<div class="mx-auto max-w-7xl px-5 2xl:px-0">
	<SectionIconAndName
		sectionNameClass="text-[#495568]"
		sectionTitleClass="font-geist text-[36px] leading-[42px] font-semibold tracking-[-1%] lg:text-[48px] lg:leading-[115%] lg:tracking-[-1px]"
		borderClass="border border-gray-200"
		sectionIcon={props?.sectionIcon}
		sectionName={props?.sectionTitle}
		sectionTitle={props?.title}
	/>
	<div class="mt-8 h-fit w-full md:mt-[3.125rem]">
		<Masonry
			items={testimonials}
			bind:gridGap
			colWidth={`minmax(Min(20.938em, 100%), 1fr)`}
			stretchFirst={false}
			reset
		>
			{#each testimonials as testimonial}
				{#if showDialog}
					<Dialog.Root>
						<Dialog.Trigger>
							<div class="break-inside-avoid rounded-[1rem] border bg-[#F9F9F9] p-4 font-geist">
								<div class="flex gap-x-[0.5rem]">
									<div class="h-[3rem] w-[3rem] rounded-full">
										<SanityImage
											class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
											src={testimonial?.reviewerImage}
											sizes="5vw"
											imageUrlBuilder={imgBuilder}
											alt={testimonial?.reviewerImage?.alt || 'image'}
										/>
									</div>
									<div class="w-full text-left">
										<h3 class="w-full truncate font-geist text-[16px] font-semibold leading-[120%]">
											{testimonial.name}
										</h3>

										<div class="flex w-full items-center">
											{#if testimonial.companyName.length > 24}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h3
															class="max-w-[130px] truncate font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.companyName}
														</h3>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
														<p
															class="font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.companyName}
														</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h3 class="font-geist text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.companyName}
												</h3>
											{/if}
											<Dot class="text-[#737275]" />

											{#if testimonial.position.length > 24}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h3
															class="w-full truncate font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.position}
														</h3>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg  bg-white px-4 py-2.5 shadow-lg">
														<p
															class="font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.position}
														</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h3 class="font-geist text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.position}
												</h3>
											{/if}
										</div>
									</div>
								</div>
								<div
									class="pt-[1.25rem] text-left font-geist text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]"
								>
									<p>{testimonial.review}</p>
								</div>
							</div>
						</Dialog.Trigger>
						<Dialog.Content class="p-0">
							<!-- class="sm:max-w-[425px]" -->
							<div class="rounded-[1rem] border bg-[#F9F9F9] p-4 font-geist md:p-5">
								<div class="flex gap-x-[0.5rem]">
									<div class="h-[3rem] w-[3rem] rounded-full">
										<SanityImage
											class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
											src={testimonial?.reviewerImage}
											sizes="5vw"
											imageUrlBuilder={imgBuilder}
											alt={testimonial?.reviewerImage?.alt || 'image'}
										/>
									</div>
									<div class="w-full text-left">
										<h3 class="w-full truncate font-geist text-[16px] font-semibold leading-[120%]">
											{testimonial.name}
										</h3>

										<div class="flex w-full items-center">
											{#if testimonial.companyName.length > 24}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h3 class="max-w-[130px] truncate font-geist text-[#737275]">
															{testimonial.companyName}
														</h3>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
														<p>{testimonial.companyName}</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h3 class="font-geist text-[#737275]">{testimonial.companyName}</h3>
											{/if}
											<Dot class="text-[#737275]" />

											{#if testimonial.position.length > 24}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h3
															class="w-full truncate font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.position}
														</h3>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white px-4 py-2.5 shadow-lg">
														<p
															class="font-geist text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.position}
														</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h3 class="font-geist text-[#737275]">{testimonial.position}</h3>
											{/if}
										</div>
									</div>
								</div>
								<div class="pt-[1.25rem] font-geist text-[#737275]">
									<p>{testimonial.review}</p>
								</div>
							</div>
						</Dialog.Content>
					</Dialog.Root>
				{:else}
					<div class="relative rounded-[1rem] border border-b-0 bg-[#F9F9F9] p-4 font-geist">
						<div class="flex gap-x-[0.5rem]">
							<div class="h-[3rem] w-[3rem] rounded-full">
								<SanityImage
									class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
									src={testimonial?.reviewerImage}
									sizes="5vw"
									imageUrlBuilder={imgBuilder}
									alt={testimonial?.reviewerImage?.alt || 'image'}
								/>
							</div>
							<div class="w-full text-left">
								<h3 class="w-full truncate font-geist text-[16px] font-semibold leading-[120%]">
									{testimonial.name}
								</h3>

								<div class="flex w-full items-center">
									{#if testimonial.companyName.length > 16}
										<HoverCard.Root>
											<HoverCard.Trigger>
												<h3
													class="max-w-[80px] truncate font-geist text-[14px] font-light leading-[120%] text-[#737275] sm:max-w-[120px]"
												>
													{testimonial.companyName}
												</h3>
											</HoverCard.Trigger>
											<HoverCard.Content class="rounded-lg  bg-white px-4 py-2.5 shadow-lg">
												<p class="font-geist text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.companyName}
												</p>
											</HoverCard.Content>
										</HoverCard.Root>
									{:else}
										<h3
											class="text-nowrap font-geist text-[14px] font-light leading-[120%] text-[#737275]"
										>
											{testimonial.companyName}
										</h3>
									{/if}
									<Dot class="text-[#737275]" />

									{#if testimonial.position.length > 16}
										<HoverCard.Root>
											<HoverCard.Trigger>
												<h3
													class="w-full truncate font-geist text-[14px] font-light leading-[120%] text-[#737275]"
												>
													{testimonial.position}
												</h3>
											</HoverCard.Trigger>
											<HoverCard.Content class="rounded-lg  bg-white px-4 py-2.5 shadow-lg">
												<p class="font-geist text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.position}
												</p>
											</HoverCard.Content>
										</HoverCard.Root>
									{:else}
										<h3
											class="text-nowrap font-geist text-[14px] font-light leading-[120%] text-[#737275]"
										>
											{testimonial.position}
										</h3>
									{/if}
								</div>
							</div>
						</div>

						<div
							class="pt-[1.25rem] text-left font-geist text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]"
						>
							<p>{testimonial.review}</p>
						</div>
					</div>
				{/if}
			{/each}
		</Masonry>
	</div>
</div>
