// app/admin/insta/page.js
"use client";

import CardItem from "@/app/(components)/CardItem";
import { useEffect, useState } from "react";


export default function InstaAdminPanel() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", image: "", link: "" });
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Cards
  const fetchCards = async () => {
    const res = await fetch(`/api/instacards?page=${currentPage}`);
    const data = await res.json();
    setCards(data.cards);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, [currentPage]);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `/api/instacards/${editingId}` : "/api/instacards";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ title: "", image: "", link: "" });
      setEditingId(null);
      fetchCards();
    } else {
      alert("Failed to save card");
    }
  };

  // Handle Edit
  const handleEdit = (card) => {
    setForm({ title: card.title, image: card.image, link: card.link });
    setEditingId(card.id);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/instacards/${id}`, { method: "DELETE" });
    if (res.ok) fetchCards();
    else alert("Failed to delete card");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Instagram Card Manager</h1>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Card" : "Add New Card"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            placeholder="Product Link"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            required
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {editingId ? "Update" : "Add Card"}
        </button>
        {editingId && (
          <button onClick={() => setEditingId(null)} type="button" className="ml-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Cancel
          </button>
        )}
      </form>

      {/* Card Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 mx-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-1 bg-gray-100 dark:bg-gray-800 rounded">{currentPage}</span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 mx-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}