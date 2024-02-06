<script>
  import { Home, Icon, QuestionMarkCircle, Tag } from 'svelte-hero-icons';

  let links = [
    { text: 'Home', href: '/', icon: Home },
    { text: 'Questions', href: '/questions', icon: QuestionMarkCircle },
    { text: 'Categories', href: '/categories', icon: Tag },
  ];
</script>

<div class="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
  <ul class="space-y-2 font-medium">
    {#each links as link}
      <li>
        <a
          href={link.href}
          class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          <div aria-hidden>
            <Icon src={link.icon} class="h-5 w-5" />
          </div>
          <span class="ms-3">{link.text}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
