<script>
  import Topbar from '$lib/components/layout/topbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <Topbar />

  <main class="flex-1">
    <div class="container">
      <slot />
      <div>Password Reset/Recovery Options</div>
    </div>
  </main>
</div>
