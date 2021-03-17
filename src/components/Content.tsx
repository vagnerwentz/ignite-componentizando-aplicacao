import '../styles/content.scss';

import { MovieCard } from './MovieCard';
interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
}

export function Content({ movies }: ContentProps) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  )  
}