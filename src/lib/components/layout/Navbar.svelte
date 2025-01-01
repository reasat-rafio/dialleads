<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { ChevronDown } from 'lucide-svelte';
  import type { SanityImageWithAlt } from '../../../types/common.types';
  import type { Nav } from '../../../types/site.types';
  import Button from '../ui/button/button.svelte';
  import DesktopNavbar from './desktopNavbar/DesktopNavbar.svelte';
  import MobileNavbar from './mobileNavbar/MobileNavbar.svelte';

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
  }
  let { nav, logo }: Props = $props();

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
    <DesktopNavbar {nav} {logo} />
  </div>
  <div>
    <MobileNavbar {nav} {logo} />
  </div>
</div>
  

