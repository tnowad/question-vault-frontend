<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
    Input,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownDivider,
    Avatar,
    Indicator,
    Modal,
    DarkMode,
  } from 'flowbite-svelte';
  import { Icon, MagnifyingGlass, EyeSlash, BellAlert } from 'svelte-hero-icons';

  let isAuthenticated = false;
  let isOpenSearchModal = false;
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Question Vault Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Question Vault</span
    >
  </NavBrand>

  <div class="flex md:order-2 md:space-x-2">
    <Button
      color="none"
      data-collapse-toggle="mobile-menu-3"
      aria-controls="mobile-menu-3"
      aria-expanded="false"
      class="me-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
    >
      <Icon src={MagnifyingGlass} class="h-5 w-5" />
    </Button>

    <div
      role="button"
      class="relative hidden md:block"
      on:click={() => {
        isOpenSearchModal = true;
      }}
    >
      <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Icon src={MagnifyingGlass} class="h-5 w-5" />
      </div>
      <Input id="search-navbar" class="ps-10" placeholder="Search..." />
    </div>
    <DarkMode />

    {#if isAuthenticated}
      <Button
        color="none"
        data-collapse-toggle="mobile-menu-3"
        aria-controls="mobile-menu-3"
        aria-expanded="false"
        id="notification-menu"
        class="relative me-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <Icon src={BellAlert} class="h-5kj w-5" />
        <span class="sr-only">Notifications</span>
        <Indicator border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
      </Button>

      <Avatar class="acs" src="/images/profile.jpg" id="avatar-menu" dot={{ color: 'green' }} />
    {:else}
      <Button href="/" class="p-2 text-sm">Sign in</Button>
      <Button href="/" outline class="p-2 text-sm">Sign up</Button>
    {/if}

    <NavHamburger />
  </div>

  <Modal bind:open={isOpenSearchModal} placement="top-center">
    <div role="button" class="relative hidden md:block">
      <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Icon src={MagnifyingGlass} class="h-5 w-5" />
      </div>
      <Input id="search-navbar" class="ps-10" placeholder="Search..." />
    </div>
  </Modal>

  <Dropdown
    triggeredBy="#notification-menu"
    class="w-full max-w-sm divide-y divide-gray-100 rounded shadow dark:divide-gray-700 dark:bg-gray-800"
  >
    <div slot="header" class="py-2 text-center font-bold">Notifications</div>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/profile.png" dot={{ color: 'bg-gray-300' }} rounded />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
          New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span
          >
          : "Hey, what's up? All set for the presentation?"
        </div>
        <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/profile-picture-2.webp" dot={{ color: 'bg-red-400' }} rounded />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
          and
          <span class="font-medium text-gray-900 dark:text-white">5 others</span>
          started following you.
        </div>
        <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'bg-green-400' }} rounded />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
          and
          <span class="font-medium text-gray-900 dark:text-white">141 others</span>
          love your story. See it and view more stories.
        </div>
        <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
      </div>
    </DropdownItem>
    <a
      slot="footer"
      href="/"
      class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    >
      <div class="inline-flex items-center">
        <Icon src={EyeSlash} class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        View all
      </div>
    </a>
  </Dropdown>

  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@email.com</span>
    </DropdownHeader>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>

  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
  </NavUl>
</Navbar>
