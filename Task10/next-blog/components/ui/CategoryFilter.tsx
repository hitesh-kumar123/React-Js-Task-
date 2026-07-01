"use client";

const categories = ["All", "Next.js", "React", "TypeScript"];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full border px-5 py-2 transition hover:bg-black hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
