<script lang="ts">
  export let data;

  // $: ({
  //   page: { sections },
  // } = data);
</script>

<div class="flex max-w-full flex-col items-center justify-center">
  Hello From +Page.svelte

  <!-- {#if !!sections?.length}
    {#each sections as props}
      {#if props._type === 'landing.hero'}
        <Hero {props} />
      {:else if props._type === 'landing.video'}
        <Video {props} />
      {:else if props._type === 'landing.service'}
        <Service {props} />
      {:else if props._type === 'landing.featuredProjects'}
        <FeaturedProjects {props} />
      {:else if props._type === 'landing.recentStuff'}
        <RecentStuff {props} />
      {:else if props._type === 'landing.weWorkWith'}
        <WeWorkWith {props} />
      {:else if props._type === 'landing.videoWithText'}
        <VideoWithText {props} />
      {:else if props._type === 'landing.feedbacks'}
        <Feedbacks {props} />
      {/if}
    {/each}
  {/if} -->
</div>
