<script lang="ts">
  import type { WorkOrder } from '$lib/types/workOrder';
  import WorkOrderStatus from './WorkOrderStatus.svelte';
  
  let { order } = $props<{ order: WorkOrder }>();
</script>

<tr class="hover:bg-gray-50">
  <td class="p-2 border border-gray-300">{order.id}</td>
  <td class="p-2 border border-gray-300">{order.taskName}</td>
  <td class="p-2 border border-gray-300">{order.summary}</td>
  <td class="p-2 border border-gray-300">
    <WorkOrderStatus status={order.status} />
  </td>
  <td class="p-2 border border-gray-300">{new Date(order.created_at).toLocaleString()}</td>
</tr>