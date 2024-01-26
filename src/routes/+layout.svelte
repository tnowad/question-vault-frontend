<script>
  import { navigating } from '$app/stores';
  import PreloadingIndicator from '$lib/components/PreloadingIndicator.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Question Vault</title>
</svelte:head>

<main>
  {#if $navigating}
    <PreloadingIndicator />
  {/if}

  <slot />
</main>
