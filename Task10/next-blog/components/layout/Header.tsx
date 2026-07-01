"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          NextBlog
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "font-semibold text-blue-600"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/blog"
          className="hidden rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800 md:inline-block"
        >
          Explore
        </Link>

        <button className="md:hidden">☰</button>
      </div>
    </header>
  );
}
