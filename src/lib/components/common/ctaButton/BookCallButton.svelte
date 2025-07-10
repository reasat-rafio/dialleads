<script lang="ts">
  export let label: string;
  export let url: string;
  export let openInNewTab: boolean = true;
</script>

<a
  href={url}
  target={openInNewTab ? "_blank" : "_self"}
  rel={openInNewTab ? "noopener noreferrer" : undefined}
  class="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
  {label}
</a>
