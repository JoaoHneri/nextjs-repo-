import { jsonPostRepository } from "@/repositories/post/json-post-repository";

export default async function PostList() {

  const posts = await jsonPostRepository.findAll();
  
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
