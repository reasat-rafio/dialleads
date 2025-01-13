<script lang="ts">
  import type { SanityImageWithAlt } from '../../../../types/common.types';
  import type { Nav } from '../../../../types/site.types';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import { RiMenu3Fill } from 'react-icons/ri';
  import Button from '$lib/components/ui/button/button.svelte';
  import { ChevronDown, X } from 'lucide-svelte';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
    className: string;
  }

  let { nav, logo, className }: Props = $props();

  let isPopupVisible = $state(false);
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

  function togglePopup() {
    console.log(isPopupVisible);
    isPopupVisible = !isPopupVisible;
  }

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

<div class="relative">
  <div
    class=" {className} relative
    
     bg-hero-gradient w-full lg:rounded-[1.875rem] ">
    <img
      src="/grid.png"
      alt="grid overlay"
      class="pointer-events-none absolute inset-0 h-full w-full opacity-100 mix-blend-overlay object-cover" />

    <div
      class={`navbar  ${isScrolled ? 'scrolled px-0' : ''} flex justify-between pt-[1.56rem]`}>
      <a href="/" class="z-50 flex items-center gap-[0.49rem] pl-[0.88rem]">
        <SanityImage
          class="h-[2rem] w-[2rem]"
          src={logo}
          sizes="5vw"
          imageUrlBuilder={imgBuilder}
          alt={logo?.alt || 'logo'} />
        <h5
          class={`font-geist text-base font-semibold ${isScrolled ? 'text-black' : 'text-white'}`}>
          Dialleads
        </h5>
      </a>
      <Button
        class="right-0 rounded bg-transparent px-4 py-2 hover:bg-transparent"
        onclick={togglePopup}>
        {#if isPopupVisible}
          <!-- Close (X) Icon -->
          <p
            class={`flex items-center gap-2 bg-transparent ${isScrolled ? 'filter-black' : 'filter-white'}`}>
            <span class="h-4 w-4 text-base font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <g clip-path="url(#clip0_233_2172)">
                  <path
                    d="M1.51672 15.8998C1.12445 15.9226 0.738661 15.7922 0.440711 15.536C-0.146904 14.9449 -0.146904 13.9902 0.440711 13.3991L13.3075 0.532244C13.9187 -0.0396496 14.8777 -0.00785834 15.4496 0.603313C15.9668 1.15599 15.9969 2.00547 15.5202 2.59339L2.57756 15.536C2.28346 15.7885 1.90386 15.9186 1.51672 15.8998Z"
                    fill="white" />
                  <path
                    d="M14.3742 15.8998C13.9767 15.8981 13.5956 15.7403 13.3133 15.4603L0.446448 2.59337C-0.0979465 1.95765 -0.0239332 1.00091 0.611793 0.456468C1.17919 -0.0294346 2.016 -0.0294346 2.58335 0.456468L15.526 13.3234C16.137 13.8954 16.1686 14.8545 15.5966 15.4655C15.5738 15.4898 15.5503 15.5133 15.526 15.5361C15.2091 15.8117 14.792 15.9434 14.3742 15.8998Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_233_2172">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="text-base font-normal text-white">Close</span>
          </p>
        {:else}
          <!-- Hamburger Icon -->
          <p class="flex items-center">
            <img
              class={`${isScrolled ? 'filter-black' : 'filter-white'}`}
              src="/humburgIcon.png"
              alt="icon" />
          </p>
        {/if}
      </Button>
    </div>
    <div class={`  ${isScrolled ? "pop-up" : "relative z-50 mx-[1rem]"}`}>
      {#if isPopupVisible}
        <div
          class={`${isScrolled ? "top-[4rem]" : "top-[5rem]"} absolute  left-1/2 z-50 w-full  -translate-x-1/2 transform rounded-lg bg-white p-6
            shadow-lg`}>
          <div class="flex flex-col justify-start gap-5">
            {#each nav?.menu as item}
              <div
                role="button"
                tabindex="0"
                onmouseover={() => showDropdown(item?.link?.title)}
                onmouseout={hideDropdown}
                onfocus={() => handleFocus(item?.link?.title)}
                onblur={handleBlur}
                class="flex items-center text-start">
                {#if item?.moreLinks}
                  <p>{item?.link?.title}</p>
                  <ChevronDown
                    class="font-geistfont-geist h-[1.25rem] w-[1.125rem] text-base font-normal text-black" />
                {:else}
                  <a
                    href={item?.link?.type === 'internal'
                      ? item?.link?.internalLink
                      : item?.link?.externalLink}
                    class="font-geist text-base font-normal text-black">
                    {item?.link?.title}
                  </a>
                {/if}
                {#if item?.moreLinks && activeDropdown === item?.link?.title}
                  <div
                    class="absolute z-50 mt-24 w-fit rounded-md bg-white opacity-0 shadow-lg transition-opacity delay-150 duration-500 fade-in"
                    class:opacity-100={activeDropdown === item?.link?.title}>
                    {#each item?.moreLinks as link}
                      <a
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
          <div class="mt-[1.19rem]">
            <Button
              variant="link"
              class="rounded-[0.75rem] bg-violet-700 px-5 py-[0.88rem] font-geist text-white">
              Get Started
            </Button>
          </div>
        </div>
      {/if}
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

  .filter-white {
    filter: brightness(100%);
  }

  /* Black icon filter when scrolled */
  .filter-black {
    filter: brightness(0%);
  }
  .pop-up {
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
