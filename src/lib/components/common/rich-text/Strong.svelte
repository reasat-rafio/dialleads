<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="inline text-2xl font-bold text-black">
	<span>{@render children()}</span>
</div>
