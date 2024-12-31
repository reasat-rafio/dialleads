<script lang="ts">
  import type { Hero, HeroProps } from '../../../../../types/landing.types';

  let { props }: { props: HeroProps } = $props();
  let {hero}: {hero: Hero} = $derived(props);
</script>

<div class="absolute top-[8rem]">
    <div class="text-center">
        {#if Array.isArray(hero?.title[0]?.children) && Array.isArray(hero?.title[1]?.children)}
            <h2 class="text-[#FFF] font-bold text-7xl font-geist">{hero?.title[0]?.children[0]?.text}</h2>
            <h3 class="font-bold font-geist text-7xl bg-gradient-to-r 
            from-[#731AFF] via-[#731AFF] to-[#FCCEEE] 
            bg-clip-text text-transparent">
            {hero?.title[1]?.children[0]?.text}
        </h3>
        {/if}
    </div>
</div>
