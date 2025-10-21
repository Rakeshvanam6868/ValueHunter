"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const BlogHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="bg-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">DealsFinder Blog</h1>
          <p className="text-xl mb-8">
            Expert reviews, buying guides, and tips to help you make smarter
            purchasing decisions.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-5 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
