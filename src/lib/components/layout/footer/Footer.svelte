<script lang="ts">
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { SiteDataProps } from '../../../../types/site.types';

	let { footer }: { footer: SiteDataProps['footer'] } = $props();

</script>


<div class="relative flex w-full flex-col items-center pt-[56px] lg:pt-[120px]">
	<div
		class="mb-[1.5rem] flex w-full max-w-7xl flex-col justify-between px-5 lg:mb-10 lg:flex-row lg:items-center"
	>
		<div class="w-full max-w-[303px] sm:max-w-[384px]">
			<div class="flex items-center gap-[1rem]">
				<SanityImage
					class="h-auto w-[46px]"
					src={footer?.companyLogo}
					sizes="46px"
					imageUrlBuilder={imgBuilder}
				/>
				<h4 class="font-geist text-[30px] font-medium leading-[1] tracking-tight text-black">
					{footer?.companyName}
				</h4>
			</div>
			<h5 class="app-body-4 mb-[1.5rem] mt-[12px] text-gray-600/70">
				{footer?.supportingText}
			</h5>
		</div>

		<div class="flex w-fit flex-col gap-x-10 gap-y-2.5 lg:flex-row lg:flex-wrap xl:gap-x-[71px]">
			{#each footer?.browse as link}
				<a href={link.internalLink} class="app-title-3 text-nowrap text-black">
					{link?.title}
				</a>
			{/each}
		</div>
	</div>

	<div
		class="flex w-full max-w-7xl px-5"
	>
		<div class="w-full h-px bg-gray-200"></div>
	</div>

	<div
		class="flex w-full max-w-7xl flex-col gap-y-3 px-5 pb-[34px] pt-4 lg:flex-row lg:justify-between lg:py-5"
	>
		<span
			class="w-full font-geist text-[14px] font-[300] leading-[22.4px] text-black max-lg:pb-[2.5px] max-lg:pt-[4.5px]"
		>
			{footer?.copyRightText}
		</span>

		<div class="flex w-fit flex-col gap-x-[100px] gap-y-3 lg:flex-row xl:gap-x-[162px]">
			<div class="flex w-fit flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-[70px]">
				{#each footer?.subItems as subItem}
					<a
						href={subItem.internalLink}
						class="text-nowrap font-geist text-[14px] font-[300] leading-[22.4px] text-black"
					>
						{subItem?.title}
					</a>
				{/each}
			</div>

			<!-- socials -->
			<div class="flex w-fit items-center gap-x-3">
				{#each footer?.socials as social}
					<a href={social.externalLink} class="h-fit w-fit p-1">
						<SanityImage
							class="flex h-5 w-5 items-center justify-center"
							src={social.icon}
							sizes="20px"
							imageUrlBuilder={imgBuilder}
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
