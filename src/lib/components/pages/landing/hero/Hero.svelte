<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { Hero, HeroProps } from '../../../../../types/landing.types';
  import Video from './Video.svelte';
  import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
  import { X } from 'lucide-svelte';

  let { props }: { props: HeroProps } = $props();
  let { hero }: { hero: Hero } = $derived(props);
  let isIntersecting = true;
  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="absolute top-[7.31rem] px-[0.94rem] lg:top-[11.49rem] xl:px-0">
  <div class="relative">
    <div
      style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
      class="mx-auto mb-[2.12rem] hidden h-10
      items-center
      justify-center
  
      gap-[0.375rem] rounded-[20rem] py-2 lg:flex lg:w-[26.625rem]">
      <SanityImage
        class="h-4 w-4 lg:h-5 lg:w-5"
        src={hero?.sectionIcon}
        sizes="5vw"
        imageUrlBuilder={imgBuilder}
        alt={hero?.sectionIcon?.alt || "icon"} />
      <p class="text-nowrap text-sm font-medium text-white lg:text-lg">
        {hero?.sectionName}
      </p>
    </div>
    <div class="mx-auto w-[17rem] text-center lg:h-[10.5rem] lg:w-[50.6875rem]">
      {#if Array.isArray(hero?.heroTitle[0]?.children) && Array.isArray(hero?.heroTitle[1]?.children)}
        <h1
          class=" font-geist text-[2.25rem] font-bold text-[#FFF] lg:text-7xl leading-[2.7rem]">
          {hero?.heroTitle[0]?.children[0]?.text}
        </h1>
        <h1
          class="bg-gradient-to-r from-[#731AFF] via-[#731AFF] to-[#FCCEEE]
                bg-clip-text font-geist text-[2.25rem] font-bold
                text-transparent lg:text-7xl">
          {hero?.heroTitle[1]?.children[0]?.text}
        </h1>
      {/if}
    </div>
    <p
      class="mx-auto mt-[1.12rem] h-[3.75rem] w-[17.5625rem]
         text-center text-base font-normal text-white lg:mt-[0.75rem] lg:w-[40.3125rem] lg:text-[1.25rem]">
      {hero?.subtitle}
    </p>
    <div class=" mx-[0.94rem] mt-[3rem] flex justify-center lg:mt-[1.88rem]">
      <div
        class="inline-flex w-full max-w-[14.420rem]
      animate-shine items-center justify-center rounded-xl border-[1px]
      border-l border-t border-white/30 border-b-white/15 border-r-white/15 bg-[linear-gradient(110deg,#2e1065,50%,#7C3AED,55%,#2e1065)]
      bg-[length:200%_100%] px-2 py-2 text-sm shadow-xl transition-colors">
        <Button
          class="flex h-[3.5rem]  w-[13.5rem] 
          items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 px-6 
          py-3 font-geist text-lg font-semibold text-white shadow-xl hover:shadow-xl focus:outline-none
">
          <!-- Icon (SanityImage) -->
          <SanityImage
            class="h-5 w-5"
            src={hero?.link?.icon}
            sizes="5vw"
            imageUrlBuilder={imgBuilder}
            alt={hero?.link?.icon?.alt || "icon"} />
          <!-- Button Text {hero?.link?.title} -->
          <span>{hero?.link?.title}</span>
        </Button>
      </div>
    </div>

    <div
      style="
      "
      class=" relative mx-auto mt-[3.89rem]
      flex h-[17.8rem]  w-full
      justify-center  opacity-70  lg:mt-[4rem] lg:h-[22.5rem]  lg:px-0
      xl:max-h-[17.8rem]  max-w-[75rem]
      {windowWidth <= 320 ? 'mt-[5.95rem] h-full' : 'h-[20.875rem]'}
      ">
      <div
        class="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-t from-violet-900 to-violet-100 w-full">
        {#if windowWidth > 700}
          <SanityImage
            lqip
            innerClass=" w-full  object-cover"
            class="mx-auto  h-full w-full  rounded-tl-xl rounded-tr-xl  object-cover "
            src={hero?.thumbnailForDesktop}
            sizes="100vw"
            imageUrlBuilder={imgBuilder}
            alt={hero?.thumbnailForDesktop?.alt || 'tuhumbnail'} />
        {:else}
          <SanityImage
            lqip
            class="mx-auto h-full w-full  rounded-tl-xl rounded-tr-xl  object-cover"
            src={hero?.thumbnailForMobile}
            sizes="100vw"
            imageUrlBuilder={imgBuilder}
            alt={hero?.thumbnailForMobile?.alt || "thumbnail"} />
        {/if}

        <div
          class="absolute left-1/2 top-28 lg:top-2/3 flex
        h-[4.375rem] w-[4.375rem] -translate-x-1/2 lg:-translate-y-1/2 items-center justify-center rounded-full
        border border-violet-600 bg-white shadow-xl">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button class="bg-white hover:bg-white">
                <SanityImage
                  class="h-[1.6rem] w-[1.6rem]"
                  src={hero?.videoPlayBtnIcon}
                  imageUrlBuilder={imgBuilder}
                  alt={hero?.videoPlayBtnIcon?.alt || "icon"} />
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content
              class=" flex justify-center lg:max-w-screen-2xl">
              <Video
                {isIntersecting}
                mov={hero?.video?.mov}
                webm={hero?.video?.webm} />

              <AlertDialog.Footer class="absolute right-4 top-4">
                <AlertDialog.Cancel class="border-none bg-none">
                  <X size={24} />
                </AlertDialog.Cancel>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </div>
    </div>
  </div>
</div>
