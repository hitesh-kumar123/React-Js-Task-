export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="h-6 w-28 animate-pulse rounded bg-gray-200" />

      <div className="mt-8 h-14 w-3/4 animate-pulse rounded bg-gray-200" />

      <div className="mt-6 h-6 w-60 animate-pulse rounded bg-gray-200" />

      <div className="mt-10 h-[500px] animate-pulse rounded-2xl bg-gray-200" />

      <div className="mt-12 space-y-6">
        <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>
    </main>
  );
}
