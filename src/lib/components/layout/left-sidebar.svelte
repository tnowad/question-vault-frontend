<script>
  import { Home, Icon, QuestionMarkCircle, Tag } from 'svelte-hero-icons';

  let links = [
    { text: 'Home', href: '/', icon: Home },
    { text: 'Questions', href: '/questions', icon: QuestionMarkCircle },
    { text: 'Categories', href: '/categories', icon: Tag },
  ];
</script>

<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
  <ul class="space-y-2 font-medium">
    {#each links as link}
      <li>
        <a
          href={link.href}
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icon src={link.icon} class="h-5 w-5" />
          <span class="ms-3">{link.text}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
