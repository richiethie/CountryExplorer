import { ChevronDown } from "lucide-react";

interface RegionFilterProps {
  selectedRegion: string;
  regions: string[];
  onChange: (region: string) => void;
}

const RegionFilter = ({ selectedRegion, regions, onChange }: RegionFilterProps) => {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <select
        value={selectedRegion}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none cursor-pointer w-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl px-4 py-3 pr-12 leading-tight font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500/50 dark:focus:border-blue-400/50 hover:border-zinc-300/70 dark:hover:border-zinc-600/70 transition-all duration-200 ease-out"
      >
        <option value="All" className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
          All Regions
        </option>
        {regions.map((region) => (
          <option 
            key={region} 
            value={region}
            className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
          >
            {region}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500 dark:text-zinc-400 transition-colors duration-200">
        <ChevronDown className="w-4 h-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200" />
      </div>
    </div>
  );
};

export default RegionFilter;