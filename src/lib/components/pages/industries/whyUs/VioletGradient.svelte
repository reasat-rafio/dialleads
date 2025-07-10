<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<span
  class="w-full bg-[linear-gradient(75deg,_#731AFF_31%,_#731AFF_170%)] bg-clip-text font-geist text-[2.25rem] font-semibold leading-[2.625rem] tracking-[-1%] text-white/15 lg:text-[3rem] lg:leading-[115%] lg:tracking-[-1px]">
  {" "}
  {@render children()}
</span>
