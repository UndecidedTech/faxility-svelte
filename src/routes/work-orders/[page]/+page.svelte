<script lang="ts">
	import Sidebar from '$lib/shared/components/sidebar.svelte';
	import Mainnav from '$lib/shared/components/mainnav.svelte';
	import Calendar from '$lib/shared/components/calendar.svelte';
	import Status from '$lib/shared/components/status.svelte';
	import WorkOrderTable from '$lib/components/workOrders/WorkOrderTable.svelte';
	import Pagination from '$lib/components/workOrders/Pagination.svelte';

	let statusItems = [
		{
			lastWeekPercentage: 15.3,
			title: 'Total Order',
			total: '20'
		},
		{
			lastWeekPercentage: -12.3,
			title: 'Assigned',
			total: '14'
		},
		{
			lastWeekPercentage: 11.3,
			title: 'Returns Orders',
			total: '15'
		},
		{
			lastWeekPercentage: -18.3,
			title: 'Orders items over time',
			total: '15'
		}
	];

	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let { data } = $props<{ data: PageData }>();
	let { workOrders, pagination } = data;

	let searchQuery = $state('');
	let loading = $state(false);
	let error = $state(null);

	let sidebarExpanded = $state(true);

	function handleSidebarToggle() {
		sidebarExpanded = !sidebarExpanded;
	}

	function handleNavigation(event: CustomEvent) {
		const page = event.detail.page;
		// Handle navigation logic here
		console.log(`Navigating to ${page}`);
	}

	function handleLogout() {
		// Handle logout logic here
		console.log('Logging out...');
	}

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

<div class="flex">
	<Sidebar
		isExpanded={sidebarExpanded}
		{handleSidebarToggle}
		on:navigate={handleNavigation}
		on:logout={handleLogout}
	/>

	<main class="flex-1 flex-col">
		<Mainnav title="Work Order List" isExpanded={sidebarExpanded} {handleSidebarToggle} />
		<!-- Work Status -->
		<div class="flex mx-[30px] gap-x-4">
			{#each statusItems as statusItem}
				<Status
					title={statusItem.title}
					lastWeekPercentage={statusItem.lastWeekPercentage}
					total={statusItem.total}
				/>
			{/each}
		</div>

		<!-- Work Orders Table -->
		<div class="flex flex-col mx-[30px]">
			<WorkOrderTable {workOrders} />
			<Pagination {pagination} {searchQuery} />
		</div>
	</main>
</div>
