import type { Country } from "../types/Country";

interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <div className="group cursor-pointer bg-zinc-100/90 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out">
      {/* Flag Image */}
      <div className="p-4 pt-6">
        <div className="relative overflow-hidden">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            className="w-full h-45 md:h-50 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {country.name.common}
        </h2>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {country.region}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {country.population.toLocaleString()} people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}