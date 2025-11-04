// components/Deals/HotDeals.tsx
import { DealCard } from '../Common/DealCard';
import { deals } from '../../utils/data/mockData';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HotDeals() {
  const hotDeals = deals.filter(deal => deal.isHot);

  if (hotDeals.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Hot Deals</h2>
          </div>
          <Link
            href="/hot-deals"
            className="mt-4 sm:mt-0 text-indigo-600 hover:text-indigo-800 font-medium flex items-center group"
          >
            View All
            <svg
              className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotDeals.map(deal => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
}