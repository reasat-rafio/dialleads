<script>
  import { Phone } from 'lucide-svelte';

  let data2 = $props();
  let data = {
    badgeText: 'Features',
    title: 'Cut your Contact Center Expenses by 80%',
    features: [
      {
        featureImage: Phone, // icon or image link.. should coming from sanity ..
        title: 'Boost Response Rates',
        description: `Let AI manage repetitive tasks like cold calling and chasing prospects, so you can focus on closing your top deals faster.`,
      },
      {
        featureImage: Phone,
        title: 'Qualify Leads in Seconds',
        description: `Follow up instantly with fresh leads and maximize every sales opportunity. Say goodbye to call fatigue and triple your productivity!`,
      },
      {
        featureImage: Phone,
        title: 'Revive Dormant Leads',
        description: `Seamlessly connect with your CRM to transform overlooked contacts into a powerful source of new revenue.`,
      },
    ],
  };
</script>

<!-- <div>Features V2</div> -->
<div class="flex flex-col items-center justify-center">
  <div class="w-fit rounded-xl border px-2 py-1 text-[1.125rem]">
    {data.badgeText}
  </div>
  <h1 class="text-[2.5rem] font-semibold">{data.title}</h1>
  <div class="grid grid-cols-3 gap-x-[1.5rem]">
    {#each data.features as feature}
      <div class="flex max-w-[25.688rem] flex-col rounded-lg border p-[1.5rem]">
        <div
          class="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-md">
          <feature.featureImage size="24" class="text-purple-600" />
        </div>
        <h2 class="mt-[0.875rem] text-[1.375rem] font-semibold">
          {feature.title}
        </h2>
        <p class="mt-[0.75rem] text-[1.125rem] text-[#66748a]">
          {feature.description}
        </p>
      </div>
    {/each}
  </div>
</div>
