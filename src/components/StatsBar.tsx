interface StatsBarProps {
  totalCount: number;
  filteredCount: number;
  searchTerm: string;
  region: string;
  onClearSearch: () => void;
  onClearRegion: () => void;
}

export default function StatsBar({
  totalCount,
  filteredCount,
  searchTerm,
  region,
  onClearSearch,
  onClearRegion,
}: StatsBarProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
      <span className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
        {searchTerm || region !== "All" ? `${filteredCount} results` : `${totalCount} countries`}
      </span>

      {searchTerm && (
        <span className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800/50">
          Searching: "{searchTerm}"
          <button
            onClick={onClearSearch}
            className="text-blue-600 cursor-pointer dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:outline-none"
            aria-label="Clear search"
          >
            ×
          </button>
        </span>
      )}

      {region !== "All" && (
        <span className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50">
          Filtering by: {region}
          <button
            onClick={onClearRegion}
            className="text-green-700 cursor-pointer dark:text-green-400 hover:text-green-900 dark:hover:text-green-200 focus:outline-none"
            aria-label="Clear region"
          >
            ×
          </button>
        </span>
      )}
    </div>
  );
}
