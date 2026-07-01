import Image from "next/image";
import Link from "next/link";

import { Blog } from "@/types/blog";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={350}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          {blog.category}
        </span>

        <h2 className="mt-4 text-2xl font-bold leading-snug">
          <Link
            href={`/blog/${blog.slug}`}
            className="transition hover:text-blue-600"
          >
            {blog.title}
          </Link>
        </h2>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {blog.description}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{blog.author}</span>

          <span>{blog.publishedAt}</span>
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
