<script lang="ts">
  import type { Plan } from '../../../../../types/landing.types';
  import type { SubscriptionDetailsProps } from '../../../../../types/pricing.types';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import PricingCard from './PricingCard.svelte';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import type { Inspect } from 'lucide-svelte';
  import subsCriptionDetails from '$studio/schemas/pages/pricing/subsCriptionDetails';

  interface Props {
    props: SubscriptionDetailsProps;
    plans: Plan[];
    saveUpTo: number;
  }
  let { props, plans, saveUpTo }: Props = $props();
  let {
    subscriptionDetails: { features },
  } = $derived(props);
  let selectedSubscriptionType = $state('monthly');
  $inspect(features[0]?.featureLists[0]?.values[0]?.relatedPlan?.name)
</script>

<div class="container mx-auto">
  <Tabs.Root value={plans[0]?.planName?.name} class="">
    <Tabs.List class="flex justify-center">
      {#each plans as plan}
        <Tabs.Trigger value={plan?.planName?.name}>
          {plan?.planName?.name}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>
    {#each plans as plan}
      <Tabs.Content value={plan?.planName?.name}>
        <PricingCard {plan} bind:selectedSubscriptionType {saveUpTo} />
        {#each features as feature}
          <div class="flex items-center gap-4 pl-[.8rem] pt-10">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#EDE9FE]">
              <SanityImage
                class="h-5 w-5"
                src={feature?.featureIcon}
                imageUrlBuilder={imgBuilder}
                alt="featureTitleIcon" />
            </div>
            <p class="text-2xl text-black">
              {feature?.featureHeading}
            </p>
          </div>

          {#each feature?.featureLists as list}
            <div>
              {#each list.featureName.split('*') as part, index}
                {part}
                {#if index < list.featureName.split('*').length - 1}
                  <span class="text-red-500">*</span>
                {/if}
              {/each}

              {#each list?.values as value}
                {#if value.type === 'text'}
                  <p>{value.text}</p>
                {:else if value.type === 'status'}
                  {#if value.isAvailable}
                    <p class="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none">
                        <g clip-path="url(#clip0_715_7081)">
                          <path
                            d="M5.625 9.50293L7.875 11.7529L12.375 7.25293M16.5 9.50293C16.5 13.6451 13.1421 17.0029 9 17.0029C4.85786 17.0029 1.5 13.6451 1.5 9.50293C1.5 5.36079 4.85786 2.00293 9 2.00293C13.1421 2.00293 16.5 5.36079 16.5 9.50293Z"
                            stroke="#6D28D9"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_715_7081">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(0 0.50293)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  {:else}
                    <p
                      class="mx-auto flex h-[0.125rem] w-[0.875rem] items-center justify-center">
                      -
                    </p>
                  {/if}
                {/if}
              {/each}
            </div>
          {/each}
        {/each}
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
