// app/blog/[categorySlug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/utils/data/mockData';
import { BlogCard } from '@/components/Common/BlogCard';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));
  return categories.map(cat => ({
    categorySlug: cat.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>
}) {
  const { categorySlug } = await params;
  const decodedCategory = decodeURIComponent(categorySlug.replace(/-/g, ' '));
  const postsInCategory = blogPosts.filter(
    post => post.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (postsInCategory.length === 0) notFound();

  const categoryName = postsInCategory[0].category;

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/blogs" className="inline-flex items-center text-indigo-600 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to All Articles
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">{categoryName}</h1>
        <p className="text-gray-600 mb-8">
          Explore all articles in the {categoryName.toLowerCase()} category.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsInCategory.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/blogs" className="text-indigo-600 hover:underline">
            ← Back to Blog Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}