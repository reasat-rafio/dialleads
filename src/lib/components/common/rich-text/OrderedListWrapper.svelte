<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<ol class="ml-10 list-decimal space-y-2">
	{@render children()}
</ol>
