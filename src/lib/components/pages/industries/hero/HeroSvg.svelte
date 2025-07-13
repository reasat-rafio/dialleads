<script lang="ts">
 let { type }: { type: "play" | "pause" } = $props();
</script>

{#if type === "pause"}
  <!-- Pause Icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-pause text-[#8B5CF6]">
    <rect x="14" y="4" width="4" height="16" rx="1" />
    <rect x="6" y="4" width="4" height="16" rx="1" />
  </svg>
{:else if type === "play"}
  <!-- Play Icon -->
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVG">
      <path
        id="Vector"
        d="M12.7019 6.26776L4.17882 1.22898C3.48632 0.819773 2.42578 1.21687 2.42578 2.22899V12.3041C2.42578 13.2121 3.41126 13.7594 4.17882 13.3041L12.7019 8.26778C13.4622 7.81984 13.4646 6.71571 12.7019 6.26776Z"
        fill="#8B5CF6" />
    </g>
  </svg>
{/if}
