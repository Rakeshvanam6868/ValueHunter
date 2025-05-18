"use client";

import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import DealCard from "./DealCard";
import {dealsData} from "../../utils/data/TopTenDeals";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function DealsSection({   title, filter = {}, loadingFallback = "Loading deals..." }) {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDeals() {
      try {
        setLoading(true);
        const res = await fetch(`/api/deals?${new URLSearchParams(filter)}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        if (!res.ok) throw new Error("Failed to load deals");

        const data = await res.json();
        setDeals(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDeals();
  }, [filter]);

  if (loading) {
    return (
      <div className="text-center py-6 text-gray-500">
        {loadingFallback}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6 text-red-500">
        Failed to load deals: {error}
      </div>
    );
  }

  if (deals.length === 0) {
    return (
      <div className="text-center py-6 text-gray-400">
        No deals found matching your criteria.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 px-4">
    <BackgroundGradient className="px-20 py-3 rounded-lg flex items-center justify-center overflow-hidden">
       <h1 className="text-center text-white font-bold text-[20px]">{title}</h1>
    </BackgroundGradient>

      <div className="w-full max-w-6xl mt-10">
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent>
            {deals.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4 pl-4">
                <DealCard deal={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="dark:bg-[#141a1d] bg-[#e7dfea] hidden sm:flex z-10" />
          <CarouselNext className="dark:bg-[#141a1d] bg-[#e7dfea] hidden sm:flex z-10" />
        </Carousel>
      </div>
    </div>
  );
}