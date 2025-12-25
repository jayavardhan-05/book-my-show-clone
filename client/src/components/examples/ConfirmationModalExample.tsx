import { useState } from 'react';
import ConfirmationModal from '../ConfirmationModal';
import { Button } from '@/components/ui/button';
import { movies, showtimes, generateSeats } from '@/lib/movieData';

export default function ConfirmationModalExample() {
  const [open, setOpen] = useState(true);
  const selectedSeats = generateSeats().filter(s => s.status === 'available').slice(0, 2);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Confirmation</Button>
      <ConfirmationModal
        open={open}
        onClose={() => setOpen(false)}
        movie={movies[0]}
        showtime={showtimes[0]}
        selectedSeats={selectedSeats}
        bookingId="CB2024122001234"
      />
    </div>
  );
}
