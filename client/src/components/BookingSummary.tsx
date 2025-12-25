import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin, Armchair, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Movie, Showtime, Seat } from '@/lib/movieData';

interface BookingSummaryProps {
  movie: Movie;
  showtime: Showtime;
  selectedSeats: Seat[];
  onConfirm: () => void;
  onBack: () => void;
}

export default function BookingSummary({ movie, showtime, selectedSeats, onConfirm, onBack }: BookingSummaryProps) {
  const subtotal = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-primary" />
            Booking Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-20 h-28 object-cover rounded-md"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-2" data-testid="text-summary-movie">
                {movie.title}
              </h3>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(showtime.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{showtime.time}</span>
                  <Badge variant="secondary" className="text-xs">{showtime.format}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{showtime.theater}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Armchair className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Selected Seats ({selectedSeats.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map(seat => (
                <Badge key={seat.id} variant="outline" className="gap-1">
                  {seat.id}
                  <span className="text-muted-foreground">${seat.price}</span>
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service Fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span data-testid="text-booking-total">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onBack} className="flex-1" data-testid="button-back">
              Back
            </Button>
            <Button onClick={onConfirm} className="flex-1" data-testid="button-confirm">
              Confirm Booking
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
