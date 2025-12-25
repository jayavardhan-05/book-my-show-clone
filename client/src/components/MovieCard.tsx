import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Movie } from '@/lib/movieData';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onBookNow?: (movie: Movie) => void;
}

export default function MovieCard({ movie, onClick, onBookNow }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="relative overflow-hidden cursor-pointer group"
        onClick={() => onClick(movie)}
        data-testid={`card-movie-${movie.id}`}
      >
        <div className="aspect-[2/3] relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onBookNow?.(movie);
              }}
              className="gap-2"
              data-testid={`button-book-${movie.id}`}
            >
              <Ticket className="w-4 h-4" />
              Book Now
            </Button>
          </motion.div>
          
          <div className="absolute top-3 right-3">
            <Badge className="gap-1 bg-black/60 backdrop-blur-sm border-0">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {movie.rating}
            </Badge>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-semibold text-lg text-white mb-1 line-clamp-1" data-testid={`text-movie-title-${movie.id}`}>
              {movie.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span>{movie.genre[0]}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {movie.runtime}m
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
