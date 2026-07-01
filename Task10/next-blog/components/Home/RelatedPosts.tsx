import BlogCard from "@/components/ui/BlogCard";

import { getRelatedBlogs } from "@/lib/blogs";

type RelatedPostsProps = {
  category: string;
  currentSlug: string;
};

export default function RelatedPosts({
  category,
  currentSlug,
}: RelatedPostsProps) {
  const blogs = getRelatedBlogs(category, currentSlug);

  if (!blogs.length) return null;

  return (
    <section className="mt-24 border-t pt-20">
      <h2 className="mb-10 text-4xl font-bold">Related Posts</h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
