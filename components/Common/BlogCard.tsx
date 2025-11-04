// components/Common/BlogCard.tsx
import Link from 'next/link';
import { Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { BlogPost } from '@/utils/data/mockData';

export const BlogCard = ({ 
  slug, title, excerpt, image, category, date, author, commentCount 
}: BlogPost) => {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <Link href={`/blogs/${categorySlug}/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-semibold text-gray-800">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>{new Date(date).toLocaleDateString()}</span>
          <span className="mx-1">•</span>
          <span>{author.name}</span>
        </div>
        <Link href={`/blogs/${categorySlug}/${slug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <MessageSquare className="h-3.5 w-3.5 mr-1" />
            <span>{commentCount} comments</span>
          </div>
          <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs font-medium">
            {Math.ceil(excerpt.length / 100)} min read
          </span>
        </div>
      </div>
    </div>
  );
};