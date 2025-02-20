import { sql } from 'drizzle-orm';

import {
	index,
	pgTableCreator,
	serial,
	timestamp,
	varchar,
	text,
	integer
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `faxility_${name}`);

export const user = createTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
});

export const session = createTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const workOrders = createTable(
	'work_orders',
	{
		id: serial('id').primaryKey(),
		taskName: varchar('task_name', { length: 256 }),
		apartmentNumber: varchar('apartment_number', { length: 256 }),
		severity: varchar('severity', { length: 50 }),
		status: varchar('status', { length: 50 }),
		apartmentTileLink: varchar('apartment_tile_link', { length: 512 }),
		okayToEnter: text('okay_to_enter'),
		callDateTime: timestamp('call_date_time', { withTimezone: true }),
		keyInfo: varchar('key_info', { length: 512 }),
		technicianAssigned: varchar('technician_assigned', { length: 256 }),
		summary: text('summary'),
		category: varchar('category', { length: 100 }),
		subcategory: varchar('subcategory', { length: 100 }),
		detailedIssue: text('detailed_issue'),
		requiredMaterials: text('required_materials'),
		productRequestLink: varchar('product_request_link', { length: 512 }),
		residentContactInfo: varchar('resident_contact_info', { length: 256 }),
		residentCallLink: varchar('resident_call_link', { length: 512 }),
		followUpScheduling: text('follow_up_scheduling'),
		userId: varchar('user_id', { length: 256 })
			.notNull()
			.references(() => user.id),
		createdAt: timestamp('created_at', { withTimezone: true })
			.default(sql`CURRENT_TIMESTAMP`)
			.notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(() => new Date())
	},
	(example) => ({
		requestIndex: index('user_idx').on(example.userId)
	})
);



export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
