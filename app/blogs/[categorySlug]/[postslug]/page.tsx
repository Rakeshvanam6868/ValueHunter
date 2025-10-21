

// app/blogs/[categorySlug]/[postslug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/utils/data/mockData';
import { BlogPostContent } from '@/components/BlogPage/BlogPostContent';

// Optional: Pre-render all known post URLs
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    categorySlug: post.category.toLowerCase().replace(/\s+/g, '-'),
    postslug: post.slug, // ⚠️ must match folder name: [postslug] → use "postslug", not "postSlug"
  }));
}

export const revalidate = 3600; // ISR

// ✅ FIXED: Await params in generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; postslug: string }>;
}) {
  const { postslug } = await params; // ✅ await first!
  const post = blogPosts.find((p) => p.slug === postslug);
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

// ✅ FIXED: Await params in page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ categorySlug: string; postslug: string }>;
}) {
  const { categorySlug, postslug } = await params; // ✅ await!

  const post = blogPosts.find(
    (p) =>
      p.slug === postslug &&
      p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (!post) notFound();

  return <BlogPostContent post={post} />;
}