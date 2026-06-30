import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
      <h1 className="text-5xl font-bold">Welcome to Next Blog</h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Discover articles about Next.js, React, TypeScript, and modern web
        development.
      </p>

      <Link
        href="/blog"
        className="mt-8 rounded-md bg-black px-6 py-3 text-white transition hover:opacity-90"
      >
        Explore Blogs
      </Link>
    </section>
  );
}
