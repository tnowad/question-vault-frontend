<script lang="ts">
  import { onMount } from 'svelte';
  import { Icon, Moon, Sun } from 'svelte-hero-icons';
  let isDarkMode = false;

  function handleDarkModeToggle() {
    isDarkMode = !isDarkMode;
  }

  onMount(() => {
    isDarkMode = localStorage.getItem('theme') === 'dark';

    if (!isDarkMode) {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });
</script>

<div class="flex items-center p-4">
  <button
    id="darkModeToggle"
    class="rounded-full p-2 focus:outline-none"
    aria-label={isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    on:click={handleDarkModeToggle}
    title={isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
  >
    {#if isDarkMode}
      <Icon src={Sun} class="h-6 w-6 text-yellow-400" solid />
    {:else}
      <Icon src={Moon} class="h-6 w-6 text-blue-300" solid />
    {/if}
  </button>
</div>
