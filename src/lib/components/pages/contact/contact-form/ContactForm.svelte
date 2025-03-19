<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { ContactFormProps } from '../../../../../types/contact.types';

	let { contactPageImage, description, title }: ContactFormProps = $props();
</script>

<section class="relative mx-auto mt-[2.5rem] w-full max-w-7xl px-5 lg:mt-[5rem] 2xl:px-0">
	<div class="grid grid-cols-2 md:gap-x-[1.875rem]">
		<SanityImage
			class="hidden overflow-hidden rounded-2xl md:block"
			lqip
			sizes="50vw"
			imageUrlBuilder={imgBuilder}
			src={contactPageImage}
			alt={contactPageImage.alt}
		/>

		<div class="col-span-2 space-y-1 md:col-span-1">
			<h2 class="app-title-1">{title}</h2>
			<p class="app-body-2">{description}</p>
			<div></div>
		</div>
	</div>
</section>
