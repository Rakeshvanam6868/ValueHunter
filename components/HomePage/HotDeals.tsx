import { DealCard } from '../Common/DealCard';
import { deals} from "../../utils/data/mockData";
import { ChevronRight, TrendingUp } from 'lucide-react';
import  Link  from 'next/link';

export default function HotDeals(){
    const hotDeals = deals.filter(deal => deal.isHot);
    return(
        <>
        {/* Hot Deals Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Hot Deals</h2>
            </div>
            <Link href="/hot-deals" className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map(deal => <DealCard key={deal.id} {...deal} />)}
          </div>
        </div>
      </section>
        </>
    )
}