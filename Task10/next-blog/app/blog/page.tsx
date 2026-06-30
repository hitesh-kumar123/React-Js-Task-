import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-bold">Blogs</h1>

      <p className="mt-4 text-gray-600">
        Read the latest articles about Next.js, React, and TypeScript.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
