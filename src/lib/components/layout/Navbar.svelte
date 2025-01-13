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
    pathName: string;
  }
  let { nav, logo, pathName }: Props = $props();

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
    {#if pathName == '/'}
      <DesktopNavbar
        className="h-fit max-h-[63.5rem] min-h-[63.5rem] w-full"
        {nav}
        {logo} />
    {:else}
      <DesktopNavbar className="h-fit min-h-[38.75rem] max-h-[57.5rem] w-full" {nav} {logo} />
    {/if}
  </div>
  <div class="lg:hidden">
    {#if pathName == '/'}
      <MobileNavbar className="min-h-[43.1rem] max-h-[43.1rem] w-full" {nav} {logo} />
    {:else if pathName == '/industry-use-cases/real-estate' || pathName == '/industry-use-cases/mortgage'}
      <MobileNavbar className="min-h-[53.1rem]" {nav} {logo} />
    {:else if pathName == '/pricing'}
      <MobileNavbar className="min-h-[43.1rem]" {nav} {logo} />
    {:else}
      <MobileNavbar className="min-h-[25.625rem]" {nav} {logo} />
    {/if}
  </div>
</div>
