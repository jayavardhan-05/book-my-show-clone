import MovieDetails from '../MovieDetails';
import { movies } from '@/lib/movieData';

export default function MovieDetailsExample() {
  return (
    <div className="max-w-2xl">
      <MovieDetails movie={movies[0]} />
    </div>
  );
}
