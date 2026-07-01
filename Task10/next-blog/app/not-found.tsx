import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-black text-blue-600">404</h1>

        <h2 className="mt-6 text-4xl font-bold">Blog Not Found</h2>

        <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="rounded-lg border border-gray-300 px-6 py-3 transition hover:border-black"
          >
            Browse Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
