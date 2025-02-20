<script lang="ts">
  import type { WorkOrder } from '$lib/types/workOrder';
  import WorkOrderRow from './WorkOrderRow.svelte';
  
  let { workOrders } = $props<{ workOrders: WorkOrder[] }>();
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-100">
        <th class="p-2 border border-gray-300 text-left">ID</th>
        <th class="p-2 border border-gray-300 text-left">Title</th>
        <th class="p-2 border border-gray-300 text-left">Description</th>
        <th class="p-2 border border-gray-300 text-left">Status</th>
        <th class="p-2 border border-gray-300 text-left">Created At</th>
      </tr>
    </thead>
    <tbody>
      {#each workOrders as order (order.id)}
        <WorkOrderRow {order} />
      {/each}
    </tbody>
  </table>
</div>