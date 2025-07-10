<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { ContactFormProps } from '../../../../../types/contact.types';

	let { contactPageImage, description, title }: ContactFormProps = $props();
</script>

<section class="relative mx-auto mt-[2.5rem] w-full max-w-7xl px-5 lg:mt-[5rem] 2xl:px-0">
	<div class="grid grid-cols-2 md:gap-x-[1.875rem]">
		<SanityImage
			class="mt-16 hidden overflow-hidden rounded-2xl md:block"
			lqip
			sizes="50vw"
			imageUrlBuilder={imgBuilder}
			src={contactPageImage}
			alt={contactPageImage.alt}
		/>

		<div class="col-span-2 space-y-1 md:col-span-1">
			<h2 class="app-title-1">{title}</h2>
			<p class="app-body-3">{description}</p>
			<div class="mx-auto mt-6 h-[744px] w-full overflow-hidden rounded-2xl md:w-[572px]">
				<iframe
					src="https://api.leadconnectorhq.com/widget/booking/ApgFKhpDXGU0goWaQFMp"
					class="h-full w-full"
					style="border:none;overflow: hidden;"
					scrolling="no"
					id="ApgFKhpDXGU0goWaQFMp_1751900196727"
					title="Book a call"
				></iframe>
			</div>
		</div>
	</div>
</section>

<svelte:head>
	<script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
</svelte:head>
