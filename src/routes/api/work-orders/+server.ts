import { db } from '$lib/server/db';
import { workOrders } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';

export async function GET(event) {

	console.log("backend triggered")
  const page = parseInt(event.url.searchParams.get('page') ?? '1');
  const pageSize = parseInt(event.url.searchParams.get('limit') ?? '10');
  const search = event.url.searchParams.get('search') ?? '';

  const offset = (page - 1) * pageSize;

  // Build the base query
  let query = db.select().from(workOrders);

  // Add search condition if search parameter is provided
  if (search.length > 0) {
    query = query.where(
      sql`LOWER(description) LIKE LOWER(${'%' + search + '%'}) OR 
          LOWER(title) LIKE LOWER(${'%' + search + '%'})`
    );
  }

  // Get total count for pagination
  const totalCountResult = await db
    .select({ count: sql`count(*)` })
    .from(workOrders)
    .$dynamic();

	console.log(totalCountResult)

  const totalCount = Number(totalCountResult[0].count);

  // Add sorting and pagination
  const list = await query
    .orderBy(sql`id`)
    .limit(pageSize)
    .offset(offset);

  return new Response(
    JSON.stringify({
      list,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize)
      }
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
