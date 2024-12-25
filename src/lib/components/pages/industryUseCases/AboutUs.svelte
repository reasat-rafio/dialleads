<script>
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { Phone } from 'lucide-svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  let data2 = $props();
  let data = {
    badgeText: 'About Us',
    title: 'Welcome to the future of Customer Communication',
    description: `Synthflow is one of the fastest-growing voice AI companies, with deep
      expertise in AI research and robust infrastructure to deliver exceptional,
      human-like voice interactions. With offices in Germany and the US and a
      global team of over 30 dedicated professionals, Synthflow is on the
      mission to bring the best-in-class voice experiences.`,
    stats: [
      {
        icon: Phone,
        value: '10,000,000+',
        title: 'Calls Processed',
      },
      {
        icon: Phone,
        value: '$9M Raised',
        title: 'From renowned investors in the AI space',
      },
      {
        icon: Phone,
        value: '30,000+ Customers',
        title: 'Using Synthflow’s voice AI agents',
      },
    ],
    groupOneText: 'Featured In',
    groupOneImages: [
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
    ],
    groupTwoText: 'Customers',
    groupTwoImages: [
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
      {
        image:
          'https://synthflow.ai/wp-content/uploads/2024/11/Image-Container-4.webp',
      },
    ],
  };
</script>

<!-- <div>About Us</div> -->
<div class="grid grid-cols-2 gap-x-[2.5rem]">
  <div class="max-w-[40rem]">
    <!-- // about us -->
    <div class="w-fit rounded-xl border px-2 py-1 text-[1.125rem]">
      {data.badgeText}
    </div>

    <h1 class="text-[2.5rem] font-semibold">{data.title}</h1>
    <p class="text-[1.125rem] text-[#6b7b94]">
      {data.description}
    </p>

    <div>
      {#each data.stats as stat}
        <div class="mb-[1.5rem] flex gap-x-[1.125rem]">
          <div
            class="flex h-[3.625rem] w-[3.625rem] items-center justify-center rounded-md border">
            <stat.icon size="24" />
          </div>
          <div>
            <div class="text-[1.375rem] font-semibold text-[#702ed6]">
              {stat.value}
            </div>
            <div class="text-[1.125rem] text-[#66748a]">{stat.title}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="grid max-w-[40rem] grid-cols-2 border">
    <!-- // featured In -->
    <div class="col-span-2"></div>

    {#each data.groupOneImages as image}
      <!-- <SanityImage
        class="h-6 w-auto"
        src={image.image}
        sizes="10vw"
        imageUrlBuilder={imgBuilder} /> -->
    {/each}
  </div>
</div>
