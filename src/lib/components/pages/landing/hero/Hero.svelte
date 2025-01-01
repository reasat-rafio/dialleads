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
  $inspect(hero?.video);
</script>

<div class="absolute top-[7.75rem]">
  <div class="relative">
    <div class="w-[50.6875rem] h-[10.5rem] text-center mx-auto">
      {#if Array.isArray(hero?.title[0]?.children) && Array.isArray(hero?.title[1]?.children)}
        <h2 class="font-geist text-7xl font-bold text-[#FFF]">
          {hero?.title[0]?.children[0]?.text}
        </h2>
        <h3
          class="bg-gradient-to-r from-[#731AFF] via-[#731AFF] to-[#FCCEEE]
                bg-clip-text font-geist text-7xl
                font-bold text-transparent">
          {hero?.title[1]?.children[0]?.text}
        </h3>
      {/if}
    </div>
    <p
      class="mx-auto mt-[0.75rem] h-[3.75rem]
        w-[40.3125rem] text-center text-[1.25rem] font-normal text-white">
      {hero?.subtitle}
    </p>
    <div class="mt-[1.88rem] flex justify-center">
      <div
        class="animate-shine inline-flex w-full
      max-w-[14.420rem] items-center justify-center rounded-xl border border-white/10
      bg-[linear-gradient(110deg,#000103,50%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 py-2
      text-sm transition-colors">
        <Button
          class="flex h-[3.5rem]  w-[13.5rem] 
          items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 px-6 
          py-3 font-geist text-lg font-semibold text-white shadow-xl hover:shadow-xl focus:outline-none">
          <!-- Icon (SanityImage) -->
          <SanityImage
            class="h-5 w-5"
            src={hero?.link?.icon}
            sizes="5vw"
            imageUrlBuilder={imgBuilder}
            alt="" />
          <!-- Button Text -->
          <span>{hero?.link?.title}</span>
        </Button>
      </div>
    </div>

    <div
      class=" relative mx-auto mt-[5.7rem] flex h-[22.5rem] w-[75rem]
      justify-center
      ">
      <div
        class="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-t from-violet-900 to-violet-100">
        <SanityImage
          lqip
          class="mx-auto h-full w-full  rounded-tl-xl rounded-tr-xl bg-cover bg-no-repeat object-cover opacity-50"
          src={hero?.thumbnail}
          imageUrlBuilder={imgBuilder}
          alt="" />

        <div
          class="absolute left-1/2 top-1/2 flex
        h-[4.375rem] w-[4.375rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full
        border border-violet-600 bg-white shadow-xl">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button class="bg-white hover:bg-white">
                <SanityImage
                  class="h-[1.6rem] w-[1.6rem]"
                  src={hero?.videoPlayBtnIcon}
                  imageUrlBuilder={imgBuilder}
                  alt={hero?.videoPlayBtnIcon?.alt} />
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content class=" flex max-w-screen-2xl justify-center">
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
