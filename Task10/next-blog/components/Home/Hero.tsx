import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
          Next.js 16 Blog
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Learn Modern
          <span className="text-blue-600"> Web Development</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Discover tutorials, best practices and practical guides about Next.js,
          React, TypeScript and modern frontend development.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href="/blog"
            className="rounded-lg bg-black px-7 py-4 text-white transition hover:bg-gray-800"
          >
            Explore Blogs
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-gray-300 px-7 py-4 transition hover:border-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
