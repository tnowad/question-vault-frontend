<script lang="ts">
  import { onMount } from 'svelte';
  import { Icon, MagnifyingGlass, XCircle } from 'svelte-hero-icons';

  export let placeholder = 'Search...';
  export let searchInputValue: string = '';

  let showSearchForm = false;
  let searchInput: HTMLInputElement;
  let searchModal: HTMLDivElement;
  let searchResult: { id: string; title: string; description: string; link: string }[] = [];

  async function fetchSearchResults(
    query: string,
  ): Promise<{ id: string; title: string; description: string; link: string }[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        id: '0',
        title: query,
        description: 'This is description',
        link: '/',
      },
      {
        id: '1',
        title: 'Second result',
        description: 'This is second description',
        link: '/',
      },
    ];
  }

  function toggleSearchForm() {
    showSearchForm = !showSearchForm;

    setTimeout(() => {
      if (showSearchForm) {
        searchInput.focus();
      }
    }, 0);
  }

  let debounceTimer: number;

  async function handleSearchInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    searchInputValue = target.value;
    if (!searchInputValue) {
      return;
    }

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      searchResult = await fetchSearchResults(searchInputValue);
    }, 300);
  }

  function handleClearSearchInput() {
    searchInputValue = '';

    setTimeout(() => {
      if (showSearchForm) {
        searchInput.focus();
      }
    }, 100);
  }
  onMount(() => {
    return () => {};
  });
</script>

<button
  class="flex h-8 w-full items-center justify-center rounded-md border border-gray-300 shadow-sm focus:outline-none"
  on:click={toggleSearchForm}
  aria-haspopup="true"
>
  <Icon src={MagnifyingGlass} class="mx-2 h-5 w-5" />
  <input
    type="text"
    {placeholder}
    class="focus:outline-none"
    bind:value={searchInputValue}
    aria-label="Search"
    aria-controls="search-results"
  />
</button>

{#if showSearchForm}
  <div
    bind:this={searchModal}
    role="dialog"
    aria-modal="true"
    aria-label="Search questions, users, answers ..."
    aria-labelledby="search-dialog-label"
    class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="container absolute top-0 rounded bg-white p-4 shadow-md">
      <form class="search-form">
        <div
          class="flex h-8 w-full items-center rounded-md border border-gray-300 shadow-sm focus:outline-none"
        >
          <Icon src={MagnifyingGlass} class="mx-2 h-5 w-5" />
          <input
            class="flex-1 focus:outline-none"
            bind:this={searchInput}
            bind:value={searchInputValue}
            type="text"
            placeholder="Enter your search query..."
            aria-label="Search"
            on:input={handleSearchInputChange}
          />

          {#if searchInputValue}
            <button aria-label="Clear" on:click={handleClearSearchInput}>
              <Icon src={XCircle} class="mx-2 h-5 w-5" />
            </button>
          {/if}
        </div>

        <div>
          <ul role="listbox" aria-label="Suggestions">
            {#each searchResult as result}
              <li
                role="option"
                aria-selected="false"
                class="search-result-item border-b border-gray-200 py-2"
              >
                <a href={result.link} class="block px-4 py-2 hover:bg-gray-100">
                  <h3 class="text-lg font-semibold text-gray-800">{result.title}</h3>
                  <p class="text-sm text-gray-600">{result.description}</p>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </form>
      <button
        on:click={() => {
          showSearchForm = false;
        }}
        aria-label="Close Search Form"
      >
        close
      </button>
    </div>
  </div>
{/if}
