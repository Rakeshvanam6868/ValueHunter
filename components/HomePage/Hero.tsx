'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-16 px-2 lg:px-16 sm:py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="font-display text-base font-bold text-primary">Discover. Save. Repeat.</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark">
              Find Real Value Behind Every Deal.
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg text-text-secondary-light dark:text-text-secondary-dark lg:mx-0">
              Our expert team hand-picks the best deals on products you love, so you can shop smarter and save bigger.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="#"
                className="flex items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors shadow-soft-md"
              >
                <span>Explore Deals</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-2 h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center rounded-full h-12 px-6 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span>Join Telegram</span>
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative h-96 lg:h-auto lg:aspect-[4/3]">
            {/* Card 1 */}
            <div className="group absolute bottom-0 left-0 w-1/2 h-2/3 cursor-pointer overflow-hidden rounded-lg shadow-soft-md transition-all duration-300 hover:z-10 hover:scale-105">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-display text-lg font-bold">Smart Home</h3>
                <p className="text-sm opacity-80">Deals on gadgets</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group absolute top-0 left-1/4 w-1/2 h-3/5 cursor-pointer overflow-hidden rounded-lg shadow-soft-md transition-all duration-300 hover:z-10 hover:scale-105">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-display text-lg font-bold">Electronics</h3>
                <p className="text-sm opacity-80">Top tech offers</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group absolute bottom-1/4 right-0 w-1/2 h-3/5 cursor-pointer overflow-hidden rounded-lg shadow-soft-md transition-all duration-300 hover:z-10 hover:scale-105">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-display text-lg font-bold">Fashion</h3>
                <p className="text-sm opacity-80">Style savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}