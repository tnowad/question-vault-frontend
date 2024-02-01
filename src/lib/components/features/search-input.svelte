<script>
  import { Icon, MagnifyingGlass } from 'svelte-hero-icons';
  import { writable } from 'svelte/store';

  export let placeholder = 'Search...';
  export let value = '';

  let showModal = writable(false);

  function handleClick() {
    showModal.set(true);
  }

  function handleExit() {
    showModal.set(false);
  }
</script>

<div
  class="flex h-8 w-full items-center justify-center rounded-md border border-gray-300 shadow-sm focus:outline-none"
>
  <Icon src={MagnifyingGlass} class="mx-2 h-5 w-5" />
  <input
    role="button"
    type="text"
    {placeholder}
    class="focus:outline-none"
    bind:value
    on:click={handleClick}
  />
</div>
