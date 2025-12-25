import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Movie } from '@/lib/movieData';

interface HeroSectionProps {
  movie: Movie;
  onBookNow: (movie: Movie) => void;
  onWatchTrailer: (movie: Movie) => void;
}

export default function HeroSection({ movie, onBookNow, onWatchTrailer }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-end pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {movie.genre.map((g) => (
              <Badge key={g} variant="secondary" className="backdrop-blur-sm">
                {g}
              </Badge>
            ))}
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl tracking-wide mb-4" data-testid="text-hero-title">
            {movie.title.toUpperCase()}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold" data-testid="text-hero-rating">{movie.rating}</span>
              <span className="text-muted-foreground">/10</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{movie.runtime} min</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8 line-clamp-3 text-base">
            {movie.synopsis}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => onBookNow(movie)}
              className="px-8"
              data-testid="button-hero-book"
            >
              Book Tickets
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onWatchTrailer(movie)}
              className="px-8 backdrop-blur-sm"
              data-testid="button-hero-trailer"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      />
    </section>
  );
}
