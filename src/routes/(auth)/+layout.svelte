<script>
  import Topbar from '$lib/components/layout/topbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <Topbar />

  <main class="flex-1">
    <slot />
  </main>
</div>
