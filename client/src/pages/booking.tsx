import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import BookingSteps from '@/components/BookingSteps';
import MovieDetails from '@/components/MovieDetails';
import ShowtimeSelector from '@/components/ShowtimeSelector';
import SeatSelector from '@/components/SeatSelector';
import BookingSummary from '@/components/BookingSummary';
import ConfirmationModal from '@/components/ConfirmationModal';
import { showtimes as allShowtimes } from '@/lib/movieData';
import { ArrowLeft } from 'lucide-react';
import type { Movie, Showtime, Seat } from '@/lib/movieData';

interface BookingPageProps {
  movie: Movie;
  onBack: () => void;
}

export default function BookingPage({ movie, onBack }: BookingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const movieShowtimes = allShowtimes.filter(s => s.movieId === movie.id);
  const steps = ['Select Showtime', 'Choose Seats', 'Confirm'];

  const handleShowtimeSelect = (showtime: Showtime) => {
    setSelectedShowtime(showtime);
  };

  const handleSeatsSelected = (seats: Seat[]) => {
    setSelectedSeats(seats);
  };

  const handleConfirmBooking = () => {
    // todo: remove mock functionality - integrate with real booking API
    const id = `CB${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${String(Math.floor(Math.random() * 100000)).padStart(5, '0')}`;
    setBookingId(id);
    setShowConfirmation(true);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onBack();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header ticketCount={selectedSeats.length} />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={onBack}
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Movies
          </Button>
          
          <BookingSteps currentStep={currentStep} steps={steps} />
          
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === 0 && (
                <>
                  <MovieDetails movie={movie} />
                  
                  {selectedShowtime && (
                    <div className="mt-8 flex justify-end">
                      <Button onClick={handleNextStep} data-testid="button-next-step">
                        Continue to Seats
                      </Button>
                    </div>
                  )}
                </>
              )}
              
              {currentStep === 1 && selectedShowtime && (
                <>
                  <SeatSelector
                    showtimeId={selectedShowtime.id}
                    onSeatsSelected={handleSeatsSelected}
                  />
                  
                  <div className="mt-8 flex justify-between gap-4">
                    <Button variant="outline" onClick={handlePrevStep} data-testid="button-prev-step">
                      Back
                    </Button>
                    <Button 
                      onClick={handleNextStep} 
                      disabled={selectedSeats.length === 0}
                      data-testid="button-continue-confirm"
                    >
                      Continue to Confirm
                    </Button>
                  </div>
                </>
              )}
              
              {currentStep === 2 && selectedShowtime && (
                <BookingSummary
                  movie={movie}
                  showtime={selectedShowtime}
                  selectedSeats={selectedSeats}
                  onConfirm={handleConfirmBooking}
                  onBack={handlePrevStep}
                />
              )}
            </div>
            
            <div>
              {currentStep === 0 && (
                <ShowtimeSelector
                  showtimes={movieShowtimes}
                  onSelectShowtime={handleShowtimeSelect}
                />
              )}
              
              {currentStep > 0 && selectedShowtime && (
                <div className="sticky top-20">
                  <div className="bg-card rounded-lg p-4 space-y-3">
                    <div className="flex gap-3">
                      <img 
                        src={movie.poster} 
                        alt={movie.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{movie.title}</h3>
                        <p className="text-sm text-muted-foreground">{selectedShowtime.theater}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(selectedShowtime.date).toLocaleDateString()} at {selectedShowtime.time}
                        </p>
                      </div>
                    </div>
                    
                    {selectedSeats.length > 0 && (
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          {selectedSeats.length} seat(s): {selectedSeats.map(s => s.id).join(', ')}
                        </p>
                        <p className="font-semibold mt-1">
                          ${(selectedSeats.reduce((sum, s) => sum + s.price, 0) * 1.1).toFixed(2)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {selectedShowtime && (
        <ConfirmationModal
          open={showConfirmation}
          onClose={handleConfirmationClose}
          movie={movie}
          showtime={selectedShowtime}
          selectedSeats={selectedSeats}
          bookingId={bookingId}
        />
      )}
    </div>
  );
}
