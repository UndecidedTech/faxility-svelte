<script>
  let { workOrders } = $props();
</script>

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
