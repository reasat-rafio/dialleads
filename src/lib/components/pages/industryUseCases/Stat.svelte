<script lang="ts">
  import type { StatProps } from '../../../../types/industryUseCases.types';

  let { props }: { props: StatProps } = $props();
</script>

<div class="container mx-auto mb-[7.5rem] mt-[7.5rem]">
  <div class="grid grid-cols-7 items-center gap-x-[5.81rem]">
    <div class="col-span-3">
      <h3
        class="text-[1.125rem] font-semibold leading-[1.6875rem] text-[#6D28D9]">
        {props.tagline}
      </h3>

      {#if Array.isArray(props?.title[0]?.children) && Array.isArray(props?.title[1]?.children) && Array.isArray(props?.title[2]?.children)}
        <h2 class="text-[3rem] font-semibold leading-[3.6rem]">
          {props?.title[0]?.children[0]?.text}
          <span class="text-[#6D28D9]">{props.title[1].children[0]?.text}</span>
          {props.title[2].children[0]?.text}
        </h2>
      {/if}

      <p class="text-[1.25rem] font-normal leading-[1.875rem]">
        {props.description}
      </p>
    </div>
    <div class="col-span-4">
      <div class="grid grid-cols-3 justify-center gap-x-[3.78rem]">
        {#each props.stats as stat}
          <div class="col-span-1">
            <h3 class="text-center text-[3rem] font-semibold leading-[3.6rem]">
              {stat.value}
            </h3>
            <p
              class="mt-[0.75rem] text-center text-[1.375rem] font-semibold leading-[2.0625rem]">
              {stat.title}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
