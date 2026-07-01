import { blogs } from "@/data/blogs";

export function getAllBlogs() {
  return blogs;
}

export function getFeaturedBlog() {
  return blogs[0];
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(category: string, currentSlug: string) {
  return blogs.filter(
    (blog) => blog.category === category && blog.slug !== currentSlug,
  );
}
