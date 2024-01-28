<script>
  import { navigating } from '$app/stores';
  import PreloadingIndicator from '$lib/components/common/PreloadingIndicator.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Question Vault</title>
</svelte:head>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<main>
  <slot />
</main>
