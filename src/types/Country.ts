export interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt?: string;
  };
  region: string;
  population: number;
}