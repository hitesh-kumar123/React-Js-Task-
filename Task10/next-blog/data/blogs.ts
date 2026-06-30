import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and build your first application.",
    image: "/images/nextjs.jpg",
    author: "Hitesh",
    publishedAt: "2026-06-30",
    category: "Next.js",
  },
  {
    id: 2,
    slug: "why-typescript-matters",
    title: "Why TypeScript Matters",
    description:
      "Understand how TypeScript helps you write safer and more maintainable code.",
    image: "/images/typescript.jpg",
    author: "Hitesh",
    publishedAt: "2026-06-29",
    category: "TypeScript",
  },
  {
    id: 3,
    slug: "react-best-practices",
    title: "React Best Practices",
    description:
      "Explore common React patterns and best practices used in production applications.",
    image: "/images/react.jpg",
    author: "Hitesh",
    publishedAt: "2026-06-28",
    category: "React",
  },
];
