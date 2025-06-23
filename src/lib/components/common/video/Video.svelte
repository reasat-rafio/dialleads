
<script lang="ts">
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import { Play } from 'lucide-svelte';
	import type { VideoProps } from '../../../../types/common.types';

	interface Props {
		props: VideoProps;
	}
	let { props }: Props = $props();
	let { mov, thumbnail, webm } = $derived(props);

	let isPlaying = $state(false);

	function playVideo() {
		isPlaying = true;
	}
</script>

<div class="flex w-full justify-center px-4 sm:px-6 lg:px-8 mb-8">
	<div
		class="relative aspect-[1281/732] w-full max-w-7xl overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[45px]"
	>
		{#if !isPlaying}
			<button
				onclick={playVideo}
				class="group relative block h-full w-full"
				aria-label="Play video"
			>
				<SanityImage
					src={thumbnail}
					imageUrlBuilder={imgBuilder}
					alt={thumbnail.alt || 'video thumbnail'}
					class="h-full w-full object-cover"
					sizes="9vw"
				/>
				<div class="absolute inset-0 flex items-center justify-center">
					<div
						class="flex size-12 items-center justify-center rounded-full border border-violet-500 bg-white/50 shadow-[0px_16px_35.3px_0px_rgba(76,29,149,0.25)] transition-transform group-hover:scale-110 sm:size-16 lg:size-20"
					>
						<Play
							class="h-6 w-6 fill-violet-600 text-violet-600 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
							style="margin-left: 4px;"
						/>
					</div>
				</div>
			</button>
		{:else}
			<video class="h-full w-full object-cover" controls autoPlay playsInline loop>
				<source src={mov} type="video/mp4; codecs=hvc1" />
				<source src={webm} type="video/webm" />
				<track kind="captions" src="" label="No captions" />
				Your browser does not support the video tag.
			</video>
		{/if}
	</div>
</div>
