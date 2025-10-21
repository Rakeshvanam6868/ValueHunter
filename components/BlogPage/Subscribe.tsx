import React from 'react'

const Subscribe = () => {
  return (
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Blog
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest articles and deals delivered straight to your
              inbox. No spam, just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300" required />
              <button type="submit" className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Subscribe