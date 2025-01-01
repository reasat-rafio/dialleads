<script lang="ts">
  import type { SanityImageWithAlt } from "../../../../types/common.types";
  import type { Nav } from "../../../../types/site.types";

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
  }

  let { nav, logo }: Props = $props();
</script>

<div></div>
