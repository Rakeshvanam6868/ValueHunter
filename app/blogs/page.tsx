import BlogHeader from "@/components/BlogPage/BlogHeader";
import Subscribe from "@/components/BlogPage/Subscribe";
import TopicSection from "@/components/BlogPage/TopicSection";
import { blogPosts } from "@/utils/data/mockData";
import { BlogCard } from "@/components/Common/BlogCard";

export default function Blog() {
  return (
    <>
      <BlogHeader />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <TopicSection />
      <Subscribe />
    </>
  );
}