<script>
  // import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let { workOrders, pagination } = $props();

  let pageSize = 10;
  let totalItems = $state(pagination.totalCount);
  let searchQuery = $state('');
  let currentPage = $state(Number($page.params.page) - 1);
  let totalPages = $state(Math.ceil(totalItems / pageSize))
  let loading = $state(false);
  let error = $state(null);

  function nextPage() {
    if (currentPage + 1 < totalPages) {
      currentPage = currentPage + 1;
      goto(`/work-orders/${currentPage + 1}`)
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage = currentPage - 1;
      goto(`/work-orders/${currentPage + 1}`)
    }
  }
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Work Orders</h1>

  <div class="mb-4">
    <input
      type="text"
      placeholder="Search work orders..."
      bind:value={searchQuery}
      class="w-full p-2 border border-gray-300 rounded"
    />
  </div>

  {#if loading}
    <p>Loading work orders...</p>
  {:else if error}
    <p class="text-red-500">Error: {error}</p>
  {:else}
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2 border border-gray-300">ID</th>
          <th class="p-2 border border-gray-300">Task Name</th>
          <th class="p-2 border border-gray-300">Description</th>
          <th class="p-2 border border-gray-300">Status</th>
          <th class="p-2 border border-gray-300">Priority</th>
          <th class="p-2 border border-gray-300">Requested By</th>
          <th class="p-2 border border-gray-300">Assigned To</th>
          <th class="p-2 border border-gray-300">Updated At</th>
        </tr>
      </thead>
      <tbody>
        {#if workOrders}
          {#each workOrders as order}
            <tr>
              <td class="p-2 border border-gray-300">{order.id}</td>
              <td class="p-2 border border-gray-300">{order.taskName}</td>
              <td class="p-2 border border-gray-300">{order.description}</td>
              <td class="p-2 border border-gray-300">{order.status}</td>
              <td class="p-2 border border-gray-300">{order.priority}</td>
              <td class="p-2 border border-gray-300">{order.requestedBy}</td>
              <td class="p-2 border border-gray-300">{order.faxilityUser}</td>
              <td class="p-2 border border-gray-300">{new Date(order.updatedAt).toLocaleString()}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>

    <div class="mt-4 flex justify-between items-center">
      <button
        onclick={prevPage}
        disabled={currentPage === 0}
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      {#each Array(totalPages) as _, idx}
        <a 
          href="/work-orders/{idx + 1}"
          class={currentPage === idx ? 'text-emerald-300' : ''}
        >
          {idx + 1}
        </a>
      {/each}
      <button
        onclick={nextPage}
        disabled={currentPage + 1 === totalPages}
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  {/if}
</div>
