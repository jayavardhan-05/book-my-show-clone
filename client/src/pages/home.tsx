import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MovieGrid from '@/components/MovieGrid';
import { movies } from '@/lib/movieData';
import type { Movie } from '@/lib/movieData';

interface HomePageProps {
  onMovieSelect: (movie: Movie) => void;
}

export default function HomePage({ onMovieSelect }: HomePageProps) {
  const [featuredIndex] = useState(0);
  const featuredMovie = movies[featuredIndex];
  
  // todo: remove mock functionality - filter by actual release dates
  const nowShowing = movies.slice(0, 4);
  const comingSoon = movies.slice(4);

  const handleSearch = (query: string) => {
    console.log('Search for:', query);
    // todo: implement search functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header ticketCount={0} onSearch={handleSearch} />
      
      <main className="pt-16">
        <HeroSection
          movie={featuredMovie}
          onBookNow={onMovieSelect}
          onWatchTrailer={(movie) => console.log('Watch trailer:', movie.title)}
        />
        
        <section id="now-showing">
          <MovieGrid
            title="Now Showing"
            movies={nowShowing}
            onMovieClick={onMovieSelect}
            onBookNow={onMovieSelect}
          />
        </section>
        
        <section id="coming-soon">
          <MovieGrid
            title="Coming Soon"
            movies={comingSoon}
            onMovieClick={onMovieSelect}
            onBookNow={onMovieSelect}
          />
        </section>
      </main>
      
      <footer className="border-t border-border py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Movies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Now Showing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Coming Soon</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Top Rated</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theaters</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Find a Theater</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">IMAX</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Premium</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sign In</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">My Bookings</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Rewards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>CineBook - Your Premier Movie Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
