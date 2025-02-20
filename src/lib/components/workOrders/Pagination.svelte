<script lang="ts">
  import type { PaginationData } from '$lib/types/workOrder';
  import { goto } from '$app/navigation';
  
//   interface PaginationProps {
//     pagination: PaginationData;
//     searchQuery?: string;
//   }
  
  let props = $props();
  
  async function goToPage(page: number) {
    if (page >= 1 && page <= props.pagination.totalPages) {
      await goto(`/work-orders/${page}${props.searchQuery ? `?search=${props.searchQuery}` : ''}`);
    }
  }
</script>

<div class="mt-4 flex justify-between items-center">
  <button
    type="button"
    onclick={() => goToPage(props.pagination.currentPage - 1)}
    disabled={props.pagination.currentPage === 1}
    class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
  >
    Previous
  </button>
  
  <div class="flex gap-2">
    {#each Array(props.pagination.totalPages) as _, idx}
      <button 
        type="button"
        onclick={() => goToPage(idx + 1)}
        class={`px-3 py-1 rounded ${
          props.pagination.currentPage === idx + 1 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {idx + 1}
      </button>
    {/each}
  </div>
  
  <button
    type="button"
    onclick={() => goToPage(props.pagination.currentPage + 1)}
    disabled={props.pagination.currentPage === props.pagination.totalPages}
    class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
  >
    Next
  </button>
</div>