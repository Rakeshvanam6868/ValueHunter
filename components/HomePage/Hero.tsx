import { Search } from "lucide-react"

export const Hero = () => {
    return(
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover the Best Deals Online
            </h1>
            <p className="text-xl mb-8">
              We find the hottest discounts so you don&apos;t have to. Save money on
              your favorite products.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input type="text" placeholder="Search for deals..." className="w-full px-5 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}