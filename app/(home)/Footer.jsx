import React from 'react';

import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About DealsFinder</h3>
            <p className="text-gray-400 mb-4">
              We find the best deals online so you don&apos;t have to. Our team of
              experts searches the web for discounts, promotions, and special
              offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/hot-deals" className="text-gray-400 hover:text-white">
                  Hot Deals
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/electronics" className="text-gray-400 hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/fashion" className="text-gray-400 hover:text-white">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/home-kitchen" className="text-gray-400 hover:text-white">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/category/beauty" className="text-gray-400 hover:text-white">
                  Beauty
                </Link>
              </li>
              <li>
                <Link href="/category/toys" className="text-gray-400 hover:text-white">
                  Toys
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:contact@dealsfinder.com" className="text-gray-400 hover:text-white">
                  contact@dealsfinder.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Affiliate Disclosure
              </h4>
              <p className="text-xs text-gray-500">
                DealsFinder participates in affiliate programs. We may earn a
                commission when you make purchases through our links.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} DealsFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};