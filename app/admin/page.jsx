"use client";
import { useState } from "react";
import { createDeal } from "@/actions/createDealAction";

export default function AdminPanel() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const formData = new FormData(e.currentTarget);
    try {
      await createDeal(formData);
      setMessage("✅ Deal created and posted successfully!");
      e.target.reset(); // Clear form
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Deal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Inputs */}
        <input name="name" placeholder="Deal Name" required className="w-full p-2 border rounded" />
        <input name="imageSrc" placeholder="Image URL" required className="w-full p-2 border rounded" />
        <input name="originalPrice" type="number" placeholder="Original Price" step="0.01" required className="w-full p-2 border rounded" />
        <input name="discountedPrice" type="number" placeholder="Discounted Price" step="0.01" required className="w-full p-2 border rounded" />
        <input name="discountPercentage" type="number" placeholder="Discount %" required className="w-full p-2 border rounded" />
        <input name="timeAgo" placeholder="Time Ago (e.g., 1 hour ago)" className="w-full p-2 border rounded" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isTopDeal" />
          <span>Mark as Top Deal</span>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300"
        >
          {loading ? "Posting..." : "Post Deal"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}