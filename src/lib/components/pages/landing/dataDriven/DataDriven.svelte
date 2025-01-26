<script lang="ts">
  import SectionIconAndName from '$lib/components/common/sectionIconAndName.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import type { DataDrivenProps } from '../../../../../types/landing.types';

  let { props }: { props: DataDrivenProps } = $props();
  let { dataDriven } = $derived(props);
  let {
    sectionDetails: { sectionName, sectionIcon },
  } = $derived(dataDriven);
</script>

<div class="px-5 xl:px-0">
  <SectionIconAndName
  sectionTitleClass="max-w-[56.6875rem] mx-auto"
   {sectionName} {sectionIcon} sectionTitle={dataDriven?.title} />
  <p
    class="mx-auto mt-[0.88rem] w-full text-center
  text-base font-normal text-[#212121] lg:w-[56.688rem] lg:text-xl lg:leading-[1.875rem]">
    {dataDriven?.description}
  </p>
  <div class="mt-[1.63rem] flex justify-center">
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
  <p
    class="mt-[1.38rem] flex justify-center text-lg font-normal text-[#212121]">
    No credit card required.
  </p>
</div>
