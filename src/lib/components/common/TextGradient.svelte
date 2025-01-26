<script lang="ts">

  let {gradientClass, children} = $props();
</script>

<span class={`bg-clip-text text-transparent ${gradientClass}`}>
  {@render children()}
</span>
