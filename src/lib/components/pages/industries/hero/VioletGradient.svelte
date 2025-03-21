<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span
	class="w-full bg-[linear-gradient(75deg,_#731AFF_31%,_#FCCEEE_170%)] bg-clip-text font-geist text-[48px] font-semibold leading-[115%] tracking-[-1px] text-white/15 lg:text-[68px] lg:font-bold lg:leading-[82px] lg:tracking-[-1.4px]"
>
	{' '}
	{@render children()}
</span>
