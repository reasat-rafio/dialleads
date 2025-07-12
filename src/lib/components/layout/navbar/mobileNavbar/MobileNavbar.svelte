<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import { page } from "$app/state";
  import type { Nav } from "../../../../../types/site.types";
  import type { SanityImageWithAlt } from "../../../../../types/common.types";
  import { scrollY } from "svelte/reactivity/window";
  import MobileNavbarSvg from "./MobileNavbarSvg.svelte";


  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
  }

  let { nav, logo }: Props = $props();
  let { companyName, cta, menuIcon } = $derived(nav);

  let isPopupVisible = $state(false);
  let isScrolled = $derived((scrollY.current ?? 0) > 1);

  function togglePopup() {
    isPopupVisible = !isPopupVisible;
  }

  const isPolicyPage = $derived.by(() => {
    return ["/privacy-policy", "/terms-conditions"].includes(page.url.pathname);
  });
</script>

<div class="relative">
  <div class="relative w-full bg-hero-gradient lg:rounded-[1.875rem]">
    <div
      class="fixed left-0 top-0 z-[1000] w-full pb-4 transition-[background-color] duration-300 ease-linear {isScrolled
        ? 'bg-white px-0 text-black [box-shadow:_0_4px_6px_rgba(0,_0,_0,_0.1)]'
        : ''} flex justify-between pt-[1.56rem]">
      <a href="/" class="z-50 flex items-center gap-[0.49rem] pl-[0.88rem]">
        <SanityImage
          class="h-[1.625rem] w-[1.875rem]"
          src={logo}
          sizes="5vw"
          imageUrlBuilder={imgBuilder}
          alt={logo?.alt || "logo"} />
        <h5 class="font-geist text-[1.154rem] font-normal {isScrolled || isPolicyPage ? 'text-black' : 'text-white'}">
          {companyName}
        </h5>
      </a>
      <Button class="right-0 rounded bg-transparent px-4 py-2 shadow-none hover:bg-transparent" onclick={togglePopup}>
        {#if isPopupVisible}
         
          <p class="flex items-center gap-2 bg-transparent {isScrolled ? 'brightness-0' : 'brightness-100'}">
            <span class="h-4 w-4 text-base font-bold">
             <MobileNavbarSvg type="close" />
            </span>
          </p>
        {:else}
          <div class="flex items-center {isScrolled ? 'brightness-0' : 'brightness-100'}">
            <SanityImage
              class="h-[2rem] w-[2rem]"
              src={menuIcon}
              sizes="5vw"
              imageUrlBuilder={imgBuilder}
              alt={menuIcon?.alt || "menu icon"} />
          </div>
        {/if}
      </Button>
    </div>
    <div
      class={isScrolled
        ? "fixed left-0 top-0 z-[2000] w-full [box-shadow:_0_4px_6px_rgba(0,_0,_0,_0.1)]"
        : "relative z-50 mx-[1rem]"}>
      {#if isPopupVisible}
        <div
          class="{isScrolled
            ? 'top-[4rem]'
            : 'top-[5rem]'} absolute left-1/2 z-[300] w-full -translate-x-1/2 transform rounded-lg bg-white p-6 shadow-lg">
          <div class="relative flex flex-col justify-start gap-3">
            {#each nav?.menu as item}
              <div
                role="button"
                tabindex="0"
                class="flex items-center rounded py-1 text-start transition-colors duration-300 ease-linear hover:bg-violet-600/5">
                <a
                  href={item?.link?.type === "internal" ? item?.link?.internalLink : item?.link?.externalLink}
                  class="font-geist text-base font-normal text-black"
                  class:active={item?.link?.type === "internal" && page.url.pathname === item?.link?.internalLink}
                  onclick={() => (isPopupVisible = false)}>
                  {item?.link?.title}
                </a>
              </div>
            {/each}
          </div>
          <div class="my-[1rem] mt-[1.25rem] w-fit">
            <a
              href={cta.type === "internal" ? cta.internalLink : cta.externalLink}
              class="box-border block rounded-[0.75rem] bg-primary-gradient px-5 py-[0.75rem] font-geist text-white"
              onclick={() => (isPopupVisible = false)}>
              {cta.title}
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
