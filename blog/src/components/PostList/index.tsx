import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export default async function PostList() {
  const posts = await findAllPublicPostsCached();
  
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            
            <PostCoverImage
              href={postLink}
              src={post.coverImageUrl}
              width={1200}
              height={720}
              alt={post.title}
            />

            <PostSumary postHeading="h2" postLink={postLink} createdAt={post.createdAt} excerpt={post.excerpt} title={post.title} />

          </div>
        );
      })}
    </div>
  );
}
