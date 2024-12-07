<script>
  import WorkOrderTable from '$lib/components/WorkOrderTable.svelte';
  import Pagination from '$lib/components/Pagination.svelte';

  let { data } = $props();
  let { workOrders, pagination } = data;

  let pageSize = 10;
  let totalItems = $state(pagination.totalCount);
  let searchQuery = $state('');
  let totalPages = $state(Math.ceil(totalItems / pageSize));
  let loading = $state(false);
  let error = $state(null);
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
    <WorkOrderTable {workOrders} />
    <Pagination {data} {totalPages} {searchQuery} />
  {/if}
</div>
