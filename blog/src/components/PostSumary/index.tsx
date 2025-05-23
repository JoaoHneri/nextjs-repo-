import { formatDatetime, formatRelativeDateFns } from "@/utils/format-datetime";
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
      <time
        dateTime={formatDatetime(createdAt)}
        className="text-slate-600 text-sm"
      >
        {formatRelativeDateFns(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
