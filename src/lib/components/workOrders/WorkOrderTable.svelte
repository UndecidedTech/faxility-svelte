<script lang="ts">
	import type { WorkOrder } from '$lib/types/workOrder';
	import WorkOrderRow from './WorkOrderRow.svelte';

	let { workOrders } = $props<{ workOrders: WorkOrder[] }>();
	let active = $state('All');
	const toggleActive = (status: string) => {
		active = status;
	};
</script>

<div class="overflow-x-auto my-[30px]">
	<div class="flex justify-between">
		<div class="flex justify-between bg-[#f7f7f7] py-[6px] px-[6px] mb-[28px]">
			<button
				class={active === 'All'
					? 'bg-white py-[10px] px-[13px] border rounded'
					: 'bg-[#F7F7F7] py-[10px] px-[13px]'}
				onclick={() => toggleActive('All')}>All</button
			>
			<button
				class={active === 'Assigned'
					? 'bg-white py-[10px] px-[13px] border rounded'
					: 'bg-[#F7F7F7] py-[10px] px-[13px]'}
				onclick={() => toggleActive('Assigned')}>Assigned</button
			>
			<button
				class={active === 'Pending'
					? 'bg-white py-[10px] px-[13px] border rounded'
					: 'bg-[#F7F7F7] py-[10px] px-[13px]'}
				onclick={() => toggleActive('Pending')}>Pending</button
			>
			<button
				class={active === 'Success'
					? 'bg-white py-[10px] px-[13px] border rounded'
					: 'bg-[#F7F7F7] py-[10px] px-[13px]'}
				onclick={() => toggleActive('Success')}>Success</button
			>
		</div>
	</div>

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
