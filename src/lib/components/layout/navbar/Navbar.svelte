<script lang="ts">
  import type { SanityImageWithAlt } from "../../../../types/common.types";
  import type { Nav } from "../../../../types/site.types";
  import DesktopNavbar from "./desktopNavbar/DesktopNavbar.svelte";
  import MobileNavbar from "./mobileNavbar/MobileNavbar.svelte";

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
    pathName: string;
  }
  let { nav, logo }: Props = $props();
</script>

<div>
  <div class="hidden lg:block">
    <DesktopNavbar {nav} {logo} />
  </div>
  <div class="lg:hidden">
    <MobileNavbar {nav} {logo} />
  </div>
</div>
