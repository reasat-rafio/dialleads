<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SiteDataProps } from '../../../types/site.types';
  import Button from '../ui/button/button.svelte';

  let { footer }: { footer: SiteDataProps['footer'] } = $props();
</script>

<div class="relative mt-[250px] hidden h-full w-full md:block">
  <div class="absolute top-[-6rem] z-50 w-full lg:top-[-7rem]">
    <!-- top-[-12rem] -->
    <div class="container relative">
      <div
        class=" max-h-[27.37rem] overflow-visible rounded-[1.88rem] md:max-h-[13rem] md:overflow-hidden">
        <!-- max-h-[27.37rem]  ->  max-h-[13rem] -->
        <SanityImage
          class="  h-[27.37rem]  w-full rounded-[1.88rem]  object-cover  lg:h-auto"
          src={footer?.backgroundOne}
          sizes="30vw"
          imageUrlBuilder={imgBuilder} />
        <!-- h-[27.37rem] -> h-auto -->
      </div>
      <div
        class="absolute left-12 top-0 z-50 grid h-fit w-fit grid-cols-6 items-center justify-center gap-x-[3.25rem] py-[3.12rem] text-white md:gap-x-[5rem]">
        <!-- w-full => w-fit -->
        <h2
          class="col-span-6 h-fit max-w-[47rem] text-[1.625rem] font-semibold text-white sm:col-span-3 md:col-span-3 md:pl-[2rem] lg:col-span-4 lg:pl-[4rem] xl:col-span-4 xl:text-[2.625rem]">
          {footer.title}
        </h2>
        <div
          class="col-span-6 flex flex-col gap-y-[2rem] sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <Button
            href={footer?.getStartedbtnLink}
            class="max-w-[11rem] border  border-[#E4E4E7] bg-[#8B5CF6] px-[2.44rem] py-[0.88rem]">
            {footer?.getStartedbtnText}
          </Button>

          <span>{footer?.sideText}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="">
  <!-- sm:hidden -->
  <div class="relative h-full">
    <div class="absolute top-[-6rem] z-50 sm:top-[-13rem] md:top-[-13rem]">
      <!-- top-[-5rem] -->
      <div class="px-5 md:hidden">
        <SanityImage
          class="h-full w-full rounded-[1.88rem] "
          src={footer?.backgroundOne}
          sizes="16vw"
          imageUrlBuilder={imgBuilder} />
        <div class="absolute inset-0 text-white">
          <div
            class="flex h-full flex-col items-center justify-center gap-y-[1rem] sm:gap-y-[2rem]">
            <h3 class="max-w-[11.75rem] text-center">
              Join more than 225,000+ customers that manage projects better
            </h3>

            <Button
              href={footer?.getStartedbtnLink}
              class="max-w-[11rem] border border-[#E4E4E7]  bg-[#8B5CF6] px-[2.44rem] py-[0.88rem] text-[1.125rem]">
              {footer?.getStartedbtnText}
            </Button>

            <span>{footer?.sideText}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex h-full max-w-full flex-col justify-center">
      <div
        style="background: linear-gradient(19deg, #4C1D95 11.11%, #5B21B6 43.75%, #212121 95.69%);"
        class="h-full">
        <div
          class="container z-50 mx-auto h-full gap-x-[6.56rem] pt-[12.5rem] lg:pt-[9.78rem]">
          <div class="grid h-full grid-cols-12 gap-x-5">
            <div class="col-span-12 md:col-span-6">
              <div class="flex gap-x-[0.61rem]">
                <SanityImage
                  class="h-[3.25rem] w-[3.25rem]"
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
                class="max-w-[31.25rem] text-[0.875rem] font-medium text-white">
                {footer?.newsLetter2ndText}
              </h2>
            </div>
            <div class="col-span-12 md:col-span-6">
              <div class="grid grid-cols-3 gap-x-[3.75rem]">
                <div
                  class="col-span-3 border-r-0 border-[#E4E4E733] md:col-span-1 md:border-r-[0.1rem]">
                  <h2
                    class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                    Browse
                  </h2>
                  <div class="flex w-fit flex-col gap-y-[1.125rem]">
                    {#each footer?.browse as link}
                      <a
                        href={link.internalLink}
                        class=" text-[0.875rem] font-normal text-white">
                        {link?.title}
                      </a>
                    {/each}
                    <div
                      class="mt-[1.25rem] h-[0.1rem] w-[5rem] bg-white md:hidden">
                    </div>
                  </div>
                </div>

                <div
                  class="col-span-3 border-r-0 border-[#E4E4E733] md:col-span-1 md:border-r-[0.1rem]">
                  <h2
                    class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                    About
                  </h2>
                  <div class="flex flex-col gap-y-[1.125rem]">
                    {#each footer?.about as link}
                      <a
                        href={link.internalLink}
                        class=" text-[0.875rem] font-normal text-white">
                        {link?.title}
                      </a>
                    {/each}
                    <div
                      class="mt-[1.25rem] h-[0.1rem] w-[5rem] bg-white md:hidden">
                    </div>
                  </div>
                </div>

                <div class="col-span-3 md:col-span-1">
                  <h2
                    class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                    Legal
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

          <div class="mt-[3.5rem] h-[0.1rem] bg-[#E4E4E733]"></div>
          <div
            class="mb-[2rem] mt-[2rem] flex flex-col justify-between md:flex-row">
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
</div>

<!-- <div
  class="  relative flex h-full max-w-full flex-col justify-center md:h-full">
  <div
    style="background: linear-gradient(19deg, #4C1D95 11.11%, #5B21B6 43.75%, #212121 95.69%);"
    class="h-full">
    <div
      class="container z-50 mx-auto h-full gap-x-[6.56rem] pt-[12.5rem] lg:pt-[9.78rem]">
      <div class="grid h-full grid-cols-12 gap-x-5">
        <div class="col-span-12 md:col-span-6">
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
          <h2 class="max-w-[31.25rem] text-[0.875rem] font-medium text-white">
            {footer?.newsLetter2ndText}
          </h2>
        </div>
        <div class="col-span-12 md:col-span-6">
          <div class="grid grid-cols-3 gap-x-[3.75rem]">
            <div
              class="col-span-3 border-r-0 border-[#E4E4E733] md:col-span-1 md:border-r-[0.1rem]">
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                Browse
              </h2>
              <div class="flex w-fit flex-col gap-y-[1.125rem]">
                {#each footer?.browse as link}
                  <a
                    href={link.internalLink}
                    class=" text-[0.875rem] font-normal text-white">
                    {link?.title}
                  </a>
                {/each}
                <div
                  class="mt-[1.25rem] h-[0.1rem] w-[5rem] bg-white md:hidden">
                </div>
              </div>
            </div>

            <div
              class="col-span-3 border-r-0 border-[#E4E4E733] md:col-span-1 md:border-r-[0.1rem]">
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                About
              </h2>
              <div class="flex flex-col gap-y-[1.125rem]">
                {#each footer?.about as link}
                  <a
                    href={link.internalLink}
                    class=" text-[0.875rem] font-normal text-white">
                    {link?.title}
                  </a>
                {/each}
                <div
                  class="mt-[1.25rem] h-[0.1rem] w-[5rem] bg-white md:hidden">
                </div>
              </div>
            </div>

            <div class="col-span-3 md:col-span-1">
              <h2
                class="mb-[2rem] mt-[1.06rem] text-[0.9375rem] font-semibold uppercase text-white lg:mt-[0rem]">
                Legal
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

      <div class="mt-[3.5rem] h-[0.1rem] bg-[#E4E4E733]"></div>
      <div
        class="mb-[2rem] mt-[2rem] flex flex-col justify-between md:flex-row">
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
</div> -->
