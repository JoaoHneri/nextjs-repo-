import { PostCoverImage } from "../PostCoverImage";
import { PostSumary } from "../PostSumary";

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

     <PostSumary postHeading="h2" postLink={postLink} createdAt="2025-05-08T00:24:38.616Z" excerpt="O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO. " title="Rotina Matinal de pessoas altamente eficazes" />
    </section>
  );
}
