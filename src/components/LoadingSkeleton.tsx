export default function LoadingSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 p-6 animate-pulse"
        >
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg mb-4"></div>
          <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"></div>
          <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}
