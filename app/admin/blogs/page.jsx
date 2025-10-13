"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminBlogsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [enteredPassword, setEnteredPassword] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setEnteredPassword(true);
    } else {
      alert("Incorrect password");
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const content = formData.get("content");
    const summary = formData.get("summary");
    const coverImage = formData.get("coverImage");
    const author = formData.get("author") || "Value Hunter Team";
    const tagsString = formData.get("tags");
    const status = formData.get("status");

    const tags = tagsString ? tagsString.split(",").map((t) => t.trim()) : [];
    const slug = generateSlug(title);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          content,
          summary,
          coverImage,
          author,
          tags,
          status,
          publishedAt: status === "published" ? new Date().toISOString() : null,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create blog");
      }

      setMessage("Blog post created successfully!");
      e.target.reset();

      setTimeout(() => {
        router.push("/blogs");
      }, 1500);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded mt-10 shadow">
      {!enteredPassword ? (
        <form onSubmit={handlePasswordSubmit} className="space-y-4 text-center">
          <h2 className="text-xl font-bold">Enter Admin Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Title *</label>
              <input
                name="title"
                placeholder="e.g., Top 10 Laptops Under Rs.50,000"
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Summary *</label>
              <textarea
                name="summary"
                placeholder="Short description (shown in blog cards)"
                rows="2"
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Content *</label>
              <textarea
                name="content"
                placeholder="Full blog content (supports HTML)"
                rows="12"
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <p className="text-sm text-gray-500 mt-1">
                Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt; for formatting
              </p>
            </div>

            <div>
              <label className="block mb-2 font-medium">Cover Image URL</label>
              <input
                name="coverImage"
                placeholder="https://example.com/image.jpg"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Author</label>
              <input
                name="author"
                placeholder="Value Hunter Team"
                defaultValue="Value Hunter Team"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Tags (comma-separated)</label>
              <input
                name="tags"
                placeholder="e.g., laptops, electronics, budget"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Status *</label>
              <select
                name="status"
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded disabled:bg-blue-300 w-full"
            >
              {loading ? "Creating..." : "Create Blog Post"}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm font-medium">{message}</p>
          )}
        </>
      )}
    </div>
  );
}
