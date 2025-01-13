<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ContactFormProps } from '../../../../types/contact.types';

  let { props }: { props: ContactFormProps } = $props();

  let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
  class="container mb-10 mt-[2.5rem] grid min-h-[50rem] max-w-[75rem] grid-cols-2 gap-x-[1.88rem] gap-y-[2.5rem] border border-white lg:mt-[7.16rem] lg:min-h-[40rem]">
  <div class=" hidden sm:col-span-1 sm:block">
    <div class="h-full w-fit">
      <SanityImage
        lqip
        class="h-full w-full "
        src={props?.contactPageImage}
        sizes="100vw"
        imageUrlBuilder={imgBuilder} />
    </div>
  </div>
  <div
    class="col-span-2 {windowWidth >= 402 ? 'mt-[28rem]' : 'mt-[25rem]'}

            {windowWidth >= 403 ? 'mt-[28rem]' : 'mt-[25rem]'}

{windowWidth >= 436 ? 'mt-[31rem]' : 'mt-[25rem]'}
{windowWidth >= 470 ? 'mt-[34rem]' : 'mt-[25rem]'}

{windowWidth >= 506 ? 'mt-[37rem]' : 'mt-[25rem]'}

{windowWidth >= 507 ? 'mt-[620px]' : 'mt-[25rem]'}
{windowWidth >= 555 ? 'mt-[680px]' : 'mt-[25rem]'}
      
         border border-black sm:col-span-1 sm:mt-[0rem]">
    contact form
  </div>
</div>

<!-- 
windowWidth >= 440
          ? 'mt-[41rem]'
          : windowWidth >= 450 -->
