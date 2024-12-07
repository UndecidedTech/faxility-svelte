<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let { data, totalPages, searchQuery } = $props();
  let { list, pagination } = data;
  let loading = $state(false);
	
	/**
	 * @param {string} page
	 * @param {any} pageSize
	 * @param {string} searchQuery
	 */
	async function loadData(page, pageSize, searchQuery) {
	  loading = true;
	  try {
	    // Fetch new data using fetch API
	    const url = `/api/work-orders?page=${page}&limit=${pageSize}&search=${searchQuery}`;
	    const response = await fetch(url, { method: 'GET', cache: 'no-cache' });
  const result = await response.json();

  const workOrders = result.list;
  pagination = result.pagination;
  } catch (unknownError) {
  const error = unknownError instanceof Error ? unknownError.message : String(unknownError);
  } finally {
  loading = false;
  }
}

  async function nextPage() {
    console.log(pagination.currentPage);
    if (pagination.currentPage < totalPages) {
      pagination.currentPage = pagination.currentPage + 1;
      await goto(`/work-orders/${pagination.currentPage + 1}`, { invalidateAll: true });
    }
  }

  async function prevPage() {
    if (pagination.currentPage > 0) {
      pagination.currentPage -= 1;
      await goto(`/work-orders/${pagination.currentPage}`, { invalidateAll: true });
    }
  }
</script>

<div class="mt-4 flex justify-between items-center">
  <button
    onclick={prevPage}
    disabled={pagination.currentPage === 1}
    class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
  >
    Previous
  </button>
  {#each Array(totalPages) as _, idx}
    <a 
      href="/work-orders/{idx + 1}"
      class={pagination.currentPage === idx + 1 ? 'text-emerald-300' : ''}
    >
      {idx + 1}
    </a>
  {/each}
  <button
    onclick={nextPage}
    disabled={pagination.currentPage === totalPages}
    class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
  >
    Next
  </button>
</div>
