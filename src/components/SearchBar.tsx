import { Search } from "lucide-react";

interface Props {
  searchTerm: string;
  onChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onChange }: Props) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
        <Search className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search countries or regions..."
        aria-label="Search countries or regions"
        className="block w-full pl-12 pr-4 py-3 border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500/50 dark:focus:border-blue-400/50 hover:border-zinc-300/70 dark:hover:border-zinc-600/70 font-medium shadow-sm hover:shadow-md transition-all duration-200 ease-out"
      />
    </div>
  );
}