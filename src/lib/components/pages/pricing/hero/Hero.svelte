<script lang="ts">
  import type { Plan } from "../../../../../types/landing.types";
  import type { HeroProps } from "../../../../../types/pricing.types";
  import Section from "./Section.svelte";

    interface Props{
        props: HeroProps;
        plans: Plan[];
    }
  let { props, plans }: Props = $props();
  let {hero} = $derived(props);
</script>

<div class="absolute top-[10rem] -translate-y-1/2 left-1/2 -translate-x-1/2">
    <Section {hero} />
</div>
