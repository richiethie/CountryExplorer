import type { Country } from "../types/Country";
import type { DetailedCountry } from "../types/DetailedCountry";

export const fetchCountries = async (): Promise<Country[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,cca3");

  if (!res.ok) throw new Error("Failed to fetch countries");

  const data = await res.json();

  return data.map((c: any) => ({
    name: {
      common: c.name?.common ?? "Unknown",
    },
    flags: {
      svg: c.flags?.svg ?? "",
      alt: c.flags?.alt ?? "",
    },
    region: c.region ?? "Unknown",
    population: c.population ?? 0,
    cca3: c.cca3 ?? "",
  }));
};

export const fetchCountryDetails = async (name: string): Promise<DetailedCountry> => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`);

  if (!res.ok) throw new Error("Failed to fetch country details");

  const [data] = await res.json(); // API still returns an array

  return {
    name: {
      common: data.name?.common ?? "Unknown",
      official: data.name?.official ?? "",
      nativeName: data.name?.nativeName ?? {},
    },
    flags: {
      svg: data.flags?.svg ?? "",
      png: data.flags?.png ?? "",
      alt: data.flags?.alt ?? "",
    },
    region: data.region ?? "Unknown",
    subregion: data.subregion ?? "",
    capital: data.capital ?? [],
    population: data.population ?? 0,
    area: data.area ?? 0,
    latlng: data.latlng ?? [0, 0],
    timezones: data.timezones ?? [],
    currencies: data.currencies ?? {},
    languages: data.languages ?? {},
    cca3: data.cca3 ?? "",
  };
};


