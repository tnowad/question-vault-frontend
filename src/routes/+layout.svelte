<script>
  import { navigating } from '$app/stores';
  import PreloadingIndicator from '$lib/components/common/preloading-indicator.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Question Vault</title>

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<main>
  <slot />
</main>
