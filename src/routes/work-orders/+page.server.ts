export const csr = true;
export const ssr = true;

export async function load({ params, fetch }) {
	const page = Number(params.page);
	const limit = Number(params.limit ?? 10);

	const queryParams = {
		skip: (page - 1) * limit,
		limit: limit
	};

	const searchParams = new URLSearchParams(queryParams);

	const response = await fetch(`/api/work-orders?${searchParams.toString()}`, {
		method: 'GET',
		cache: 'no-store' // Ensure fresh data on each navigation
	});
	const data = await response.json();
	return {
		workOrders: data.list,
		pagination: {
			page: data.pagination.page,
			totalCount: data.pagination.totalCount,
			currentPage: data.pagination.page,
			pageSize: data.pagination.pageSize
		}
	};
}
