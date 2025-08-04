export interface DetailedCountry {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  flags: {
    svg: string;
    png?: string;
    alt?: string;
  };
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  area: number;
  latlng: [number, number];
  timezones: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  cca3: string;
}