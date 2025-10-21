"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
export const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to an API
    setIsSubmitted(true);
    setEmail('');
  };
  return <section className="bg-indigo-600 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Never Miss a Deal
          </h2>
          <p className="text-indigo-100 mb-6">
            Subscribe to our newsletter and get the hottest deals delivered to
            your inbox.
          </p>
          {isSubmitted ? <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
              <p>
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div> : <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </form>}
          <p className="text-xs text-indigo-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
};