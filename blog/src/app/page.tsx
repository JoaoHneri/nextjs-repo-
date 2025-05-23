import SpinLoader from "@/components/SpinLoader";
import { Header } from "../components/Header";
import { Suspense } from "react";
import PostList from "@/components/PostList";
import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { PostHeading } from "@/components/PostHeading";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">

        <Link
          className="w-full h-full overflow-hidden transition rounded-xl"
          href="/contatos"
        >
          <Image
            className="hover:scale-105 object-cover object-center"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          ></Image>
        </Link>

        <div className="flex flex-col gap-4 sm:justify-center">

          <time dateTime="2025-04-20" className="text-slate-600 text-sm">20/04/2025 10:00</time>

          <PostHeading as="h1" url="#">
             Lorem ipsum dolor sit amet.
          </PostHeading>
             
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          obcaecati explicabo mollitia recusandae. Veniam libero dignissimos ab
          ipsam odit recusandae pariatur eligendi molestiae debitis, nihil
          corrupti illum maxime autem labore?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

    </Container>
  );
}
