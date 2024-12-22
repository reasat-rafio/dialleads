<script lang="ts">
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import { ChevronDown, ChevronUp } from 'lucide-svelte';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button } from '../ui/button';

  interface Props {
    nav: any;
    logo: any;
  }
  function toggleNavbar() {
    showMenu = !showMenu;
    dialogOpen = !dialogOpen;
  }
  let expanded: { [key: string]: boolean } = $state({});
  let dialogOpen = $state(false);
  let props: Props = $props();
  let { nav, logo } = props;
  let showMenu = $state(false);
  let activeDropdown: string | null = $state(null);
  let timeout: any;
  let windowWidth = $state(0);

  function toggleDropdown(item: string) {
    // Check if the item is already expanded.
    const isAlreadyExpanded = expanded[item];

    // Reset all expanded states.
    expanded = {};

    // Set the current item's expanded state to the opposite of its current state
    // only if it was not already expanded.
    if (!isAlreadyExpanded) {
      expanded[item] = true;
    }
  }
  function showDropdown(title: string) {
    clearTimeout(timeout);
    activeDropdown = title;
  }

  function hideDropdown() {
    timeout = setTimeout(() => {
      activeDropdown = null;
    }, 500);
  }

  $effect(() => {
    if (windowWidth >= 1024) showMenu = false;
  });

  function handleFocus(title: string) {
    // Replicate hover behavior on focus for accessibility
    showDropdown(title);
  }

  function handleBlur() {
    // Replicate mouseout behavior on blur for accessibility
    hideDropdown();
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="w-screen">
  <nav
    class="container mx-auto flex items-center justify-between px-2 py-4 lg:px-16">
    <div class="flex items-center">
      <a href="/">
        <SanityImage
          class="h-6 w-auto"
          src={logo}
          sizes="10vw"
          imageUrlBuilder={imgBuilder} />
      </a>
    </div>
    <div class="hidden lg:flex lg:items-center lg:space-x-8">
      {#each nav.menu as { title, href, moreLinks }}
        <div
          role="button"
          tabindex="0"
          class="relative flex"
          onmouseover={() => showDropdown(title)}
          onmouseout={hideDropdown}
          onfocus={() => handleFocus(title)}
          onblur={handleBlur}>
          <a {href} class="text-gray-500 hover:text-black">{title}</a>
          {#if moreLinks}
            <ChevronDown class="mt-0 text-gray-500" />
          {/if}

          {#if moreLinks && activeDropdown === title}
            <div
              class="absolute left-0 top-5 mt-2 w-48 rounded-md bg-white opacity-0 shadow-lg transition-opacity delay-150 duration-500 fade-in"
              class:opacity-100={activeDropdown === title}>
              {#each moreLinks as { title, href }}
                <a
                  {href}
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e4e2e9]">
                  {title}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
      <div>
        <Button variant="link">Login</Button>
        <Button variant="outline">Free Trial</Button>
      </div>
    </div>
    <button
      onclick={toggleNavbar}
      class="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </nav>
</div>

<!-- {#if showMenu} -->
<!-- <div class="fixed inset-0 z-10 bg-white lg:hidden">
    <div class="p-4">
      <div class="flex items-center justify-between">
        <SanityImage
          class="h-6 w-auto"
          src={logo}
          sizes="10vw"
          imageUrlBuilder={imgBuilder} />
        <button onclick={toggleNavbar} class="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-8 text-center">
        {#each nav.menu as { title, href }}
          <a
            {href}
            class="my-4 block text-gray-700 hover:text-black"
            onclick={toggleNavbar}>
            {title}
          </a>
        {/each}
      </div>
    </div>
  </div> -->

<Dialog.Root bind:open={dialogOpen}>
  <!-- <Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
      Edit Profile
    </Dialog.Trigger> -->
  <Dialog.Trigger />
  <Dialog.Content class="sm:max-w-[425px]">
    <!-- <Dialog.Header>
      <Dialog.Title>Edit profile</Dialog.Title>
      <Dialog.Description>
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>
    </Dialog.Header>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="username" class="text-right">Username</Label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <Dialog.Footer>
      <Button type="submit">Save changes</Button>
    </Dialog.Footer> -->

    <div class="mt-4">
      {#each nav.menu as { title, href, moreLinks }}
        <div class="block">
          <button
            class="flex w-full items-center justify-between px-2 py-2 text-gray-700 hover:bg-[#E4E2E9] hover:text-black"
            onclick={() => toggleDropdown(title)}>
            <span>{title}</span>
            {#if moreLinks}
              {#if expanded[title]}
                <ChevronUp />
              {:else}
                <ChevronDown />
              {/if}
            {/if}
          </button>
          {#if expanded[title] && moreLinks}
            <div class="pl-4">
              {#each moreLinks as { title, href }}
                <a
                  {href}
                  class="block px-2 py-1 text-gray-500 hover:bg-[#E4E2E9] hover:text-black"
                  onclick={toggleNavbar}>
                  {title}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </Dialog.Content>
</Dialog.Root>

<!-- {/if} -->

<style>
  .fade-in {
    transition: opacity 0.5s ease-in-out;
  }
</style>
