import Link from "next/link";
import { BlogCard } from "../Common/BlogCard";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/utils/data/mockData";

export default function Blog(){
    const featuredBlogs = blogPosts.slice(0, 3);
    return(
        <>
        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Articles
            </h2>
            <Link href="/blogs" className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View All Articles <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map(post => <BlogCard key={post.id} {...post} />)}
          </div>
        </div>
      </section>
        </>
    )
}