<script>
  import { Icon } from 'svelte-hero-icons';
</script>

<footer class="bg-white dark:bg-gray-900 border-t border-gray-200">
  <div class="py-6 lg:py-8 container">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src="/favicon.svg" class="h-8 me-3" alt="Your Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Question Vault
          </span>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
        <div class="mb-8 md:mb-0">
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-2">
              <a href="/" class="hover:underline">Example Link 1</a>
            </li>
            <li>
              <a href="/" class="hover:underline">Example Link 2</a>
            </li>
          </ul>
        </div>
        <div class="mb-8 md:mb-0">
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-2">
              <a href="/" class="hover:underline">Example Link 3</a>
            </li>
            <li>
              <a href="" class="hover:underline">Example Link 4</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-2">
              <a href="/" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="flex w-full items-center justify-center">
      <span class="text-sm text-gray-500 dark:text-gray-400">
        © 2024 <a href="/" class="hover:underline">Question Vault</a>. All Rights Reserved.
      </span>
    </div>
  </div>
</footer>
