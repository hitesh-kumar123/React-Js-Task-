import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and build your first application.",
    content: `
Next.js is a React Framework developed by Vercel.

It provides:

• File Based Routing

• Server Components

• Metadata API

• Image Optimization

• Static Site Generation

• Server Side Rendering

It is one of the most popular frameworks for building modern web applications.
`,
    image: "/images/nextjs.jpeg",
    author: "John Doe",
    publishedAt: "30 June 2026",
    category: "Next.js",
  },

  {
    id: 2,
    slug: "why-typescript-matters",
    title: "Why TypeScript Matters",
    description:
      "Understand how TypeScript improves your JavaScript applications.",
    content: `
TypeScript adds static typing to JavaScript.

Benefits:

• Better IntelliSense

• Error Detection

• Easy Refactoring

• Better Maintainability

TypeScript is widely used in React and Next.js projects.
`,
    image: "/images/typescript.jpeg",
    author: "John Doe",
    publishedAt: "28 June 2026",
    category: "TypeScript",
  },

  {
    id: 3,
    slug: "react-best-practices",
    title: "React Best Practices",
    description: "Best practices every React developer should know.",
    content: `
Write reusable components.

Keep components small.

Avoid prop drilling.

Use TypeScript.

Prefer composition over inheritance.

Keep your UI clean and maintainable.
`,
    image: "/images/react.png",
    author: "John Doe",
    publishedAt: "26 June 2026",
    category: "React",
  },
];
