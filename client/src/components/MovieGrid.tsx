import MovieCard from './MovieCard';
import { motion } from 'framer-motion';
import type { Movie } from '@/lib/movieData';

interface MovieGridProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
  onBookNow: (movie: Movie) => void;
}

export default function MovieGrid({ title, movies, onMovieClick, onBookNow }: MovieGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide mb-8" data-testid={`text-section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title.toUpperCase()}
        </h2>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {movies.map((movie) => (
            <motion.div key={movie.id} variants={item}>
              <MovieCard
                movie={movie}
                onClick={onMovieClick}
                onBookNow={onBookNow}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
