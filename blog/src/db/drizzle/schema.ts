import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { boolean, mysqlTable,  text, varchar} from 'drizzle-orm/mysql-core';

export const postsTable = mysqlTable('posts', {
  id: varchar('id', { length: 36 }).primaryKey(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: boolean('published').default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostsTableInsertMode = InferInsertModel<typeof postsTable>;

