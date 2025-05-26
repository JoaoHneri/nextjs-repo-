import { formatDatetime, formatRelativeDateFns } from "@/utils/format-datetime";
export function PostDate({ createdAt }: { createdAt: string }) {
  return (
   <time
        dateTime={formatDatetime(createdAt)}
        className="text-slate-600 text-sm"
      >
        {formatRelativeDateFns(createdAt)}
      </time>
  );
}