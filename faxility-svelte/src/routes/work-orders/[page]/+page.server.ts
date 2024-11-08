export async function load({ params, fetch }) {
	const page = Number(params.page);
	const limit = Number(params.limit ?? 10);

	const queryParams = {
		skip: (page - 1) * limit,
		limit: limit
	};

	const searchParams = new URLSearchParams(queryParams);

	const response = await fetch(`/api/work-orders?${searchParams.toString()}`, {
		method: 'GET'
	});
	const data = await response.json();
	return {
		workOrders: data
	};
}
