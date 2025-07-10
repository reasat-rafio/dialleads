<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<ol class="ml-10 list-decimal space-y-2">
  {@render children()}
</ol>
