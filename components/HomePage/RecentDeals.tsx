"use client";
import { Clock, Filter } from "lucide-react";
import { DealCard } from "../Common/DealCard";
import { useState } from "react";
import { deals } from "@/utils/data/mockData";
import  Link  from 'next/link';

export default function RecentDeals(){
    const [activeTab, setActiveTab] = useState('all');
    const recentDeals = [...deals].sort((a, b) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime());
    
    return(
        <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Recent Deals</h2>
            </div>
            <div className="flex space-x-2">
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveTab('all')}>
                All Deals
              </button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'trending' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveTab('trending')}>
                Trending
              </button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'ending' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveTab('ending')}>
                Ending Soon
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end mb-6">
            <button className="flex items-center text-gray-600 text-sm font-medium bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" /> Filter Deals
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDeals.map(deal => <DealCard key={deal.id} {...deal} />)}
          </div>
          <div className="text-center mt-8">
            <Link href="/deals" className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              View All Deals
            </Link>
          </div>
        </div>
      </section>
    )
}