<script lang="ts">
  import WorkOrderTable from '$lib/components/workOrders/WorkOrderTable.svelte';
  import Pagination from '$lib/components/workOrders/Pagination.svelte';
  import SearchInput from '$lib/components/ui/SearchInput.svelte';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  let { data } = $props<{ data: PageData }>();
  let { workOrders, pagination } = data;

  let searchQuery = $state('');
  let loading = $state(false);
  let error = $state(null);

  $effect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        handleSearch();
      }, 300);
      return () => clearTimeout(timer);
    }
  });

  async function handleSearch() {
    loading = true;
    try {
      const url = `/work-orders/1${searchQuery ? `?search=${searchQuery}` : ''}`;
      await goto(url);
    } catch (e) {
      error = e instanceof Error ? e.message : 'An error occurred';
    } finally {
      loading = false;
    }
  }
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Work Orders</h1>
  </div>

  <div class="mb-6 max-w-md">
    <SearchInput 
      value={searchQuery} 
      placeholder="Search work orders..." 
    />
  </div>

  {#if loading}
    <div class="flex justify-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  {:else if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {error}
    </div>
  {:else}
    <WorkOrderTable {workOrders} />
    <Pagination {pagination} {searchQuery} />
  {/if}
</div>