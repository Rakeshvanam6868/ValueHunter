// app/blog/[categorySlug]/[postSlug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/utils/data/mockData';
import BlogContent  from '@/components/BlogPage/BlogContent';

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    categorySlug: post.category.toLowerCase().replace(/\s+/g, '-'),
    postslug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; postslug: string }>;
}) {
  const { postslug } = await params;
  const post = blogPosts.find(p => p.slug === postslug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ categorySlug: string; postslug: string }>;
}) {
  const { categorySlug, postslug } = await params;

  const post = blogPosts.find(
    p =>
      p.slug === postslug &&
      p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (!post) notFound();

  return <BlogContent post={post} />;
}