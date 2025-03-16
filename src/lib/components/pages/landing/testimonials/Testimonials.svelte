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
	let windowWidth = $state(0);
	let showDialog = $state(false);
	let gridGap = $state('0.75rem');
	let testimonials: TestimonialsProps['testimonials'] = $state([]);

	let { props }: Props = $props();

	function truncateText(text: string, maxWords: number) {
		const words = text.split(' ');
		if (words.length > maxWords) {
			return words.slice(0, maxWords).join(' ') + '...';
		}
		return text;
	}

	$effect(() => {
		if (innerWidth.current) {
			windowWidth = innerWidth.current;
		}
	});

	$effect(() => {
		if (windowWidth >= 768) {
			gridGap = '1.25rem';
		} else {
			gridGap = '0.75rem';
		}
	});

	$effect(() => {
		if (windowWidth < 640) {
			testimonials = props.testimonials.slice(0, 4);
			showDialog = false;
		} else if (windowWidth < 1024) {
			testimonials = props.testimonials.slice(0, 12);
			showDialog = true;
		} else if (windowWidth >= 1024) {
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
	<div
		class="mask-fade mt-8 h-fit max-h-[856px] w-full overflow-clip md:mt-[50px] md:max-h-[798px]"
	>
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
							<div class="break-inside-avoid rounded-[1rem] border bg-[#F9F9F9] p-4">
								<div class="flex gap-x-[0.5rem]">
									<div class="h-[3rem] w-[3rem] rounded-full">
										<SanityImage
											class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
											src={testimonial?.reviewerImage}
											sizes="05vw"
											imageUrlBuilder={imgBuilder}
											alt={testimonial?.reviewerImage?.alt || 'image'}
										/>
									</div>
									<div class="text-left">
										<h2 class="text-[16px] font-semibold leading-[120%]">{testimonial.name}</h2>

										<div class="flex items-center">
											<div class="pr-[0.38rem]">
												{#if !!testimonial.companyLogo}
													<SanityImage
														class="h-fit w-fit "
														src={testimonial.companyLogo}
														sizes="05vw"
														imageUrlBuilder={imgBuilder}
														alt="logo"
													/>
												{/if}
											</div>

											{#if testimonial.companyName.length > 12}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h2
															class="max-w-[130px] truncate text-[14px] font-light leading-[120%] text-[#737275]"
														>
															{testimonial.companyName}
														</h2>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white p-4 shadow-lg">
														<p class="text-[14px] font-light leading-[120%] text-[#737275]">
															{testimonial.companyName}
														</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h2 class="text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.companyName}
												</h2>
											{/if}
											<Dot class="text-[#737275]" />

											{#if testimonial.position.length > 12}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h2
															class="max-w-[90px] truncate text-[14px] font-light leading-[120%] text-[#737275] lg:max-w-[90px] xl:max-w-[110px]"
														>
															{testimonial.position}
														</h2>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg  bg-white p-4 shadow-lg">
														<p class="text-[14px] font-light leading-[120%] text-[#737275]">
															{testimonial.position}
														</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h2 class="text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.position}
												</h2>
											{/if}
										</div>
									</div>
								</div>
								<div
									class="pt-[1.25rem] text-left text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]"
								>
									<p>{testimonial.review}</p>
								</div>
							</div>
						</Dialog.Trigger>
						<Dialog.Content class="p-0">
							<!-- class="sm:max-w-[425px]" -->
							<div class="rounded-[1rem] border bg-[#F9F9F9] p-4 md:p-5">
								<div class="flex gap-x-[0.5rem]">
									<div class="h-[3rem] w-[3rem] rounded-full">
										<SanityImage
											class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
											src={testimonial?.reviewerImage}
											sizes="05vw"
											imageUrlBuilder={imgBuilder}
											alt={testimonial?.reviewerImage?.alt || 'image'}
										/>
									</div>
									<div class="">
										<h2 class="font-semibold">{testimonial.name}</h2>

										<div class="flex items-center">
											<div class="pr-[0.38rem]">
												{#if !!testimonial.companyLogo}
													<SanityImage
														class="h-fit w-fit "
														src={testimonial.companyLogo}
														sizes="05vw"
														imageUrlBuilder={imgBuilder}
														alt="logo"
													/>
												{/if}
											</div>

											{#if testimonial.companyName.length > 12}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h2 class="max-w-[130px] truncate text-[#737275]">
															{testimonial.companyName}
														</h2>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white p-4 shadow-lg">
														<p>{testimonial.companyName}</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h2 class="text-[#737275]">{testimonial.companyName}</h2>
											{/if}
											<Dot class="text-[#737275]" />

											{#if testimonial.position.length > 12}
												<HoverCard.Root>
													<HoverCard.Trigger>
														<h2 class="max-w-[90px] truncate text-[#737275] lg:max-w-[110px]">
															{testimonial.position}
														</h2>
													</HoverCard.Trigger>
													<HoverCard.Content class="rounded-lg bg-white p-4 shadow-lg">
														<p>{testimonial.position}</p>
													</HoverCard.Content>
												</HoverCard.Root>
											{:else}
												<h2 class="text-[#737275]">{testimonial.position}</h2>
											{/if}
										</div>
									</div>
								</div>
								<div class="pt-[1.25rem] text-[#737275]">
									<h3>{testimonial.review}</h3>
								</div>
							</div>
						</Dialog.Content>
					</Dialog.Root>
				{:else}
					<div class="relative rounded-[1rem] border border-b-0 bg-[#F9F9F9] p-4">
						<div class="flex gap-x-[0.5rem]">
							<div class="h-[3rem] w-[3rem] rounded-full">
								<SanityImage
									class="h-[3rem] w-[3rem] overflow-hidden rounded-full"
									src={testimonial?.reviewerImage}
									sizes="05vw"
									imageUrlBuilder={imgBuilder}
									alt={testimonial?.reviewerImage?.alt || 'image'}
								/>
							</div>
							<div class="text-left">
								<h2 class="text-[16px] font-semibold leading-[120%]">{testimonial.name}</h2>

								<div class="flex items-center">
									<div class="pr-[0.38rem]">
										{#if !!testimonial.companyLogo}
											<SanityImage
												class="h-fit w-fit "
												src={testimonial.companyLogo}
												sizes="05vw"
												imageUrlBuilder={imgBuilder}
												alt={testimonial?.companyLogo?.alt || 'logo'}
											/>
										{/if}
									</div>

									{#if testimonial.companyName.length > 12}
										<HoverCard.Root>
											<HoverCard.Trigger>
												<h2
													class="max-w-[80px] truncate text-[14px] font-light leading-[120%] text-[#737275] sm:max-w-[120px]"
												>
													{testimonial.companyName}
												</h2>
											</HoverCard.Trigger>
											<HoverCard.Content class="rounded-lg  bg-white p-4 shadow-lg">
												<p class="text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.companyName}
												</p>
											</HoverCard.Content>
										</HoverCard.Root>
									{:else}
										<h2 class="text-[14px] font-light leading-[120%] text-[#737275]">
											{testimonial.companyName}
										</h2>
									{/if}
									<Dot class="text-[#737275]" />

									{#if testimonial.position.length > 12}
										<HoverCard.Root>
											<HoverCard.Trigger>
												<h2
													class="max-w-[90px] truncate text-[14px] font-light leading-[120%] text-[#737275] lg:max-w-[110px]"
												>
													{testimonial.position}
												</h2>
											</HoverCard.Trigger>
											<HoverCard.Content class="rounded-lg  bg-white p-4 shadow-lg">
												<p class="text-[14px] font-light leading-[120%] text-[#737275]">
													{testimonial.position}
												</p>
											</HoverCard.Content>
										</HoverCard.Root>
									{:else}
										<h2 class="text-[14px] font-light leading-[120%] text-[#737275]">
											{testimonial.position}
										</h2>
									{/if}
								</div>
							</div>
						</div>

						<div
							class="pt-[1.25rem] text-left text-[14px] font-normal leading-[150%] text-[#737275] md:text-[16px]"
						>
							<p>{testimonial.review}</p>
						</div>
					</div>
				{/if}
			{/each}
		</Masonry>
	</div>
</div>
