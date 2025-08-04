import { Search } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
        <Search className="w-8 h-8 text-zinc-400" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
        No countries found
      </h3>
      <p className="text-zinc-500 dark:text-zinc-500">Try adjusting your search terms</p>
    </div>
  );
}
