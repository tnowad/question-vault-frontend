<script lang="ts">
  import { Bell, Icon, Inbox, UserCircle } from 'svelte-hero-icons';
  import SearchInput from '../features/search-input.svelte';
</script>

<header class="sticky top-0 h-16 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] flex">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" aria-label="Go to home" class="flex items-center">
      <img src="/favicon.png" alt="Logo" class="w-8 h-8" />
      <span class="ml-2 text-lg font-bold">Question Vault</span>
    </a>
    <SearchInput />
    <div class="flex items-center space-x-4" aria-label="User actions">
      <a href="/users/profile" aria-label="Go to profile" class="flex items-center">
        <Icon src={UserCircle} class="w-8 h-8" />
      </a>
      <button aria-label="Open inbox">
        <Icon src={Inbox} class="w-8 h-8" />
      </button>
      <button aria-label="Open notifications">
        <Icon src={Bell} class="w-8 h-8" />
      </button>
    </div>
  </div>
</header>
