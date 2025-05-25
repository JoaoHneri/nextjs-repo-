import { findPostBySlugCached } from "@/lib/post/queries";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Post</h1>
      <p>Conteúdo do post</p>
      <p>Título: {post.title}</p>
      <p>Slug: {post.slug}</p>
      <p>Conteúdo: {post.content}</p>
    </div>
  );
}
