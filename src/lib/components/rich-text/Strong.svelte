<script lang="ts">
    // export let children;
    let {children}: {children:any} = $props();
    $inspect("list item content: ", children);
  
  </script>
  
  <div class="text-green-400">
    {@render children()}
  </div>
  