<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { SiteDataProps } from '../../../../types/site.types';

  let { footer }: { footer: SiteDataProps['footer'] } = $props();
</script>

<div class=" relative bg-footer-gradient">
  <div class="container">
    <div>
      <SanityImage
        class="h-[3.25rem] w-[3.25rem]"
        src={footer?.companyLogo}
        sizes="16vw"
        imageUrlBuilder={imgBuilder} />
    </div>
  </div>
</div>
