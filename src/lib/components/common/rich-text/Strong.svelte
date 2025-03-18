<script lang="ts">
	// export let children;
	let { children }: { children: any } = $props();
</script>

<div class="inline text-2xl font-bold text-black">
	<span>{@render children()}</span>
</div>
