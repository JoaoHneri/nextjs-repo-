import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostFeatured() {
  
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      <PostCoverImage
        href="/contatos"
        src={post.coverImageUrl}
        width={1200}
        height={720}
        alt={post.title}
      />

     <PostSumary postHeading="h2" postLink={postLink} createdAt="2025-05-08T00:24:38.616Z" excerpt={post.excerpt} title={post.title} />
    </section>
  );
}
