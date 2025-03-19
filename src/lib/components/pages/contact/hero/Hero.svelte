<script lang="ts">
	import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { HeroProps } from '../../../../../types/contact.types';
	import VioletGradient from '../../landing/hero/VioletGradient.svelte';

	let { sectionIcon, sectionTitle, title, description }: HeroProps = $props();
</script>

<section
	class="relative bg-hero-gradient-mobile pb-[5.063rem] pt-[7.31rem] lg:mx-[0.63rem] lg:mt-[0.63rem] lg:rounded-[1.875rem] lg:pb-[10.625rem] lg:pt-[5.7rem]"
>
	<img
		src="/grid.png"
		alt="grid overlay"
		class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover mix-blend-overlay"
	/>

	<SectionIconAndName
		bgColor="background: linear-gradient(120deg, rgba(32, 30, 44, 1.0) 0%, rgba(53, 50, 63, 1.0) 100%);"
		wrapperClass="relative"
		borderClass="z-10 relative bg-primary-gradient bg-clip-padding"
		sectionNameClass="text-white text-[1.125rem] leading-[1.5rem] tracking-[0%] font-semibold"
		sectionTitleClass="text-white mb-[0.88rem] leading-tight"
		{sectionIcon}
		sectionName={sectionTitle}
	/>

	<div class="relative z-10 bg-transparent">
		<h1
			class="mx-auto mb-3 w-fit px-4 text-center font-geist text-[3rem] font-semibold leading-[115%] tracking-[-1px] text-white md:px-0 lg:text-[4.25rem] lg:font-bold lg:leading-[5.125rem] lg:tracking-[-1.4px]"
		>
			<PortableText
				value={title}
				components={{
					marks: { violetGradient: VioletGradient }
				}}
			/>
		</h1>
	</div>
	<p
		class="app-body-4 mx-auto mt-4 w-full max-w-[20.938rem] text-center font-normal text-[#DCDAE0] lg:mt-[0.75rem] lg:max-w-[39.188rem] lg:px-12 lg:text-[1.25rem] lg:leading-[150%] lg:tracking-[0%]"
	>
		{description}
	</p>
</section>
