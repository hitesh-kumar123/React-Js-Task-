import Image from "next/image";
import Link from "next/link";

import { getFeaturedBlog } from "@/lib/blogs";

export default function FeaturedPost() {
  const blog = getFeaturedBlog();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Featured Post</h2>

        <Link href="/blog" className="font-medium text-blue-600">
          View All →
        </Link>
      </div>

      <div className="grid gap-12 overflow-hidden rounded-3xl border bg-white p-8 shadow-sm lg:grid-cols-2">
        <Image
          src={blog.image}
          alt={blog.title}
          width={700}
          height={500}
          className="h-full min-h-[420px] rounded-2xl object-cover"
        />

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            {blog.category}
          </span>

          <h3 className="mt-6 text-5xl font-bold leading-tight">
            {blog.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {blog.description}
          </p>

          <div className="mt-8 flex items-center gap-3 text-gray-500">
            <span>{blog.author}</span>

            <span>•</span>

            <span>{blog.publishedAt}</span>
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="mt-10 w-fit rounded-lg bg-black px-7 py-4 text-white transition hover:bg-gray-800"
          >
            Read Article
          </Link>
        </div>
      </div>
    </section>
  );
}
