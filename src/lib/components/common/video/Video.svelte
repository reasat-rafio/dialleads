<script lang="ts">
	import type { VideoProps } from '../../../../types/common.types';

	interface Props {
		props: VideoProps;
	}
	let { props }: Props = $props();
	let { mov, thumbnail, webm } = $derived(props);
</script>

Video section is here