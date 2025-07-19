import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';



export const signs = pgTable('signs', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  location: varchar('location', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Sign = typeof signs.$inferSelect;
export type NewSign = typeof signs.$inferInsert; 