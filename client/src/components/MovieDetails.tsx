import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Calendar, User, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Movie } from '@/lib/movieData';

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img 
          src={movie.backdrop} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {movie.genre.map((g) => (
            <Badge key={g} variant="secondary">
              {g}
            </Badge>
          ))}
        </div>

        <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4" data-testid="text-movie-detail-title">
          {movie.title.toUpperCase()}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{movie.rating}</span>
            <span className="text-muted-foreground">/10</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{movie.runtime} min</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="py-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" />
              Synopsis
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Director
            </h3>
            <p className="text-muted-foreground">{movie.director}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <Badge key={actor} variant="outline">
                  {actor}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
