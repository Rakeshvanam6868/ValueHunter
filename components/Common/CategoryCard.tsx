import Image from 'next/image';
import React from 'react';
import Link  from 'next/link';
interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  slug: string;
}
export const CategoryCard = ({
  name,
  icon,
  count,
  slug
}: CategoryCardProps) => {
  return <Link href={`/category/${slug}`} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
      <Image width={100} height={100} src={icon} alt={name} className="w-12 h-12 mb-3" />
      <h3 className="font-medium text-gray-900">{name}</h3>
      <span className="text-sm text-gray-500 mt-1">{count} deals</span>
    </Link>;
};