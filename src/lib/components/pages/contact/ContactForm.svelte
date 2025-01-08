<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ContactFormProps } from '../../../../types/contact.types';

  let { props }: { props: ContactFormProps } = $props();
</script>

<div
  class="container mb-10 mt-[2.5rem] grid min-h-[10rem] max-w-[75rem] grid-cols-2 gap-x-[1.88rem] gap-y-[2.5rem] border border-white lg:mt-[7.16rem] lg:min-h-[40rem]">
  <div class="col-span-2 md:col-span-1">
    <div class="h-full w-full">
      <SanityImage
        class="h-full w-full "
        src={props?.contactPageImage}
        sizes="100vw"
        imageUrlBuilder={imgBuilder} />
    </div>
  </div>
  <div class="col-span-2 border border-black md:col-span-1">contact form</div>
</div>
