<script>
  import Footer from '$lib/components/layout/footer.svelte';
  import LeftSidebar from '$lib/components/layout/left-sidebar.svelte';
  import Topbar from '$lib/components/layout/topbar.svelte';
</script>

<Topbar />

<main class="container mx-auto">
  <LeftSidebar />

  <div>
    <slot />
  </div>
</main>

<Footer />
