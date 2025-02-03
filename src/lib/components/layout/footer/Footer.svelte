<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { cn } from '$lib/utils';

  import { PortableText } from '@portabletext/svelte';
  import type { SiteDataProps } from '../../../../types/site.types';
  import ViolateGradient from './ViolateGradient.svelte';

  let { footer }: { footer: SiteDataProps['footer'] } = $props();
  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class=" relative mt-64 w-full bg-footer-gradient lg:mt-[10.94rem]">
  <div
    class="w-full px-5 pb-8 pt-[14.27rem] xl:container lg:flex-row lg:pt-[9.63rem] xl:px-[6.2rem]">
    <div class="flex flex-col justify-between lg:flex-row">
      <div>
        <div
          class="flex items-center justify-center gap-[0.61rem] lg:justify-normal">
          <SanityImage
            class="h-[3.25rem] w-[3.25rem]"
            src={footer?.companyLogo}
            sizes="16vw"
            imageUrlBuilder={imgBuilder} />
          <h4 class="text-[1.82813rem] font-semibold text-white">
            {footer?.companyName}
          </h4>
        </div>
        <h5
          class="mb-[1.5rem] mt-[1.13rem] text-[0.875rem] font-medium text-white opacity-80">
          {footer?.newsLetterText}
        </h5>
        <div
          class={cn('flex gap-2', {
            'flex-col': windowWidth < 375,
            'flex-row': windowWidth >= 375,
          })}>
          <input
            type="text"
            placeholder="Enter your email"
            class=" h-[3rem] w-[12.25rem] rounded-[2rem] border
            border-[#625a5a] bg-[#4F3780] px-[1.25rem] py-[0.5rem] text-white lg:h-[3rem] lg:w-[21.75rem] lg:px-[1.25rem]" />
          <button
            style="background: var(--Lini, linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%));"
            class="flex h-[3rem] w-[8.1875rem]
            items-center justify-center gap-x-[0.5rem]
            rounded-[1.88rem] px-[1.5rem] py-[1rem] font-semibold text-white lg:col-span-1 lg:h-[3.0625rem] lg:w-[9rem]">
            Subscribe
            <span>
              <svg
                class=" w-[0.875rem]"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  id="Vector 1"
                  d="M14.5303 7.03033C14.8232 6.73744 14.8232 6.26256 14.5303 5.96967L9.75736 1.1967C9.46447 0.903806 8.98959 0.903806 8.6967 1.1967C8.40381 1.48959 8.40381 1.96447 8.6967 2.25736L12.9393 6.5L8.6967 10.7426C8.40381 11.0355 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033L14.5303 7.03033ZM0 7.25H14V5.75H0V7.25Z"
                  fill="white" />
              </svg>
            </span>
          </button>
        </div>
        <h4
          class="mt-[1.06rem] text-[0.875rem] font-medium text-white opacity-80 lg:w-[31.25rem]">
          {footer?.newsLetter2ndText}
        </h4>
      </div>
      <div
        class="border-b border-r-0 pb-4 pr-[5rem] lg:border-b-0 lg:border-r lg:border-gray-700 lg:pb-0">
        <h2
          class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
          Browse
        </h2>
        <div class=" flex flex-col space-y-4">
          {#each footer?.browse as link}
            <a
              href={link.internalLink}
              class=" text-[0.875rem] font-normal text-white opacity-80 uppercase">
              {link?.title}
            </a>
          {/each}
        </div>
      </div>
      <div
        class="border-b border-r-0 pb-4 pr-[5rem] lg:border-b-0 lg:border-r lg:border-gray-700 lg:pb-0">
        <h2
          class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
          About
        </h2>
        <div class="flex flex-col space-y-4">
          {#each footer?.about as link}
            <a
              href={link.internalLink}
              class=" text-[0.875rem] font-normal text-white opacity-80 uppercase">
              {link?.title}
            </a>
          {/each}
        </div>
      </div>
      <div class="">
        <h2
          class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
          Legal
        </h2>
        <div class="flex flex-col space-y-4">
          {#each footer?.legal as link}
            <a
              href={link.internalLink}
              class=" text-[0.875rem] font-normal text-white opacity-80 uppercase">
              {link?.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
    <div class="mt-14 hidden border-t border-gray-700 lg:block">
      <div
        class="mb-[2rem] mt-8 flex flex-col justify-between opacity-80 md:flex-row">
        <span class="text-[1rem] font-light text-white">
          {footer?.copyRightText}
        </span>
        <div
          class=" gap-x-auto flex justify-between gap-y-[0.75rem] md:gap-x-[1.5rem]">
          {#each footer?.subItems as subItem}
            <a
              href={subItem.internalLink}
              class=" text-[1rem] font-[300] text-white">
              {subItem?.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
    <div class="mt-14 border-t border-gray-700 lg:hidden">
      <div
        class="mb-[2rem] mt-[2rem] flex flex-col justify-between opacity-80 md:flex-row">
        <span class="text-[1rem] font-light text-white">
          {footer?.copyRightText}
        </span>
        <div
          class=" mt-2 flex justify-between gap-2 gap-y-[0.75rem] text-nowrap md:gap-x-[1.5rem]">
          {#each footer?.subItems as subItem}
            <a
              href={subItem.internalLink}
              class=" text-[0.875rem] font-[300] text-white">
              {subItem?.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Join More  -->
  <div
    class="
    
    absolute -top-[.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-top-[1rem]
    
    
  
 ">
    <div class="">
      <div
        class="mx-auto h-[27.375rem] w-[20.9375rem] lg:h-[13.625rem] lg:w-[63rem] xl:w-[75rem]">
        <SanityImage
          lqip
          innerClass="h-full w-full object-cover rounded-[1.875rem]"
          class="h-full w-full object-cover "
          src={footer?.joinMoreBanner}
          sizes="100vw"
          imageUrlBuilder={imgBuilder}
          alt={footer?.joinMoreBanner?.alt || 'logo'} />
      </div>
      <div
        class="absolute left-1/2 top-1/2 
        flex -translate-x-1/2 -translate-y-1/2 
        flex-col items-center gap-[3.25rem] lg:gap-2  xl:gap-[3.25rem] lg:flex-row  ">
        <h3
          class="
          
          text-center
          font-geist
          text-[1.675rem]
          font-semibold
          lg:leading-[3.675rem]
          text-[#FFF] lg:h-fit
          w-[13rem]
           lg:w-[47.9375rem] lg:text-left lg:text-[2.625rem]">
          <PortableText
            value={footer?.joinMoreTitle}
            components={{
              marks: {
                violetGradient: ViolateGradient,
              },
            }} />
        </h3>

        <div class="">
          <Button
            href={footer?.getStartedbtnLink}
            class="h-[2.875rem] w-44 rounded-[0.75rem] border border-[#E4E4E7] bg-[#8B5CF6]
              font-geist text-[1.125rem] font-medium leading-[1.125rem] 
              ">
            {footer?.getStartedbtnText}
          </Button>
          <p
            class="mt-8 text-nowrap text-center text-[0.875rem] font-normal
            leading-[0.90738rem] text-white
            [text-edge:cap]
            ">
            {footer?.sideText}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
