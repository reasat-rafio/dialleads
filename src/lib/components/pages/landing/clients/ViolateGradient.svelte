<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<span class="form-0% bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] to-100% bg-clip-text text-transparent">
  {" "}
  {@render children()}
</span>
