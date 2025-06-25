
<script lang="ts">
  export let label: string;
  export let url: string;
  export let openInNewTab: boolean = true;
</script>

<a
  href={url}
  target={openInNewTab ? '_blank' : '_self'}
  rel={openInNewTab ? 'noopener noreferrer' : undefined}
  class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
>
  {label}
</a>
