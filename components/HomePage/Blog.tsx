// components/Home/Blog.tsx
import Link from "next/link";
import { BlogCard } from "../Common/BlogCard";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/utils/data/mockData";

export default function FeaturedBlogs() {
  const featuredBlogs = blogPosts.slice(0, 3);
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          <Link href="/blogs" className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium group">
            View All Articles
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBlogs.map(post => <BlogCard key={post.id} {...post} />)}
        </div>
      </div>
    </section>
  );
}