<script lang="ts">
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import type { SanityImageWithAlt } from "../../../../../types/common.types";
  import type { Nav } from "../../../../../types/site.types";
  import { page } from "$app/state";
  import { cn } from "$lib/utils";
  import { scrollY } from "svelte/reactivity/window";

  interface Props {
    nav: Nav;
    logo: SanityImageWithAlt;
  }

  let { nav, logo }: Props = $props();
  let { companyName, cta } = $derived(nav);

  let visible = $state(true);
  let lastScrollTop = $state(0);
  let isScrolled = $derived((scrollY.current ?? 0) > 0);

  $effect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop < 700) {
        visible = true;
      } else if (currentScrollTop < lastScrollTop) {
        visible = false;
      } else {
        visible = true;
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isPolicyPage = $derived.by(() => {
    return ["/privacy-policy", "/terms-conditions"].includes(page.url.pathname);
  });
</script>

<div class="relative mx-5 rounded-[1.875rem] xl:mx-0 xl:px-0">
  <div
    class={cn(
      "fixed left-0 top-0 z-50 w-full pb-4 pt-4 text-black transition-all duration-200 ease-linear",
      !visible ? "-translate-y-full" : "translate-y-0",
      isScrolled && "bg-white [box-shadow:_0_4px_6px_rgba(0,_0,_0,_0.1)]",
    )}>
    <div class="mx-auto flex max-w-7xl justify-between lg:px-5 2xl:px-0">
      <a href="/" class="flex items-center gap-[0.49rem]">
        <SanityImage
          class="h-[1.625rem] w-[1.875rem]"
          src={logo}
          sizes="100vw"
          imageUrlBuilder={imgBuilder}
          alt={logo?.alt || "logo"} />
        <h1
          class={cn(
            "font-geist text-[1.154rem] font-normal",
            isScrolled || isPolicyPage ? "text-black" : "text-white",
          )}>
          {companyName}
        </h1>
      </a>
      <div class="flex items-center gap-10 xl:gap-[4.063rem]">
        {#each nav?.menu as item}<div role="button" tabindex="0" class="relative z-50 flex items-center">
            <a
              data-sveltekit-preload-data="off"
              href={item?.link?.type === "internal" ? item?.link?.internalLink : item?.link?.externalLink}
              class="font-geist text-[1rem] font-normal leading-[150%] opacity-80 transition duration-100 ease-linear hover:text-violet-500 hover:opacity-100 {isScrolled ||
              isPolicyPage
                ? 'text-black'
                : 'text-white'}"
              class:active={item?.link?.type === "internal" && page.url.pathname === item?.link?.internalLink}>
              {item?.link?.title}
            </a>
          </div>
        {/each}
      </div>

      <div class="z-50 bg-transparent">
        <a
          href={cta.type === "internal" ? cta.internalLink : cta.externalLink}
          class="flex h-[2.875rem] w-[8.25rem] items-center justify-center rounded-[0.75rem] border border-violet-600 bg-primary-gradient
          px-5 py-[0.875rem] font-geist font-medium text-white transition-all duration-200 ease-linear hover:brightness-90 hover:saturate-[1.25]">
          {cta.title}
        </a>
      </div>
    </div>
  </div>
</div>
