<script>
  import Footer from '$lib/components/layout/footer.svelte';
  import LeftSidebar from '$lib/components/layout/left-sidebar.svelte';
  import Topbar from '$lib/components/layout/topbar.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Topbar />

  <main class="flex-1">
    <div class="container grid grid-cols-12">
      <div class="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-2">
        <div class="top-16 sticky h-auto">
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
