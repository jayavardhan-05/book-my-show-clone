import ShowtimeSelector from '../ShowtimeSelector';
import { showtimes } from '@/lib/movieData';

export default function ShowtimeSelectorExample() {
  return (
    <div className="w-80">
      <ShowtimeSelector
        showtimes={showtimes.filter(s => s.movieId === '1')}
        onSelectShowtime={(showtime) => console.log('Selected:', showtime)}
      />
    </div>
  );
}
