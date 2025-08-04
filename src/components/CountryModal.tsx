import type { DetailedCountry } from "../types/DetailedCountry";
import { X, MapPin, Users, Globe, Clock } from "lucide-react";
import { useEffect } from "react";

interface CountryModalProps {
  country: DetailedCountry;
  onClose: () => void;
}

export default function CountryModal({ country, onClose }: CountryModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const mapUrl = `https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=4&output=embed`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-800 dark:text-zinc-100 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-10 cursor-pointer bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-200 rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-105"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative group">
              <img
                src={country.flags.svg}
                alt={country.flags.alt || `Flag of ${country.name.common}`}
                className="w-24 h-16 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-zinc-200/50 dark:border-zinc-700/50"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent mb-2">
                {country.name.common}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                {country.name.official}
              </p>
            </div>
          </div>

          {/* Key Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Capital</p>
                  <p className="font-semibold text-sm">{country.capital?.join(", ") || "—"}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Population</p>
                  <p className="font-semibold text-sm">{country.population.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Region</p>
                  <p className="font-semibold text-sm">{country.region}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Area</p>
                  <p className="font-semibold text-sm">{country.area.toLocaleString()} km²</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Additional Information</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">Subregion</p>
                  <p className="font-semibold">{country.subregion || "—"}</p>
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">Languages</p>
                  <p className="font-semibold">{Object.values(country.languages).join(", ") || "—"}</p>
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">Timezones</p>
                  <p className="font-semibold">{country.timezones.join(", ")}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">Currencies</p>
                  <p className="font-semibold">
                    {Object.values(country.currencies)
                      .map((c) => `${c.name} (${c.symbol})`)
                      .join(", ") || "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Location</h3>
            <div className="w-full aspect-[4/6] sm:aspect-video rounded-xl overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg">
              <iframe
                title={`Map of ${country.name.common}`}
                src={mapUrl}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}