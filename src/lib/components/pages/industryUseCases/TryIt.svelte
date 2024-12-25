<script>
  import Button from '$lib/components/ui/button/button.svelte';
  import { ArrowRight, Dot, Phone } from 'lucide-svelte';

  let data2 = $props();
  let data = {
    badgeText: 'Try it',
    title: 'Create Your Mortgage AI Agent in Minutes',
    description: `
Build your custom Mortgage Voice Agent quickly with our easy-to-use template! Set up inbound and outbound calls, schedule appointments, integrate with your CRM, and more—no technical expertise required.
Tailor the template to suit your needs and start driving results right away.

    `,
    btnText: 'Try Now ',
    image: '',
    personTitle: 'AI Mortgage Officer',
    supportTypes: [
      {
        icon: Phone,
        title: 'Loans',
      },
      {
        icon: null,
        title: 'Lead Qualification',
      },
    ],
    supportTypesDetails: [
      {
        icon: Phone,
        title: 'Type',
        description: 'OutBound Calls',
      },
      {
        icon: Phone,
        title: 'Voice',
        description: 'Clone Your Voice',
      },
      {
        icon: Phone,
        title: 'Languages',
        description: 'English, Spanish',
      },
      {
        icon: Phone,
        title: 'Type',
        description: 'OutBound Calls',
      },
    ],
  };
</script>

<!-- <div>Try it</div> -->
<div class="grid grid-cols-2 gap-x-[4.063rem]">
  <div class="col-span-1 rounded-lg border">
    <!-- // AI agent Feature Details  -->
    <div class="flex flex-col items-center justify-center">
      <img
        src="https://synthflow.ai/wp-content/uploads/2024/11/image-158.jpg"
        alt=""
        class="w-[6.25rem] rounded-full" />

      <h1 class="border text-[2rem] font-semibold">{data.personTitle}</h1>
      <div class="flex">
        {#each data.supportTypes as supportType, i}
          <div class="flex">
            {#if supportType.icon}
              <supportType.icon class="mt-1 text-gray-500" size="20" />
            {/if}
            <span class="pl-1 text-[1.125rem] text-gray-500">
              {supportType.title}
            </span>
          </div>
          {#if i !== data.supportTypes.length - 1}
            <Dot size={30} class="text-gray-600" />
          {/if}
        {/each}
      </div>
      <div class="grid grid-cols-2">
        {#each data.supportTypesDetails as details}
          <div class="border p-2">
            <div class="flex">
              {#if details.icon}
                <details.icon class="text-gray-500" size="20" />
              {/if}
              <span class="pl-1 text-[1.125rem] text-gray-500">
                {details.title}
              </span>
            </div>
            <p class="text-[1.125rem] text-gray-500">{details.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="col-span-1 max-w-[33.75rem]">
    <!-- // create AI Agent -->
    <div class="w-fit rounded-xl border px-2 py-1 text-[1.125rem]">
      {data.badgeText}
    </div>
    <h1 class="mt-4 text-[2.5rem] font-semibold">{data.title}</h1>
    <p class="mt-4 text-[1.125rem] text-[#6b7b94]">
      {data.description}
    </p>
    <Button class="mt-8 bg-[#5211B8] px-[1.5rem] py-[1.063rem] text-[1.25rem]">
      Try Now
      <ArrowRight size="24" />
    </Button>
  </div>
</div>
