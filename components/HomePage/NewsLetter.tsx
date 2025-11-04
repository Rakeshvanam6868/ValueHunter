'use client';
import { useState } from 'react';

export default function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed! (In real app: send to API)');
    setEmail('');
  };

  return (
    <section className="py-12 sm:py-16 bg-background-light dark:bg-background-dark">
      <div className="container px-4">
        <div className="mx-2 lg:mx-16">
          <div className="relative overflow-hidden rounded-xl bg-primary/90 dark:bg-primary/50 p-8 sm:p-12 shadow-soft-md">
            <div className="relative z-10 text-center text-white">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Get Exclusive Deals First</h2>
              <p className="mt-2 max-w-lg mx-auto text-white/80">
                Join our newsletter to receive the best deals directly in your inbox.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <div className="relative flex-1 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 002.25-2.25h-21a2.25 2.25 0 002.25 2.25v-10.5a2.25 2.25 0 00-2.25-2.25h21a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="form-input w-full rounded-full border-transparent bg-white/20 dark:bg-black/20 py-3 pl-12 pr-4 text-base text-white placeholder:text-white/60 focus:bg-white/30 dark:focus:bg-black/30 focus:ring-2 focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center rounded-full h-12 px-6 bg-white dark:bg-surface-dark text-primary dark:text-white text-base font-bold tracking-wide hover:bg-opacity-90 transition-colors shadow-md"
                >
                  <span className="truncate">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}