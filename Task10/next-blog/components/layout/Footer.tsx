import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">NextBlog</h2>

            <p className="mt-4 leading-7 text-gray-600">
              A modern blog built with Next.js 16, TypeScript and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Navigation</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/blog">Blogs</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>

            <p className="mt-5 text-gray-600">hello@nextblog.dev</p>

            <p className="mt-2 text-gray-600">India</p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-gray-500">
          © 2026 NextBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
