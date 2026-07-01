import Link from "next/link";

import BlogCard from "@/components/ui/BlogCard";
import { getAllBlogs } from "@/lib/blogs";

export default function LatestPosts() {
  const blogs = getAllBlogs();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Latest Posts</h2>

        <Link href="/blog" className="font-medium text-blue-600">
          Browse All →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
