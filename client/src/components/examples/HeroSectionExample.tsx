import HeroSection from '../HeroSection';
import { movies } from '@/lib/movieData';

export default function HeroSectionExample() {
  return (
    <HeroSection
      movie={movies[0]}
      onBookNow={(movie) => console.log('Book now:', movie.title)}
      onWatchTrailer={(movie) => console.log('Watch trailer:', movie.title)}
    />
  );
}
