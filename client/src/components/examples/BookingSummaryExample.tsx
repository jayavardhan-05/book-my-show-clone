import BookingSummary from '../BookingSummary';
import { movies, showtimes, generateSeats } from '@/lib/movieData';

export default function BookingSummaryExample() {
  const selectedSeats = generateSeats().filter(s => s.status === 'available').slice(0, 3).map(s => ({
    ...s,
    status: 'selected' as const
  }));

  return (
    <div className="max-w-md">
      <BookingSummary
        movie={movies[0]}
        showtime={showtimes[0]}
        selectedSeats={selectedSeats}
        onConfirm={() => console.log('Confirmed!')}
        onBack={() => console.log('Back')}
      />
    </div>
  );
}
