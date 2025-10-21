import { categories } from '../../utils/data/mockData';
import { CategoryCard } from '../Common/CategoryCard';
export default function Category(){
    return(
        <>
        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Browse Deals by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map(category => <CategoryCard key={category.slug} {...category} />)}
          </div>
        </div>
      </section>
        </>
    )
}