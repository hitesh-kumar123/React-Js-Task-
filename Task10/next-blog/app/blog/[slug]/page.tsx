import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import RelatedPosts from "@/components/Home/RelatedPosts";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";

type BlogDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
        {blog.category}
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight">{blog.title}</h1>

      <div className="mt-6 flex items-center gap-3 text-gray-500">
        <span>{blog.author}</span>

        <span>•</span>

        <span>{blog.publishedAt}</span>
      </div>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={700}
        priority
        className="mt-10 h-[500px] w-full rounded-2xl object-cover"
      />

      <article className="prose prose-lg mt-12 max-w-none">
        <p className="whitespace-pre-line leading-9 text-gray-700">
          {blog.content}
        </p>
      </article>

      <RelatedPosts category={blog.category} currentSlug={blog.slug} />
    </main>
  );
}
