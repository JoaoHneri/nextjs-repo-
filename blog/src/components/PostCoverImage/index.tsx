import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

export function PostCoverImage({href, src, alt, width, height}: PostCoverImageProps ) {
    return (
         <Link
          className="w-full h-full overflow-hidden transition rounded-xl"
          href={href}
        >
          <Image
            className="hover:scale-105 object-cover object-center h-full w-full"
            src={src}
            width={width}
            height={height}
            alt={alt}
            priority
          ></Image>
        </Link>

    );
}
