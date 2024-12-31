<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SiteDataProps } from '../../../types/site.types';

  let { footer }: { footer: SiteDataProps['footer'] } = $props();

  $inspect(footer);
</script>

<!-- <div class="flex w-full max-w-full flex-col items-center justify-center">
  <div class="relative">
    <div class="absolute h-full w-full">
      <SanityImage
        innerClass="h-full  w-full object-cover"
        class=" h-full w-full bg-black  object-cover"
        src={footer?.backgroundTwo}
        sizes="100vw"
        imageUrlBuilder={imgBuilder} />
    </div>
  </div>
</div> -->

<div class=" relative flex max-w-full justify-center pb-[80px] md:h-[32.4rem]">
  <div class="absolute h-full w-full">
    <SanityImage
      innerClass="h-full  w-full object-cover"
      class=" h-full w-full bg-black  object-cover"
      src={footer?.backgroundTwo}
      sizes="100vw"
      imageUrlBuilder={imgBuilder} />
  </div>
  <div class="container z-50 mx-auto gap-x-[6.56rem]">
    <div class="grid grid-cols-12">
      <!-- pt-[80px] md:pt-[200px] -->
      <div class="col-span-6">
        <div class="flex gap-x-[0.61rem]">
          <SanityImage
            class=" h-[3.25rem] w-[3.25rem] "
            src={footer?.companyLogo}
            sizes="16vw"
            imageUrlBuilder={imgBuilder} />
          <h2 class="text-[1.82813rem] font-semibold text-white">
            {footer?.companyName}
          </h2>
        </div>

        <h2 class="mb-[1.5rem] text-[0.875rem] font-medium text-white">
          {footer?.newsLetterText}
        </h2>

        <div class="mb-[1rem] flex max-w-[31.25rem] gap-x-[0.5rem]">
          <input
            type="text"
            placeholder="Enter your email"
            class="mt-[0.5rem] h-[2.5rem] w-[19rem] rounded-[2rem] px-[0.5rem]" />
          <button
            style="background: var(--Lini, linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%));"
            class="mt-[0.5rem] flex h-[2.5rem] w-[7rem] items-center justify-center gap-x-2 rounded-[2.5rem] font-semibold text-white">
            Subscribe
            <svg
              width="15"
              height="13"
              class="mt-1"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector 1"
                d="M14.5303 7.03033C14.8232 6.73744 14.8232 6.26256 14.5303 5.96967L9.75736 1.1967C9.46447 0.903806 8.98959 0.903806 8.6967 1.1967C8.40381 1.48959 8.40381 1.96447 8.6967 2.25736L12.9393 6.5L8.6967 10.7426C8.40381 11.0355 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033L14.5303 7.03033ZM0 7.25H14V5.75H0V7.25Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <h2 class="max-w-[31.25rem] text-[0.875rem] font-medium text-white">
          {footer?.newsLetter2ndText}
        </h2>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            <h2
              class="mb-[2rem] text-[0.9375rem] font-semibold uppercase text-white">
              Browse
            </h2>
            <div class="flex flex-col gap-y-[1.125rem]">
              {#each footer?.browse as link}
                <a
                  href={link.internalLink}
                  class=" text-[0.875rem] font-normal text-white">
                  {link?.title}
                </a>
              {/each}
            </div>
          </div>

          <div class="col-span-1">
            <h2
              class="mb-[2rem] text-[0.9375rem] font-semibold uppercase text-white">
              Browse
            </h2>
            <div class="flex flex-col gap-y-[1.125rem]">
              {#each footer?.about as link}
                <a
                  href={link.internalLink}
                  class=" text-[0.875rem] font-normal text-white">
                  {link?.title}
                </a>
              {/each}
            </div>
          </div>

          <div class="col-span-1">
            <h2
              class="mb-[2rem] text-[0.9375rem] font-semibold uppercase text-white">
              Browse
            </h2>
            <div class="flex flex-col gap-y-[1.125rem]">
              {#each footer?.legal as link}
                <a
                  href={link.internalLink}
                  class=" text-[0.875rem] font-normal text-white">
                  {link?.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
