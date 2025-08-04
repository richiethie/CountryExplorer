import type { Country } from "../types/Country";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population");

    console.log("Response status:", res.status);

    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await res.json();

    const cleaned: Country[] = data.map((c: any) => ({
      name: {
        common: c.name?.common ?? "Unknown",
      },
      flags: {
        svg: c.flags?.svg ?? "",
        alt: c.flags?.alt ?? "",
      },
      region: c.region ?? "Unknown",
      population: c.population ?? 0,
    }));

    return cleaned;
  } catch (err) {
    console.error("fetchCountries error:", err);
    throw err;
  }
};
