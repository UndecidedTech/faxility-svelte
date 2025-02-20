export const load = async ({ params, fetch }) => {
	const page = Number(params.page) || 1;
	const limit = 10;

	const response = await fetch(`/api/work-orders?page=${page}&limit=${limit}`, {
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