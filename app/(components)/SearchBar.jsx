// components/SearchBar.js
"use client";

import { useEffect, useState } from "react";

export default function SearchBar({ deals }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredDeals = deals.filter((deal) =>
    deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Overlay Trigger */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b dark:border-gray-700">
              <input
                type="text"
                placeholder="Search deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-4 py-2 text-lg outline-none bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filteredDeals.length > 0 ? (
                filteredDeals.map((deal) => (
                  <a
                    key={deal.id}
                    href={deal.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b dark:border-gray-700"
                  >
                    <h3 className="font-medium text-gray-800 dark:text-gray-100">{deal.name}</h3>
                  </a>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                  No deals found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}