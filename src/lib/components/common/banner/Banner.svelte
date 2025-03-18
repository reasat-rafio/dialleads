<script lang="ts">
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import { PortableText } from '@portabletext/svelte';
	import VioletGradient from './VioletGradient.svelte';
	import type { BannerProps } from '../../../../types/common.types';

	interface Props {
		props: BannerProps;
	}

	let { props }: Props = $props();
	let { banner } = $derived(props);
	let { title: bannertitle, cta } = $derived(banner);
</script>

<div class="relative mx-auto mt-[2.5rem] w-full max-w-7xl px-5 lg:mt-[5rem] 2xl:px-0">
	<div
		class="relative w-full rounded-[1.88rem] bg-real-world-gradient px-12 py-12 lg:px-[5.5rem] lg:py-[3.75rem]"
	>
		<img
			src="/grid.png"
			alt="grid overlay"
			class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60 mix-blend-overlay lg:opacity-100"
		/>

		<div class="relative z-50 flex w-full flex-col items-center justify-center">
			<div class="relative">
				<h1
					class="mx-auto w-fit text-center text-[36px] font-semibold leading-tight tracking-[0%] text-white
				    lg:font-geist lg:text-[60px] lg:font-bold lg:leading-[122%] lg:tracking-[-1%]"
				>
					<PortableText
						value={bannertitle}
						components={{
							marks: {
								violateGradient: VioletGradient
							}
						}}
					/>
				</h1>
			</div>

			<a
				href={cta.type === 'internal' ? cta.internalLink : cta.externalLink}
				class={`mt-8 flex h-[3.25rem] w-full max-w-[14.563rem] items-center justify-center gap-3 rounded-[0.5rem] bg-primary-gradient px-7 py-4 text-white`}
			>
				<SanityImage
					class="h-fit w-fit"
					innerClass="object-contain w-5 h-5"
					src={cta.icon}
					sizes="5vw"
					imageUrlBuilder={imgBuilder}
					alt={'icon'}
				/>
				<span class="text-[18px] font-normal leading-[18px] tracking-normal lg:leading-[24px]">
					{cta.title}
				</span>
			</a>
		</div>
	</div>
</div>
