<script lang="ts">
  import { Bell, Icon, Inbox, UserCircle } from 'svelte-hero-icons';
  import SearchInput from '../features/search-input.svelte';

  let isAuthenticated = false;
</script>

<header class="sticky top-0 flex h-16 border-b border-gray-200 bg-white dark:bg-gray-900">
  <div class="container flex items-center justify-between space-x-1 text-sm">
    <a href="/" aria-label="Go to home" class="flex items-center">
      <img src="/favicon.png" alt="Logo" class="h-8 w-8" />
      <span class="ml-2 text-lg font-bold">Question Vault</span>
    </a>

    <div class="flex items-center space-x-1" aria-label="User actions">
      <SearchInput />

      {#if isAuthenticated}
        <a href="/users/profile" aria-label="Go to profile" class="flex items-center">
          <Icon src={UserCircle} class="h-8 w-8" />
        </a>
        <button aria-label="Open inbox">
          <Icon src={Inbox} class="h-8 w-8" />
        </button>
        <button aria-label="Open notifications">
          <Icon src={Bell} class="h-8 w-8" />
        </button>
      {:else}
        <a
          href="/sign-in"
          class="h-8 whitespace-nowrap rounded-md border border-gray-300 px-4 leading-8 shadow-sm"
          >Sign In</a
        >
        <a
          href="/sign-up"
          class="h-8 whitespace-nowrap rounded-md border border-gray-300 px-4 leading-8 shadow-sm"
          >Sign Up</a
        >
      {/if}
    </div>
  </div>
</header>
