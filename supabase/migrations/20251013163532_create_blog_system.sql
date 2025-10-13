/*
  # Blog System Setup

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly version of title
      - `content` (text) - Full blog post content (supports markdown/HTML)
      - `summary` (text) - Short description for previews
      - `cover_image` (text) - URL to featured image
      - `author` (text) - Author name
      - `tags` (text array) - Categories/tags for filtering
      - `status` (text) - draft, published, scheduled
      - `views` (integer) - View count
      - `published_at` (timestamptz) - When post goes live
      - `created_at` (timestamptz) - When created
      - `updated_at` (timestamptz) - Last modified

  2. Security
    - Enable RLS on `blogs` table
    - Allow public read access to published blogs
    - Restrict write access (admin only - handled in API layer)

  3. Indexes
    - Index on slug for fast lookups
    - Index on status and published_at for filtering
    - Index on tags for category filtering
*/

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  summary text DEFAULT '',
  cover_image text DEFAULT '',
  author text DEFAULT 'Value Hunter Team',
  tags text[] DEFAULT '{}',
  status text DEFAULT 'draft',
  views integer DEFAULT 0,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Public can read published blogs
CREATE POLICY "Anyone can view published blogs"
  ON blogs FOR SELECT
  USING (status = 'published' AND published_at <= now());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status_published ON blogs(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_tags ON blogs USING GIN(tags);

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
