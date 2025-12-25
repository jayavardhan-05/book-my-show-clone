import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import HomePage from '@/pages/home';
import BookingPage from '@/pages/booking';
import type { Movie } from '@/lib/movieData';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToHome = () => {
    setSelectedMovie(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {selectedMovie ? (
          <BookingPage movie={selectedMovie} onBack={handleBackToHome} />
        ) : (
          <HomePage onMovieSelect={handleMovieSelect} />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
