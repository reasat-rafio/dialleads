<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { ContactFormProps } from '../../../../types/contact.types';

  let { props }: { props: ContactFormProps } = $props();
</script>

<div
  class="container mb-10 mt-[7.16rem] grid min-h-[50rem] max-w-[75rem] grid-cols-2 gap-x-[1.88rem] border border-white">
  <div class="col-span-1">
    <!-- border border-black -->
    <div class="h-full w-full">
      <SanityImage
        class="h-full w-full "
        src={props?.contactPageImage}
        sizes="100vw"
        imageUrlBuilder={imgBuilder} />
      <!-- bg-no-repeat object-cover -->
    </div>
  </div>
  <div class="col-span-1 border border-black">contact form</div>
</div>
