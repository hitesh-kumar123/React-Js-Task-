export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="h-10 w-64 animate-pulse rounded bg-gray-200"></div>

      <div className="mt-6 h-6 w-96 animate-pulse rounded bg-gray-200"></div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border">
            <div className="h-56 animate-pulse bg-gray-200"></div>

            <div className="space-y-4 p-6">
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>

              <div className="h-6 w-full animate-pulse rounded bg-gray-200"></div>

              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>

              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
