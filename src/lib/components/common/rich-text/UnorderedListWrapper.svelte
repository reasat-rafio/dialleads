<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<ul class="ml-10 list-disc space-y-2">
  {@render children()}
</ul>
