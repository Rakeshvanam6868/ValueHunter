// components/BlogPage/BlogPostContent.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Calendar,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Bookmark,
} from 'lucide-react';
import Image from 'next/image';
import { BlogPost, blogPosts } from '@/utils/data/mockData';
import { BlogCard } from '@/components/Common/BlogCard';
import { generateSampleContent } from '@/utils/generateSampleContent';

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const articleContent = generateSampleContent(post.title);

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Dummy state for comment form (CSR)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Comment submitted! (In real app: send to API)');
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <>
      {/* Article Hero */}
      <section className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="inline-flex items-center text-indigo-100 hover:text-white mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <div className="flex items-center mb-4">
              <Link
                href={`/blogs/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-semibold text-indigo-200 uppercase tracking-wider hover:text-indigo-100"
              >
                {post.category}
              </Link>
              <span className="mx-2 text-indigo-300">•</span>
              <span className="text-sm text-indigo-200 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="mx-2 text-indigo-300">•</span>
              <span className="text-sm text-indigo-200 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {Math.ceil(articleContent.join(' ').length / 1000)} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center">
              <Image
                width={100}
                height={100}
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-indigo-300"
              />
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-sm text-indigo-200">Staff Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              width={1000}
              height={400}
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="lg:flex gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="prose prose-lg max-w-none">
                  {articleContent.map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 mb-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mb-8 flex items-center">
                  <span className="text-gray-700 mr-4 font-medium flex items-center">
                    <Share2 className="h-4 w-4 mr-2" /> Share this article:
                  </span>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Share on Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400" aria-label="Share on Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700" aria-label="Share on LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                  <div className="flex items-start">
                    <Image
                      width={100}
                      height={100}
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-16 w-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-2">About {post.author.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {post.author.name} is a staff writer at DealsFinder specializing in{' '}
                        {post.category.toLowerCase()} reviews and buying guides. With over 5 years of industry
                        experience, they help readers make informed purchasing decisions.
                      </p>
                      <a href="#" className="text-indigo-600 font-medium hover:underline">
                        View all articles by {post.author.name}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article Navigation (static for demo) */}
                <div className="flex justify-between border-t border-b border-gray-200 py-4 mb-8">
                  <Link href={`/blogs/${blogPosts[0]?.category.toLowerCase().replace(/\s+/g, '-')}/${blogPosts[0]?.slug || ''}`} className="flex items-center text-gray-700 hover:text-indigo-600">
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    <div>
                      <div className="text-xs text-gray-500">Previous Article</div>
                      <div className="font-medium">How to Find Black Friday Deals</div>
                    </div>
                  </Link>
                    <Link href={`/blogs/${blogPosts[1]?.category.toLowerCase().replace(/\s+/g, '-')}/${blogPosts[1]?.slug || ''}`} className="flex items-center text-right text-gray-700 hover:text-indigo-600">
                    <div>
                      <div className="text-xs text-gray-500">Next Article</div>
                      <div className="font-medium">Smart Home Devices That Save Money</div>
                    </div>
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </div>

                {/* Comments Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Comments ({post.commentCount})
                  </h3>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <Image
                            width={100}
                            height={100}
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                            alt="User"
                            className="h-8 w-8 rounded-full object-cover mr-2"
                          />
                          <div>
                            <div className="font-medium">Sarah Johnson</div>
                            <div className="text-xs text-gray-500">2 days ago</div>
                          </div>
                        </div>
                        <button className="text-gray-500 hover:text-indigo-600">
                          <ThumbsUp className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-gray-700">
                        This article was incredibly helpful! I&apos;ve been looking for a good comparison...
                      </p>
                    </div>
                  </div>

                  {/* Comment Form (CSR) */}
                  <div className="mt-8">
                    <h4 className="font-medium mb-4">Leave a Comment</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <textarea
                          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                          rows={4}
                          placeholder="Share your thoughts..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center mb-4">
                        <input type="checkbox" id="save-info" className="mr-2" />
                        <label htmlFor="save-info" className="text-sm text-gray-600">
                          Save my name and email for the next time I comment
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4 mt-8 lg:mt-0">
                {/* Action Buttons */}
                <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between">
                  <button className="flex items-center text-gray-700 hover:text-indigo-600">
                    <ThumbsUp className="h-5 w-5 mr-1" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-indigo-600">
                    <Bookmark className="h-5 w-5 mr-1" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-indigo-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Electronics', 'Deals', 'Black Friday', 'Smart Home', 'Budget', 'Reviews'].map((tag) => (
                      <Link
                        key={tag}
                        href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-indigo-50 rounded-lg shadow p-6 mb-6 border border-indigo-100">
                  <h3 className="font-bold text-gray-900 mb-2">Get Deal Alerts</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to receive notifications about the latest deals.
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full mb-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                    />
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Featured Deal */}
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="bg-indigo-600 text-white py-2 px-4 text-center font-medium">Featured Deal</div>
                  <div className="p-4">
                    <Image
                      width={300}
                      height={120}
                      src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                      alt="AirPods Pro"
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h4 className="font-medium text-gray-900 mb-1">Apple AirPods Pro - 20% Off</h4>
                    <div className="flex items-baseline mb-2">
                      <span className="text-lg font-bold text-indigo-600">$199.99</span>
                      <span className="text-sm text-gray-500 line-through ml-2">$249.99</span>
                    </div>
                    <a
                      href="#"
                      className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-md font-medium transition-colors"
                    >
                      Get Deal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blogs"
              className="inline-block bg-white text-indigo-600 border border-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}