<script lang="ts">
  import { renderStudio, defineConfig, type StudioProps } from "sanity";
  import { onMount } from "svelte";

  interface Props {
    config: StudioProps["config"];
  }

  let { config }: Props = $props();

  let studioEl = $state<HTMLDivElement>(null!);

  onMount(() => {
    if (studioEl) {
      const sanityConfig = defineConfig(config);

      renderStudio(studioEl, sanityConfig);
    }
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="robots" content="noindex" />
  <meta name="referrer" content="same-origin" />
</svelte:head>

<div id="svelte-studio">
  <div bind:this={studioEl}></div>
</div>

<style>
  #svelte-studio {
    height: 100vh;
  }

  #svelte-studio > div {
    height: 100%;
  }
</style>
