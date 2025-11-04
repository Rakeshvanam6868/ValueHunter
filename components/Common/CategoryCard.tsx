// components/Common/CategoryCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  slug: string;
}

export const CategoryCard = ({ name, icon, count, slug }: CategoryCardProps) => {
  return (
    <Link
      href={`/category/${slug}`}
      className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center"
    >
      <div className="relative w-12 h-12 mb-3">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain text-gray-700"
        />
      </div>
      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {name}
      </h3>
      <span className="text-xs text-gray-500 mt-1">{count} deals</span>
    </Link>
  );
};