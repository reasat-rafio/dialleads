<script lang="ts">
   let {children}: {children:any} = $props();  
</script>

<ul class="ml-10 list-disc space-y-2">
  {@render children()}
</ul>
