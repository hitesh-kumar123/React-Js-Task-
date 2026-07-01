"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search articles..."
        className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-black"
      />
    </div>
  );
}
