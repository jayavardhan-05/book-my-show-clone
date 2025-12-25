import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSeats, type Seat } from '@/lib/movieData';

interface SeatSelectorProps {
  showtimeId: string;
  onSeatsSelected: (seats: Seat[]) => void;
}

export default function SeatSelector({ showtimeId, onSeatsSelected }: SeatSelectorProps) {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  useEffect(() => {
    setSeats(generateSeats());
    setSelectedSeats([]);
  }, [showtimeId]);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'booked') return;

    const isSelected = selectedSeats.some(s => s.id === seat.id);
    let newSelected: Seat[];

    if (isSelected) {
      newSelected = selectedSeats.filter(s => s.id !== seat.id);
    } else {
      newSelected = [...selectedSeats, { ...seat, status: 'selected' }];
    }

    setSelectedSeats(newSelected);
    onSeatsSelected(newSelected);
  };

  const rows = Array.from(new Set(seats.map(s => s.row))).sort();
  const totalPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  const getSeatColor = (seat: Seat) => {
    const isSelected = selectedSeats.some(s => s.id === seat.id);
    if (isSelected) return 'bg-primary text-primary-foreground border-primary';
    if (seat.status === 'booked') return 'bg-muted text-muted-foreground cursor-not-allowed opacity-50';
    if (seat.type === 'vip') return 'bg-amber-500/20 border-amber-500/50 text-amber-400 hover-elevate';
    if (seat.type === 'premium') return 'bg-purple-500/20 border-purple-500/50 text-purple-400 hover-elevate';
    return 'bg-card border-border hover-elevate';
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="mx-auto max-w-md">
          <div className="relative h-8 mb-8">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-60" />
            <div className="absolute inset-x-4 top-2 h-6 bg-gradient-to-b from-primary/20 to-transparent rounded-b-full" />
            <p className="text-center text-sm text-muted-foreground pt-4">SCREEN</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-6 text-center text-sm text-muted-foreground">{row}</span>
              <div className="flex gap-1.5">
                {seats
                  .filter(s => s.row === row)
                  .sort((a, b) => a.number - b.number)
                  .map((seat) => (
                    <motion.button
                      key={seat.id}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSeatClick(seat)}
                      disabled={seat.status === 'booked'}
                      className={`w-8 h-8 rounded-t-lg text-xs font-medium border transition-colors ${getSeatColor(seat)}`}
                      data-testid={`button-seat-${seat.id}`}
                    >
                      {seat.number}
                    </motion.button>
                  ))}
              </div>
              <span className="w-6 text-center text-sm text-muted-foreground">{row}</span>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-md bg-card border border-border" />
              <span className="text-muted-foreground">Regular $14</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-md bg-purple-500/20 border border-purple-500/50" />
              <span className="text-muted-foreground">Premium $18</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-md bg-amber-500/20 border border-amber-500/50" />
              <span className="text-muted-foreground">VIP $25</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-md bg-primary" />
              <span className="text-muted-foreground">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t-md bg-muted opacity-50" />
              <span className="text-muted-foreground">Booked</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {selectedSeats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Selected Seats</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedSeats.map(seat => (
                        <Badge key={seat.id} variant="secondary">
                          {seat.id}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold" data-testid="text-total-price">${totalPrice}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
