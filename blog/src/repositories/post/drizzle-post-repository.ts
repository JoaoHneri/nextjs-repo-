import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schema";
import { desc, eq, and } from "drizzle-orm";


export class DrizzlePostRepository implements PostRepository {

    async findAllPublic(): Promise<PostModel[]> {
        // Opção 1: Usando query builder (recomendado)
        const posts = await drizzleDb
            .select()
            .from(postsTable)
            .where(eq(postsTable.published, true))
            .orderBy(desc(postsTable.createdAt));
        return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel | null> {
        const posts = await drizzleDb
            .select()
            .from(postsTable)
            .where(and(eq(postsTable.published, true), eq(postsTable.slug, slug)))
            .limit(1);

        return posts[0] || null;
    }

    

    async findAll(): Promise<PostModel[]> {
        const posts = await drizzleDb
            .select()
            .from(postsTable)
            .orderBy(desc(postsTable.createdAt));

        return posts;
    }

    async findById(id: string): Promise<PostModel | null> {
        const posts = await drizzleDb
            .select()
            .from(postsTable)
            .where(eq(postsTable.id, id))
            .limit(1);

        return posts[0] || null;
    }

    async findBySlug(slug: string): Promise<PostModel | null> {
        const posts = await drizzleDb
            .select()
            .from(postsTable)
            .where(eq(postsTable.slug, slug))
            .limit(1);

        return posts[0] || null;
    }


}

// (async () => {
//     const drizzlePostRepository = new DrizzlePostRepository();
//     const posts = await drizzlePostRepository.findAll();
//     console.log(posts);
// })().catch((error) => {
//     console.error('Error during testing DrizzlePostRepository:', error);
// })