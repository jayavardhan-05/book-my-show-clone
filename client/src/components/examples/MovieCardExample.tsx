import MovieCard from '../MovieCard';
import { movies } from '@/lib/movieData';

export default function MovieCardExample() {
  return (
    <div className="w-64">
      <MovieCard
        movie={movies[0]}
        onClick={(movie) => console.log('Clicked:', movie.title)}
        onBookNow={(movie) => console.log('Book:', movie.title)}
      />
    </div>
  );
}
