<script>
  import Footer from '$lib/components/layout/Footer.svelte';
  import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
  import Topbar from '$lib/components/layout/Topbar.svelte';
</script>

<Topbar />

<main class="container mx-auto">
  <LeftSidebar />

  <div>
    <slot />
  </div>
</main>

<Footer />
