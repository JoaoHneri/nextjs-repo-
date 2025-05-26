import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";


const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "post.json");


export class JsonPostRepository implements PostRepository {


    private async waitToLoad(): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }

    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
        const posts = JSON.parse(jsonContent).posts;
        return posts
    }

    async findAllPublic(): Promise<PostModel[]> {
        await this.waitToLoad();
        const posts = await this.readFromDisk();
        return posts.filter((post: PostModel) => post.published);

    }

    async findBySlug(slug: string): Promise<PostModel | null> {
        await this.waitToLoad();
        const posts = await this.readFromDisk();
        const post = posts.find((post: PostModel) => post.slug === slug);
        return post || null;
    }


    async findById(id: string): Promise<PostModel | null> {
        await this.waitToLoad();
        const posts = await this.readFromDisk();
        const post = posts.find((post: PostModel) => post.id === id);
        return post || null;
    }

}

export const jsonPostRepository: PostRepository = new JsonPostRepository();

