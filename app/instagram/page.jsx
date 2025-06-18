"use client";

import { useEffect, useState } from "react";
import InstaCard from "../(components)/InstaCard";

export default function Instagram() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchCards = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/instacards?page=${page}`);
      const data = await res.json();

      if (data.cards.length === 0) {
        setHasMore(false);
      } else {
        // Avoid duplicates by checking existing IDs
        setCards((prev) => {
          const newCards = data.cards.filter(
            (card) => !prev.some((c) => c.id === card.id)
          );
          return [...prev, ...newCards];
        });
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Infinite Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        hasMore &&
        !loading
      ) {
        fetchCards();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-12 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-14 dark:bg-zinc-950">
      {cards.map((card) => (
        <InstaCard key={card.id} deal={card} />
      ))}

      {loading && (
        <div className="col-span-full text-center text-gray-500">Loading...</div>
      )}

      {!hasMore && !loading && cards.length > 0 && (
        <div className="col-span-full text-center text-gray-500">No more cards.</div>
      )}

      {!hasMore && !loading && cards.length === 0 && (
        <div className="col-span-full text-center text-gray-500">No cards found.</div>
      )}
    </div>
  );
}