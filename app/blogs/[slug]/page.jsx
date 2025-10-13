import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

async function getBlog(slug) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data;
}

async function getRelatedBlogs(tags, currentSlug) {
  if (!tags || tags.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .neq("slug", currentSlug)
    .order("published_at", { ascending: false })
    .limit(3);

  if (error) {
    return [];
  }

  return data || [];
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found - Value Hunter",
    };
  }

  return {
    title: `${blog.title} - Value Hunter Blog`,
    description: blog.summary || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.summary || blog.title,
      images: blog.cover_image ? [blog.cover_image] : [],
      type: "article",
      publishedTime: blog.published_at,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary || blog.title,
      images: blog.cover_image ? [blog.cover_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.tags, blog.slug);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blogs
        </Link>

        {blog.cover_image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.cover_image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {blog.tags && blog.tags.length > 0 && (
              <>
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.published_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{blog.views || 0} views</span>
          </div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="border-t dark:border-gray-700 pt-8 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Get Latest Deals Instantly!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Join our Telegram channel to receive instant notifications about the best deals.
            </p>
            <a
              href="https://t.me/valuehunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>

        {relatedBlogs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {relatedBlog.cover_image && (
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={relatedBlog.cover_image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {relatedBlog.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
