<script lang="ts">
    // export let children;
    let {children}: {children:any} = $props();  
  </script>
  
  <div class="text-black text-2xl inline font-bold ">
    <span>{@render children()}</span>
  </div>
  