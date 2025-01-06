<script lang="ts">
  import '@fontsource/geist-sans';
  import '@fontsource/geist-sans/400.css';
  import '@fontsource/geist-sans/500.css';
  import '@fontsource/geist-sans/600.css';
  import '@fontsource/geist-sans/700.css';

  import '../app.css';
  let { children } = $props();
</script>

{@render children()}
