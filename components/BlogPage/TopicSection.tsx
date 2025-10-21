import Image from 'next/image'
import React from 'react'

const TopicSection = () => {
  return (
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
              <Image width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" alt="Electronics" className="w-12 h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Electronics</h3>
              <p className="text-gray-600 mb-4">
                Reviews and deals on the latest gadgets and tech products.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                View Articles →
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
              <Image width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/2200/2200326.png" alt="Travel" className="w-12 h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Travel</h3>
              <p className="text-gray-600 mb-4">
                Tips for finding the best travel deals and vacation packages.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                View Articles →
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
              <Image width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/2082/2082000.png" alt="Home" className="w-12 h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Home & Kitchen</h3>
              <p className="text-gray-600 mb-4">
                Guides for home improvement and kitchen appliance shopping.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                View Articles →
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
              <Image width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png" alt="Fashion" className="w-12 h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fashion</h3>
              <p className="text-gray-600 mb-4">
                Style guides and the best deals on clothing and accessories.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                View Articles →
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TopicSection