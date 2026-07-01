import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Next Blog",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          About Us
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          We share knowledge about modern web development.
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600">
          Next Blog is a modern frontend blog built using Next.js 16, TypeScript
          and Tailwind CSS. It demonstrates reusable components, dynamic
          routing, SEO, image optimization and production-ready project
          structure.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          This project is created for learning Next.js App Router while
          following real-world frontend architecture.
        </p>
      </div>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">Next.js</h2>

          <p className="mt-4 text-gray-600">
            File-based routing, metadata, server components and image
            optimization.
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">TypeScript</h2>

          <p className="mt-4 text-gray-600">
            Type-safe development with better autocomplete and fewer bugs.
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">Tailwind CSS</h2>

          <p className="mt-4 text-gray-600">
            Utility-first CSS for building beautiful responsive interfaces.
          </p>
        </div>
      </section>
    </main>
  );
}
