<script>
  export let siteName = 'Question Vault';
  export let quickLinks = ['Home', 'About Us', 'Categories'];
  export let supportResources = ['FAQs', 'Contact Us', 'Help Center'];
  export let communityLinks = ['Blog', 'Forums', 'Upcoming Events'];
  export let socialMediaIcons = ['Facebook', 'Twitter', 'Instagram'];
  export let legalLinks = ['Privacy Policy', 'Terms of Service', 'Copyright Info'];
</script>

<footer class="bg-gray-800 text-gray-300 py-8">
  <div class="container mx-auto grid grid-cols-3 gap-4">
    <!-- Column 1 -->
    <div>
      <div class="mb-4">Logo</div>
      <div>{siteName}</div>
    </div>

    <!-- Column 2 -->
    <div>
      <div class="mb-4">Quick Links:</div>
      {#each quickLinks as link}
        <div>{link}</div>
      {/each}
      <div class="mt-4">Support and Resources:</div>
      {#each supportResources as resource}
        <div>{resource}</div>
      {/each}
    </div>

    <!-- Column 3 -->
    <div>
      <div class="mb-4">Community Links:</div>
      {#each communityLinks as link}
        <div>{link}</div>
      {/each}
      <div class="mt-4">Social Media Icons:</div>
      {#each socialMediaIcons as icon}
        <div>{icon}</div>
      {/each}
      <div class="mt-4">Legal Section:</div>
      {#each legalLinks as link}
        <div>{link}</div>
      {/each}
    </div>
  </div>
</footer>
