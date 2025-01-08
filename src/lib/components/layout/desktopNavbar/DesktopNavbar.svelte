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
    className: string;
  }

  let { nav, logo, className }: Props = $props();

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

<div
  class="{className} px-16 xl:px-0 ml-[1.06rem] mr-[1.13rem] mt-4
  rounded-[1.875rem]
  relative overflow-hidden
   bg-hero-gradient">
 

  <img
    src="/grid.png"
    alt="grid overlay"
    class="pointer-events-none absolute inset-0 h-full w-full opacity-100 mix-blend-overlay" />



  <!-- max-h-[57.5rem]  h-[57.5rem] min-h-[57.5rem]-->
  <div class="mx-auto max-w-[75rem] pt-[1.81rem]">
    <div class="flex justify-between">
      <a href="/" class="flex items-center gap-[0.49rem]">
        <SanityImage
          class="h-[2.63rem] w-[2.63rem]"
          src={logo}
          sizes="100vw"
          imageUrlBuilder={imgBuilder}
          alt={logo?.alt || 'logo'} />
        <h5 class="font-geist text-[1.47656rem] font-semibold text-[#FFF]">
          Dialleads
        </h5>
      </a>
      <div class="flex items-center gap-5">
        {#each nav?.menu as item}
          <div
            role="button"
            tabindex="0"
            class="relative flex items-center z-50"
            onmouseover={() => showDropdown(item?.link?.title)}
            onmouseout={hideDropdown}
            onfocus={() => handleFocus(item?.link?.title)}
            onblur={handleBlur}>
            <a
              href={item?.link?.type === 'internal'
                ? item?.link?.internalLink
                : item?.link?.externalLink}
              class="font-geist text-base font-normal text-[#FFF] opacity-80">
              {item?.link?.title}
            </a>
            {#if item?.moreLinks}
              <ChevronDown
                class="h-[1.25rem] w-[1.125rem] font-geist text-base font-normal text-[#FFF] " />
            {/if}
            {#if item?.moreLinks && activeDropdown === item?.link?.title}
              <div
                class="absolute left-0 top-5 z-50 mt-2 w-48 rounded-md
                bg-white
                shadow-lg transition-opacity delay-150 duration-500 fade-in"
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

      <div>
        <Button
          variant="link"
          class="h-[2.875rem] 
          w-[8.625rem] rounded-[0.75rem] border border-violet-600 
          bg-primary px-5 py-[.88rem] font-geist font-medium
          text-white
          ">
          Get Started
        </Button>
      </div>
    </div>
  </div>
</div>
