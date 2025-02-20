<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  
  onMount(() => {
    goto('/work-orders/1');
  });
</script>

<div class="container mx-auto p-4">
  <p>Redirecting to work orders...</p>
</div>