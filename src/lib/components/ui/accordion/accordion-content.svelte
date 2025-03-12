<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		innerclass,
		...restProps
	}: WithoutChild<AccordionPrimitive.ContentProps> & { innerclass?: string; } = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
		className
	)}
	{...restProps}
>
	<div class={cn("pb-4 pt-0", innerclass)}>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
