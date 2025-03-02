export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
  original_language: string;
  release_date: string;
}