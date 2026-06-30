import Link from "next/link";
import { Blog } from "@/types/blog";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
        {blog.category}
      </span>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        <Link href={`/blog/${blog.slug}`} className="hover:text-blue-600">
          {blog.title}
        </Link>
      </h2>

      <p className="mt-3 text-gray-600">{blog.description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <span>{blog.author}</span>
        <span>•</span>
        <span>{blog.publishedAt}</span>
      </div>

      <Link
        href={`/blog/${blog.slug}`}
        className="mt-6 inline-block font-medium text-blue-600 hover:text-blue-700"
      >
        Read More →
      </Link>
    </article>
  );
}
