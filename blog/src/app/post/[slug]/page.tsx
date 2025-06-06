import { SinglePost } from '@/components/SinglePost';
import SpinLoader from '@/components/SpinLoader';
import { findPostBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title || 'Post',
    description: post.excerpt || 'This is a post description',
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  
  return (
    <Suspense fallback={<SpinLoader/>}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}