import { useEffect, useRef, useState } from "react";
import { fetchCountries, fetchCountryDetails } from "./services/countriesApi";
import type { Country } from "./types/Country";
import type { DetailedCountry } from "./types/DetailedCountry";
import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StatsBar from "./components/StatsBar";
import LoadingSkeleton from "./components/LoadingSkeleton";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import RegionFilter from "./components/RegionFilter";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [region, setRegion] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [showToTop, setShowToTop] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<DetailedCountry | null>(null);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(() => setError("Failed to load country data."));
  }, []);

  const allRegions = Array.from(
    new Set(countries.map((c) => c.region).filter(Boolean))
  );

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.region?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = region === "All" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  useEffect(() => {
    setVisibleCount(20);
  }, [searchTerm, region]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && visibleCount < filteredCountries.length) {
          setIsFetchingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + 12, filteredCountries.length)
            );
            setIsFetchingMore(false);
          }, 500); // simulate load delay
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [filteredCountries.length, visibleCount]);

  useEffect(() => {
    const onScroll = () => {
      setShowToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCardClick = async (countryName: string) => {
    try {
      const detailed = await fetchCountryDetails(countryName);
      setSelectedCountry(detailed);
    } catch {
      alert("Failed to load country details");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-all duration-500">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {error && (
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 text-center">
              <p className="text-red-600 dark:text-red-400 font-medium">
                {error}
              </p>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
              <div className="flex-1 w-full lg:max-w-md">
                <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
              </div>
              <div className="w-full lg:w-auto lg:min-w-48">
                <RegionFilter
                  selectedRegion={region}
                  regions={allRegions}
                  onChange={setRegion}
                />
              </div>
            </div>

            <div className="border-t border-zinc-200/50 dark:border-zinc-700/50 pt-4">
              <StatsBar
                totalCount={countries.length}
                filteredCount={filteredCountries.length}
                searchTerm={searchTerm}
                region={region}
                onClearSearch={() => setSearchTerm("")}
                onClearRegion={() => setRegion("All")}
              />
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredCountries.slice(0, visibleCount).map((country, idx) => (
              <div
                key={country.name?.common || idx}
                className="group fade-in-up"
                onClick={() => handleCardClick(country.name.common)}
              >
                <CountryCard country={country} />
              </div>
            ))}
          </div>

          {filteredCountries.length === 0 && countries.length > 0 && (
            <EmptyState />
          )}
          {countries.length === 0 && !error && <LoadingSkeleton />}
          {visibleCount < filteredCountries.length && (
            <div ref={observerRef} className="py-10 flex justify-center">
              {isFetchingMore && (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-zinc-600 dark:border-zinc-300" />
              )}
            </div>
          )}
        </main>

        {showToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 cursor-pointer group bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </button>
        )}

        {selectedCountry && (
          <CountryModal
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;