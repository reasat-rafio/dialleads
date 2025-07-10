<script lang="ts">
  import { onMount } from "svelte";

  let { mov, webm, isIntersecting }: { mov: string; webm: string; isIntersecting: boolean } = $props();

  let videoEl: HTMLVideoElement;

  onMount(() => {
    if (videoEl) {
      if (isIntersecting) videoEl.play();
      else videoEl.pause();
    }
  });
</script>

<div class="relative aspect-video max-h-[70vh] max-w-screen-2xl flex-[0_0_100%] overflow-hidden lg:rounded-lg">
  <video
    bind:this={videoEl}
    class="absolute inset-0 h-full w-full object-cover"
    width="100%"
    height="100%"
    disablePictureInPicture
    controlsList="nodownload noplaybackrate"
    controls={false}
    playsInline
    muted
    loop>
    <source src={mov} type="video/mp4; codecs=hvc1" />
    <source src={webm} type="video/webm" />
    Sorry, your browser doesn&apos;t support embedded videos.
  </video>
</div>
