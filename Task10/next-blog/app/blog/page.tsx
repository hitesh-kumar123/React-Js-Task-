import type { Metadata } from "next";

import BlogCard from "@/components/ui/BlogCard";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse all blog articles",
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          Latest Articles
        </span>

        <h1 className="mt-6 text-5xl font-bold">Explore Our Blogs</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Read articles about Next.js, React, TypeScript and modern frontend
          development.
        </p>
      </div>

      <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}
