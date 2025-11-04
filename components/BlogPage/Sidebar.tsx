// components/BlogPage/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between">
        <button className="flex items-center text-gray-700 hover:text-indigo-600">
          <Star className="h-5 w-5 mr-1" />
          <span>Like</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-indigo-600">
          <Star className="h-5 w-5 mr-1" />
          <span>Save</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-indigo-600">
          <Star className="h-5 w-5 mr-1" />
          <span>Share</span>
        </button>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Electronics', 'Deals', 'Black Friday', 'Smart Home', 'Budget', 'Reviews'].map(tag => (
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
  );
}