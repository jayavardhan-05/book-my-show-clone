import MovieGrid from '../MovieGrid';
import { movies } from '@/lib/movieData';

export default function MovieGridExample() {
  return (
    <MovieGrid
      title="Now Showing"
      movies={movies.slice(0, 4)}
      onMovieClick={(movie) => console.log('Clicked:', movie.title)}
      onBookNow={(movie) => console.log('Book:', movie.title)}
    />
  );
}
