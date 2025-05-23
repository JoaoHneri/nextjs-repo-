import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {

  const slug = "featured";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      <PostCoverImage
        href="/contatos"
        src="/images/bryen_0.png"
        width={1200}
        height={720}
        alt="Titulo do post"
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time dateTime="2025-04-20" className="text-slate-600 text-sm">
          20/04/2025 10:00
        </time>
        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet.
        </PostHeading>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        obcaecati explicabo mollitia recusandae. Veniam libero dignissimos ab
        ipsam odit recusandae pariatur eligendi molestiae debitis, nihil
        corrupti illum maxime autem labore?
      </div>
    </section>
  );
}
