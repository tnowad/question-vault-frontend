<script>
  export let placeholder = 'Search...';
  export let value = '';

  function handleChange(event) {
    value = event.target.value;
  }
</script>

<input
  type="text"
  {placeholder}
  class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
  bind:value
  on:input={handleChange}
/>
