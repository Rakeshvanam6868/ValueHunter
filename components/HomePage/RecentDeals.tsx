// components/Home/RecentDeals.tsx
"use client";
import { Clock, Filter } from "lucide-react";
import { DealCard } from "../Common/DealCard";
import { useState } from "react";
import { deals } from "@/utils/data/mockData";
import Link from 'next/link';

export default function RecentDeals() {
  const [activeTab, setActiveTab] = useState('all');
  const recentDeals = [...deals].sort((a, b) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime());
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Recent Deals</h2>
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            {['all', 'trending', 'ending'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentDeals.map(deal => <DealCard key={deal.id} {...deal} />)}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/deals" 
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Deals
          </Link>
        </div>
      </div>
    </section>
  );
}