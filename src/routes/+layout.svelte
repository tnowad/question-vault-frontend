<script lang="ts">
  import { navigating } from '$app/stores';
  import PreloadingIndicator from '$lib/components/common/preloading-indicator.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Question Vault</title>

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" href="/favicon.png" />

  <script>
    const savedTheme = localStorage.getItem('theme');
    const isThemeDark = savedTheme === 'dark';
    const prefersDarkMode =
      !savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDarkMode = isThemeDark || prefersDarkMode;
    document.documentElement.classList.toggle('dark', enableDarkMode);
  </script>
</svelte:head>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<slot />
