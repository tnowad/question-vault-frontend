<script>
  import Footer from '$lib/components/layout/footer.svelte';
  import LeftSidebar from '$lib/components/layout/left-sidebar.svelte';
  import Topbar from '$lib/components/layout/topbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <Topbar />

  <main class="flex-1">
    <div class="container grid grid-cols-12">
      <div class="hidden md:col-span-4 md:block lg:col-span-3 xl:col-span-2">
        <div class="sticky top-16 h-auto">
          <LeftSidebar />
        </div>
      </div>
      <div class="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10">
        <slot />
      </div>
    </div>
  </main>

  <Footer />
</div>
