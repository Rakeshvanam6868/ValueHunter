"use client";
import { blogPosts, categories } from '@/utils/data/mockData';
import { Filter } from 'lucide-react';
import React, { useState } from 'react'
import { BlogCard } from '../Common/BlogCard';
import Image from 'next/image';
import Link from 'next/link';

const BlogContent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Electronics', 'Smart Home', 'Gaming', 'Shopping Tips', 'Home & Kitchen'];
      const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
    const catSlug = filteredPosts[0].category.toLowerCase().replace(/\s+/g, '-');

  return (
   <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>
                {category}
              </button>)}
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 flex items-center ml-2">
              <Filter className="h-4 w-4 mr-1" /> More Filters
            </button>
          </div>
          {/* Featured Article */}
          {filteredPosts.length > 0 && <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Article
              </h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image width={100} height={100} src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                        {filteredPosts[0].category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(filteredPosts[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <Image width={100} height={100} src={filteredPosts[0].author.avatar} alt={filteredPosts[0].author.name} className="h-10 w-10 rounded-full object-cover mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {filteredPosts[0].author.name}
                        </p>
                        <p className="text-sm text-gray-500">Staff Writer</p>
                      </div>
                    </div>
                    <Link href={`/blogs/${catSlug}/${filteredPosts[0].slug}`} className="inline-block">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                        Read Article
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>}
          {/* All Articles */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Articles
          </h2>
          {filteredPosts.length === 0 ? <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found matching your criteria.
              </p>
              <button className="mt-4 text-indigo-600 font-medium hover:underline" onClick={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}>
                Clear filters
              </button>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) =>
          // Skip the first post if it's already featured
          index > 0 && <BlogCard key={post.id} {...post} />)}
            </div>}
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600">
                1
              </a>
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                3
              </a>
              <span className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500">
                ...
              </span>
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-r-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
  )
}

export default BlogContent