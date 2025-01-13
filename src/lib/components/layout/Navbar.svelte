<script lang="ts">
  import type { SanityImageWithAlt } from '../../../types/common.types';
  import type { Nav } from '../../../types/site.types';

  import DesktopNavbar from './desktopNavbar/DesktopNavbar.svelte';
  import MobileNavbar from './mobileNavbar/MobileNavbar.svelte';
  import { cn } from '$lib/utils';

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
    <DesktopNavbar
      className={cn('h-fit w-full', {
        'max-h-[63.5rem] min-h-[63.5rem]': pathName === '/',
        'h-[43.5rem] max-h-[57.5rem]':
          pathName === '/industry-use-cases/real-estate' ||
          pathName === '/industry-use-cases/mortgage',
        'h-[38.75rem] max-h-[57.5rem]':
          pathName !== '/' &&
          pathName !== '/industry-use-cases/real-estate' &&
          pathName !== '/industry-use-cases/mortgage',
      })}
      {nav}
      {logo} />
  </div>
  <div class="lg:hidden">
    <MobileNavbar
      className={cn('w-full', {
        'min-h-[52.75rem] max-h-[52.75rem]': pathName === '/',
        'min-h-[53.1rem]':
          pathName === '/industry-use-cases/real-estate' ||
          pathName === '/industry-use-cases/mortgage',
        'min-h-[43.1rem]': pathName === '/pricing',
        'min-h-[25.625rem]':
          pathName !== '/' &&
          pathName !== '/industry-use-cases/real-estate' &&
          pathName !== '/industry-use-cases/mortgage' &&
          pathName !== '/pricing',
      })}
      {nav}
      {logo} />
  </div>
</div>
