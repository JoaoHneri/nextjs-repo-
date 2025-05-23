import SpinLoader from "@/components/SpinLoader";
import { Header } from "../components/Header";
import { Suspense } from "react";
import PostList from "@/components/PostList";
import { Container } from "@/components/Container";
import { PostFeatured } from "@/components/PostFeatured";

export default async function Home() {
  return (
    <Container>

      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    
    </Container>
  );
}
