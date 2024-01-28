<script lang="ts">
  import { Icon, UserCircle } from 'svelte-hero-icons';
</script>

<header class="sticky top-0 h-16 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] flex">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Website Logo -->
    <a href="/" aria-label="Go to home" class="flex items-center">
      <img src="/favicon.png" alt="Logo" class="w-8 h-8" />
      <span class="ml-2 text-lg font-bold">Question Vault</span>
    </a>
    <div>
      <input type="text" aria-label="Search" />
    </div>
    <div>
      <Icon src={UserCircle} class="w-8 h-8" />
    </div>
  </div>
</header>
