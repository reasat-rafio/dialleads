<script lang="ts">
  import Banner from "$lib/components/common/banner/Banner.svelte";
  import VioletGradient from "$lib/components/pages/landing/hero/VioletGradient.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { PortableText } from "@portabletext/svelte";

  let { data } = $props();

  let {
    page: { title, banner, body, seo },
    site: {
      logos: { ogImage },
    },
  } = $derived(data);
</script>

<Seo {seo} siteOgImg={ogImage} />

<div class="mt-[5.31rem] md:mt-[10.37rem]">
  <div class="">
    <h1
      class="mx-auto mb-3 w-fit px-4 text-center font-geist text-[3rem] font-semibold leading-[115%] tracking-[-1px] md:px-0 lg:text-[4.25rem] lg:font-bold lg:leading-[5.125rem] lg:tracking-[-1.4px]">
      <PortableText
        value={title}
        components={{
          marks: {
            violetGradient: VioletGradient,
          },
        }} />
    </h1>

    <section class="container mt-[2rem] md:mt-[3.12rem]">
      <div class="prose max-w-none">
        <PortableText value={body} />
      </div>
    </section>

    <Banner props={banner} />
  </div>
</div>
