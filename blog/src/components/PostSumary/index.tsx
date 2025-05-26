import { PostDate } from "../PostDate";
import { PostHeading } from "../PostHeading";


type PostSumaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  title: string;
  excerpt: string;
  createdAt: string;
};

export function PostSumary({ postHeading, postLink, title, excerpt, createdAt }: PostSumaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate createdAt={createdAt} />
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
