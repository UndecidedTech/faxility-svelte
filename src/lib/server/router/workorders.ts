import { db } from '$lib/server/db';
import { workOrders, user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load() {
	return {
		todos: await db.select().from(workOrders).leftJoin(user, eq(workOrders.userId, user.id))
	};
}

export const actions = {
	addWorkOrder: async ({ request }) => {
		const formData = await request.formData();
		const workRequest = String(formData.get('workRequest'));
		await db.insert(workOrders).values({ workRequest });
	},
	removeTodo: async ({ url }) => {
		const id = +url.searchParams.get('id')!;
		await db.delete(todos).where(eq(todos.id, id));
	}
};
