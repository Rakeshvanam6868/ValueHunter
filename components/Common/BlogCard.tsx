import Link from 'next/link';
import { Clock, MessageSquare, Tag } from 'lucide-react';
import Image from 'next/image';
import { BlogPost } from '@/utils/data/mockData';

export const BlogCard = ({ 
  slug, title, excerpt, image, category, date, author, commentCount, tags = [] 
}: BlogPost) => {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
  <Link href={`/blogs/${slug}`} className="block">
        <Image width={400} height={224} src={image} alt={title} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <Link
            // href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            href={`/blogs/${categorySlug}`}
            className="text-xs font-semibold text-indigo-600 uppercase tracking-wider hover:underline"
          >
            {category}
          </Link>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
  <Link href={`/blogs/${categorySlug}/${slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <Image width={32} height={32} src={author.avatar} alt={author.name} className="h-8 w-8 rounded-full object-cover mr-2" />
            <span className="text-sm font-medium text-gray-700">{author.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{commentCount}</span>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Link>
            ))}
            {tags.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};