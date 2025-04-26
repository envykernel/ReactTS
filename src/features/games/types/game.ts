export interface Game {
  id: string;
  title: string;
  details: string;
  releaseDate: Date;
  image: string;
  platforms: string[];
  genres: string[];
}

export type Games = Game[];