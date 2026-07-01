"use client";

import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
};

export default function MobileMenu({ open }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="border-t bg-white md:hidden">
      <nav className="flex flex-col p-6">
        <Link href="/" className="py-3">
          Home
        </Link>

        <Link href="/blog" className="py-3">
          Blogs
        </Link>

        <Link href="/about" className="py-3">
          About
        </Link>
      </nav>
    </div>
  );
}
