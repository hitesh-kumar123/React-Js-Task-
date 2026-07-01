export default function Loading() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <p className="mt-6 text-lg font-medium">Loading...</p>
      </div>
    </main>
  );
}
