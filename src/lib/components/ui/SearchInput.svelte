<script lang="ts">
  let { value = '', placeholder = 'Search...' } = $props();
  
  function handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    value = input.value;
  }
</script>

<div class="relative">
  <input
    type="text"
    {placeholder}
    value={value}
    oninput={handleInput}
    class="w-full p-2 pr-8 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
  <svg 
    class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2"
  >
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
</div>