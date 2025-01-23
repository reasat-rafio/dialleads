<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { ChevronDown } from 'lucide-svelte';
  import type { Nav } from '../../../../types/site.types';
  import type { SanityImageWithAlt } from '../../../../types/common.types';

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
  }

  let { nav, logo}: Props = $props();

  let dialogOpen = $state(false);
  let showMenu = $state(false);
  let expanded: { [key: string]: boolean } = $state({});
  let activeDropdown: string | null = $state(null);
  let timeout: any;
  let isScrolled = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }

  $effect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

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

<div
  class="  relative  
  rounded-[1.875rem] mx-5 xl:mx-0
   xl:px-0">
  <!-- max-h-[57.5rem]  h-[57.5rem] min-h-[57.5rem]-->
  <div
    class={` ${isScrolled ? 'scrolled navbar  pt-4' : ' absolute inset-0 z-50 mt-[2.2rem]'}`}>
    <div class="flex justify-between mx-auto xl:max-w-[75rem] lg:px-5 xl:px-0">
      <a href="/" class="flex items-center gap-[0.49rem]">
        <SanityImage
          class="h-[2.63rem] w-[2.63rem]"
          src={logo}
          sizes="100vw"
          imageUrlBuilder={imgBuilder}
          alt={logo?.alt || 'logo'} />
        <h5 class={`font-geist text-[1.47656rem] font-semibold  ${isScrolled ? "text-black" : "text-[#FFF]"}`}>
          Dialleads
        </h5>
      </a>
      <div class="flex items-center gap-10">
        {#each nav?.menu as item}
          <div
            role="button"
            tabindex="0"
            class="relative z-50 flex items-center"
            onmouseover={() => showDropdown(item?.link?.title)}
            onmouseout={hideDropdown}
            onfocus={() => handleFocus(item?.link?.title)}
            onblur={handleBlur}>
            <a
		data-sveltekit-preload-data="off"
              href={item?.link?.type === 'internal'
                ? item?.link?.internalLink
                : item?.link?.externalLink}
              class={`"font-geist text-base font-normal  opacity-80" ${isScrolled ? "text-black": "text-[#FFF]"}`}>
              {item?.link?.title}
            </a>
            {#if item?.moreLinks}
              <ChevronDown
                class={`h-[1.25rem] w-[1.125rem] font-geist text-base font-normal ${isScrolled ? "text-black": "text-[#FFF] "}`} />
            {/if}
            {#if item?.moreLinks && activeDropdown === item?.link?.title}
              <div
                class="absolute left-0 top-5 z-50 mt-2 w-48 rounded-md
                bg-white
                shadow-lg transition-opacity delay-150 duration-500 fade-in"
                class:opacity-100={activeDropdown === item?.link?.title}>
                {#each item?.moreLinks as link}
                  <a
		data-sveltekit-preload-data="off"
                    href={link?.type === 'internal'
                      ? link?.internalLink
                      : link?.externalLink}
                    class="block px-4 py-2 text-sm text-gray-700">
                    {link?.title}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <div class="z-50 bg-transparent">
        <Button
          variant="link"
          class="
          flex
          h-[2.875rem] w-[8.625rem] items-center
          justify-center 
          rounded-[0.75rem] border border-violet-600 bg-primary 
          px-5 py-[.88rem] font-geist font-medium text-white
          hover:no-underline
          ">
          Get Started
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    background-color: transparent;
    padding-bottom: 1rem;
  }
  .navbar.scrolled {
    background-color: white;
    color: black;
  }
</style>
