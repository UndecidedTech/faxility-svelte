<script lang="ts">
  import Sidebar from '$lib/components/masterbook/Sidebar.svelte';
  import Toolbar from '$lib/components/masterbook/Toolbar.svelte';
</script>

<div class="flex h-[calc(100vh-4rem)]">
  <Sidebar />
  <div class="flex-1 flex flex-col overflow-hidden">
    <Toolbar />
    <div class="flex-1 bg-white">
      <!-- Content area without input field -->
    </div>
  </div>
</div>