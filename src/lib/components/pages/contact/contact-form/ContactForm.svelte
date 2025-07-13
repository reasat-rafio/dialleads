<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import type { ContactFormProps } from "../../../../../types/contact.types";
  import ContactFormSvg from "./ContactFormSvg.svelte";


  let { contactPageImage, description, title }: ContactFormProps = $props();

  let isFormLoading = $state(true);
</script>

<svelte:head>
  <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
</svelte:head>

<section class="relative mx-auto mt-[2.5rem] w-full max-w-7xl px-5 lg:mt-[5rem] 2xl:px-0">

  <div class="grid min-h-[46.875rem] grid-cols-1 gap-x-[1.875rem] md:grid-cols-2">
    <div><!-- Empty cell to align with title/desc --></div>
    <div class="flex flex-col justify-center space-y-1">
      <h2 class="app-title-1">{title}</h2>
      <p class="app-body-3">{description}</p>
    </div>

    <div >
      <SanityImage
        class="hidden md:block mt-4 w-full h-auto rounded-[3.33rem]"
        lqip
        fadeInAnimation
        sizes="50vw"
        imageUrlBuilder={imgBuilder}
        src={contactPageImage}
        innerClass="w-full h-auto object-cover"
        alt={contactPageImage.alt} />
    </div>

    <div>
      <div class="relative mt-4 w-full overflow-hidden">
        {#if isFormLoading}
          <div class="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
            <div class="flex flex-col items-center space-y-2">
              <ContactFormSvg/>
              <p class="text-sm text-gray-800">Almost there…</p>
            </div>
          </div>
        {/if}

        <iframe
          onload={() => {
            isFormLoading = false;
          }}
          src="https://api.leadconnectorhq.com/widget/booking/ApgFKhpDXGU0goWaQFMp"
          class="h-[46.875rem] w-full"
          style="border:none;overflow: hidden;"
          scrolling="no"
          id="ApgFKhpDXGU0goWaQFMp_1751900196727"
          title="Book a call">
        </iframe>
      </div>
    </div>
  </div>
  
</section>
