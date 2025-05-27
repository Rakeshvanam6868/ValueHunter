"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DealCard from "../(components)/DealCard";
import { dealsData } from "../../utils/data/TopTenDeals";

export default function Deals() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [discountRange, setDiscountRange] = useState({ min: "", max: "" });

  // Mock categories
  const categories = [
    {
      name: "Beauty & Health",
      subcategories: ["Personal Care", "Make-up", "Health Care", "Hair Care", "Diet Supplements"],
    },
    {
      name: "Fashion",
      subcategories: ["Women", "Men", "Accessories", "Footwear"],
    },
    {
      name: "Electronics",
      subcategories: ["Phones", "Laptops", "Wearables", "Audio"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black/30 transition-colors duration-300 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[22%_76%] gap-8 mx-auto max-w-7xl">
        {/* Sidebar */}
        <aside className="space-y-4 backdrop-blur-xl bg-white/70 dark:bg-[#141a1d] p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] mt-10 lg:overflow-y-auto scrollbar-hide">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">REFINE RESULTS</h2>

          {/* Categories Accordion */}
          <Accordion type="multiple" className="w-full space-y-2">
            {categories.map((category, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-0">
                <AccordionTrigger className="font-medium text-sm text-gray-700 dark:text-gray-300">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-4 space-y-1">
                    {category.subcategories.map((sub, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Price Range Filter */}
          <div className="mt-6">
            <Label htmlFor="price-range" className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">
              Price Range
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="price-min"
                placeholder="₹0"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="w-full text-sm h-8 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">to</span>
              <Input
                id="price-max"
                placeholder="₹10000"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="w-full text-sm h-8 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
              <Button size="sm" variant="outline" className="h-8 dark:border-gray-600 dark:text-gray-200">
                Go
              </Button>
            </div>
          </div>

          {/* Discount Range Filter */}
          <div className="mt-4">
            <Label htmlFor="discount-range" className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">
              Discount Range
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="discount-min"
                placeholder="0%"
                value={discountRange.min}
                onChange={(e) =>
                  setDiscountRange({ ...discountRange, min: e.target.value })
                }
                className="w-full text-sm h-8 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">to</span>
              <Input
                id="discount-max"
                placeholder="100%"
                value={discountRange.max}
                onChange={(e) =>
                  setDiscountRange({ ...discountRange, max: e.target.value })
                }
                className="w-full text-sm h-8 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
              <Button size="sm" variant="outline" className="h-8 dark:border-gray-600 dark:text-gray-200">
                Go
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-transparent bg-clip-text">
              Beauty & Health Deals
            </h1>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Search in deals..."
                className="max-w-sm bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
              />
              <Select defaultValue="trending">
                <SelectTrigger className="w-[160px] bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700">
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </header>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dealsData.map((deal, index) => (
              <DealCard key={index} deal={deal} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}