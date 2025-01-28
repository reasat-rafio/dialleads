<script lang="ts">
  import type { SanityImageWithAlt } from '../../../types/common.types';
  import type { Nav } from '../../../types/site.types';

  import { cn } from '$lib/utils';
  import DesktopNavbar from './desktopNavbar/DesktopNavbar.svelte';
  import MobileNavbar from './mobileNavbar/MobileNavbar.svelte';

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
    pathName: string;
    industries: {
      title: string;
      slug: {
        current: string;
        _type: string;
      };
    };
  }
  let { nav, logo, pathName, industries }: Props = $props();

  $inspect(industries);

  let dialogOpen = $state(false);
  let showMenu = $state(false);
  let expanded: { [key: string]: boolean } = $state({});
  let activeDropdown: string | null = $state(null);
  let timeout: any;

  function toggleNavbar() {
    showMenu = !showMenu;
    dialogOpen = !dialogOpen;
  }

  function toggleDropdown(item: string) {
    const isAlreadyExpanded = expanded[item];

    expanded = {};

    if (!isAlreadyExpanded) {
      expanded[item] = true;
    }
  }
  function showDropdown(title: string) {
    clearTimeout(timeout);
    activeDropdown = title;
  }

  function hideDropdown() {
    timeout = setTimeout(() => {
      activeDropdown = null;
    }, 500);
  }

  function handleFocus(title: string) {
    showDropdown(title);
  }

  function handleBlur() {
    hideDropdown();
  }
</script>

<div class="">
  <div class="hidden lg:block">
    <DesktopNavbar {industries} {nav} {logo} />
  </div>
  <div class="lg:hidden">
    <MobileNavbar {nav} {industries} {logo} />
  </div>
</div>
