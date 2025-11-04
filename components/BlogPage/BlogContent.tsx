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
import { BlogPost } from '@/utils/data/mockData';
import { ProductCard } from '@/components/Common/ProductCard';
import Sidebar from '@/components/BlogPage/Sidebar';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogPostContentProps) {
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
                {Math.ceil(post.excerpt.length / 100)} min read
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
                  <p>
                    Choosing a Smart TV that balances premium features with an affordable price tag is now easier than ever. The ₹25,000 to ₹35,000 price bracket is the sweet spot in India, offering large-screen 4K resolution alongside Google TV’s personalized experience. Our selection of the Top 5 Google TVs prioritizes high-value features like QLED panels, comprehensive HDR support (Dolby Vision/HDR10+), and powerful sound systems. Leading this competitive field are models like the Toshiba 55M550NP with its exceptional Full Array Local Dimming (FALD) contrast, and the Philips 55PQT8300/94, which uniquely offers a 120Hz refresh rate perfect for next-gen console gaming. For those who prioritize UI speed, the Lumio Vision 7 stands out with its 3GB RAM. Whether you need the largest size, the best color, or the smoothest motion, this list guides you to the most affordable smart upgrade for your home entertainment hub.
                  </p>
                  <p>
                    Explore more options at <Link href="#" className="text-indigo-600 hover:underline">Gadget Zone</Link> here.
                  </p>
                </div>

                {/* Top Products Table */}
                <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
                  <h3 className="text-lg font-semibold mb-4">Top Products</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {post.products.map((product) => (
                          <tr key={product.id}>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                              <Link href={`#${product.id}`}>{product.title}</Link>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                              {product.rating}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Show More Products
                    </button>
                  </div>
                </div>

                {/* Product Cards */}
                {post.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}

                {/* Comments Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Comments ({post.commentCount})
                  </h3>
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
                <Sidebar />
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
            {post.products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-1">•</span>
                    <span>{post.author.name}</span>
                  </div>
                  <Link href={`#${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      <span>{post.commentCount} comments</span>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {Math.ceil(post.excerpt.length / 100)} min read
                    </span>
                  </div>
                </div>
              </div>
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