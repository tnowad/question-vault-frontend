<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<div>
  <header>
    <div>Logo: Clickable, takes users back to the homepage.</div>
    <div>Main Navigation Links: Categories, About Us, Help & Support.</div>
    <div>Search Bar: Prominently placed for easy access.</div>
    <div>
      User Account Access: Login/Signup buttons for guests; user profile and dashboard access for
      logged-in users.
    </div>
    <div>Notifications Icon: (For logged-in users) Quick access to recent notifications.</div>
  </header>

  <nav>
    <div>Home: Direct link to the homepage.</div>
    <div>Categories Dropdown: List of all question categories.</div>
    <div>Ask Question: Button/link to post a new question.</div>
    <div>Browse: Dropdown with options like Newest, Unanswered, Tags.</div>
    <div>Community Dropdown: Links to community forums, blogs, or events.</div>
    <div>Help: Links to FAQs, user guides, and contact support.</div>
  </nav>

  <slot />

  <Footer />
</div>
