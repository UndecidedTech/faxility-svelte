export const load = async ({ fetch }) => {
	const response = await fetch('/api/work-orders?page=1&limit=10', {
		method: 'GET'
	});
	const data = await response.json();

	return {
		workOrders: data.list,
		pagination: {
			page: data.pagination.page,
			totalCount: data.pagination.totalCount,
			currentPage: data.pagination.page,
			pageSize: data.pagination.pageSize,
			totalPages: data.pagination.totalPages
		}
	};
};