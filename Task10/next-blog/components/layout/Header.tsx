import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Next Blog</h1>

        <nav>
          <ul className="flex items-center gap-8">
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
        </nav>

        <button className="rounded-md bg-black px-5 py-2 text-white">
          Subscribe
        </button>
      </div>
    </header>
  );
}
