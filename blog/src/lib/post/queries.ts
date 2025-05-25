import { jsonPostRepository } from "@/repositories/post/json-post-repository";
import { notFound } from "next/navigation";
import { cache } from "react";


export const findAllPublicPostsCached = cache( async () => {
    return await jsonPostRepository.findAllPublic();
});


export const findPostBySlugCached = cache( async (slug: string) => {

    const post  = await jsonPostRepository.findBySlug(slug).catch(() => null);
    if (!post){notFound()}
    return post;
    
});


export const findPostByIdCached = cache( async (id: string) => {
    return await jsonPostRepository.findById(id);
});