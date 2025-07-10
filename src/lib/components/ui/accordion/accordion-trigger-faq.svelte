<script lang="ts">
  import { Accordion as AccordionPrimitive, type WithoutChild } from "bits-ui";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import CircleMinus from "lucide-svelte/icons/circle-minus";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    level = 3,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.TriggerProps> & {
    level?: AccordionPrimitive.HeaderProps["level"];
  } = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    bind:ref
    class={cn(
      "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
      className,
    )}
    {...restProps}>
    {@render children?.()}
    <CirclePlus class="size-6 shrink-0 text-violet-500 group-data-[state=open]:hidden" />
    <CircleMinus class="hidden size-6 shrink-0 text-violet-500 group-data-[state=open]:block" />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
