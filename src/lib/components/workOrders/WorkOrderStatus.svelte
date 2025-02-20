<script lang="ts">
  let { status } = $props<{ status: 'pending' | 'in_progress' | 'completed' }>();

  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800'
  };

  const statusLabels = {
    pending: 'Pending',
    in_progress: 'In Progress',
    completed: 'Completed'
  };
</script>

<span class={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
  {statusLabels[status]}
</span>