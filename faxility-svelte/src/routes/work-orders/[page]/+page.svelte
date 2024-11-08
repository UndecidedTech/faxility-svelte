<script lang="ts">
  import WorkTable from "./worktable.svelte";
  export let data;
  const { workOrders } = data;
</script>

<div>
  <span>Work Orders</span>
  <WorkTable workOrders={workOrders.list} pagination={workOrders.pagination} />
</div>
