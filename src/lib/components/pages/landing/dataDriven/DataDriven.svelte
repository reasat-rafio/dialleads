<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { DataDrivenProps } from '../../../../../types/landing.types';
  import Section from './Section.svelte';

  let { props }: { props: DataDrivenProps } = $props();
  let { dataDriven } = $derived(props);
  let {
    sectionDetails: { sectionName, sectionIcon },
  } = $derived(dataDriven);
  $inspect(sectionIcon);
</script>

<div class="px-5 xl:px-0">
  <Section {sectionName} {sectionIcon} />
  <h3
    class="mx-auto mt-4 w-full lg:w-[56.6875rem]
  text-center text-xl lg:text-5xl font-semibold lg:leading-[3.6rem] text-[#212121]">
    {dataDriven?.title}
  </h3>
  <p
    class="mx-auto mt-[0.88rem] w-full lg:w-[56.688rem]
  text-center text-base lg:text-xl font-normal lg:leading-[1.875rem] text-[#212121]">
    {dataDriven?.description}
  </p>
  <div class="flex justify-center mt-[1.63rem]">
    <Button
      class="flex h-14 w-[18.3124rem] items-center rounded-[0.75rem] bg-[#8B5CF6]">
      <p class="text-lg font-medium">{dataDriven?.cta?.title}</p>
      <SanityImage
        class="h-[1.210945rem] w-[1.75rem] "
        src={dataDriven?.cta?.icon}
        sizes="5vw"
        imageUrlBuilder={imgBuilder}
        alt={dataDriven?.cta?.icon?.alt || 'icon'} />
    </Button>
  </div>
  <p class="text-[#212121] text-lg font-normal flex justify-center mt-[1.38rem]">No credit card required.</p>
</div>
