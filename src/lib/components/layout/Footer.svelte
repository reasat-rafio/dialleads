<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SiteDataProps } from '../../../types/site.types';
  import Button from '../ui/button/button.svelte';

  let { footer }: { footer: SiteDataProps['footer'] } = $props();
</script>

<div class="relative">
  <div
    class="bg-footer-gradient relative mx-auto mt-[15rem] h-[74.2rem]
    w-full
    lg:h-full">
    <div>
      <div
        class="px-5 pt-[14rem] lg:py-8 lg:pl-[7.56rem] lg:pr-[8.15rem] lg:pt-[9.34rem]">
        <div class="grid-cols-12 lg:grid">
          <div class="lg:col-span-6">
            <div class="flex justify-center gap-x-[0.61rem] lg:justify-normal">
              <SanityImage
                class="h-[3.25rem] w-[3.25rem]"
                src={footer?.companyLogo}
                sizes="16vw"
                imageUrlBuilder={imgBuilder} />
              <h2 class="text-[1.82813rem] font-semibold text-white">
                {footer?.companyName}
              </h2>
            </div>
            <h2
              class="mb-[1.5rem] mt-[1.13rem] text-[0.875rem] font-medium text-white opacity-80">
              {footer?.newsLetterText}
            </h2>
            <div
              class="mb-[1rem] grid max-w-[20.8rem] grid-cols-4 gap-x-[0.5rem] md:max-w-[31.25rem]">
              <div class="col-span-2 lg:col-span-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class=" h-full w-full rounded-[2rem] border border-[#625a5a] bg-[#4F3780] px-[1.25rem] py-[0.5rem] text-white lg:h-full lg:px-[1.25rem]" />
              </div>

              <button
                style="background: var(--Lini, linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%));"
                class="col-span-2 flex h-full w-full basis-1 items-center justify-center gap-x-[0.5rem] rounded-[1.88rem] px-[1.5rem] py-[1rem] font-semibold text-white lg:col-span-1">
                Subscribe
                <span>
                  <svg
                    class="mt-1 w-[0.875rem]"
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
            <h2
              class="max-w-[31.25rem] text-[0.875rem] font-medium text-white opacity-80">
              {footer?.newsLetter2ndText}
            </h2>
          </div>
          <div
            class="flex h-[14rem] flex-col justify-between lg:col-span-6 lg:flex-row">
            <div>
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                Browse
              </h2>
              <div class="flex flex-col space-y-4">
                {#each footer?.about as link}
                  <a
                    href={link.internalLink}
                    class=" text-[0.875rem] font-normal text-white opacity-80">
                    {link?.title}
                  </a>
                {/each}
              </div>
            </div>
            <div>
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                ABOUT
              </h2>
              <div class="flex flex-col space-y-4">
                {#each footer?.browse as link}
                  <a
                    href={link.internalLink}
                    class=" text-[0.875rem] font-normal text-white opacity-80">
                    {link?.title}
                  </a>
                {/each}
              </div>
            </div>
            <div>
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                LEGAL
              </h2>
              <div class="flex flex-col space-y-4">
                {#each footer?.legal as link}
                  <a
                    href={link.internalLink}
                    class=" text-[0.875rem] font-normal text-white opacity-80">
                    {link?.title}
                  </a>
                {/each}
              </div>
            </div>
            <div class="lg:hidden">
              <div
                class="mb-[2rem] mt-[5.56rem] flex flex-col justify-between opacity-80 md:flex-row">
                <span class="text-[1rem] font-light text-white">
                  {footer?.copyRightText}
                </span>
                <div
                  class=" gap-x-auto mt-2 flex justify-between gap-y-[0.75rem] md:gap-x-[1.5rem]">
                  {#each footer?.subItems as subItem}
                    <a
                      href={subItem.internalLink}
                      class=" text-[0.875rem] font-normal text-white">
                      {subItem?.title}
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div
            class="mb-[2rem] mt-[5.56rem] flex flex-col justify-between opacity-80 md:flex-row">
            <span class="text-[1rem] font-light text-white">
              {footer?.copyRightText}
            </span>
            <div
              class=" gap-x-auto flex justify-between gap-y-[0.75rem] md:gap-x-[1.5rem]">
              {#each footer?.subItems as subItem}
                <a
                  href={subItem.internalLink}
                  class=" text-[0.875rem] font-normal text-white">
                  {subItem?.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Join More  -->
  <div
    class="
    lg:bg-footer-gradient
    absolute -top-[14rem] left-1/2
  mx-auto w-[20rem] -translate-x-1/2 rounded-[1.875rem] bg-violet-900
  bg-gradient-to-t
  from-violet-500
 to-violet-800 pb-[3.12rem] pl-[6.44rem]
 pr-[6.38rem] pt-[3.12rem]
 lg:-top-[9rem] lg:pb-0
 xl:w-fit
 ">
    <div class="flex flex-col lg:flex-row">
      <h3
        class="mb-[4.375rem] text-center font-geist font-semibold text-white
        lg:w-[47.925rem]
         lg:text-left lg:text-[2.625rem]">
        Join more than <span
          class="bg-gradient-to-r from-purple-50 to-purple-400 bg-clip-text text-transparent">
          225,000+
        </span>
         customers that manage projects better
      </h3>
      <div class="mt-5 flex flex-col gap-8">
        <Button
          href={footer?.getStartedbtnLink}
          class="max-w-[11rem] rounded-[0.75rem] border  border-[#E4E4E7] bg-[#8B5CF6] px-[2.44rem] py-[0.88rem] text-[1.125rem]">
          {footer?.getStartedbtnText}
        </Button>

        <span class="w-full text-center text-[0.875rem] text-white">
          {footer?.sideText}
        </span>
      </div>
    </div>
  </div>
</div>
