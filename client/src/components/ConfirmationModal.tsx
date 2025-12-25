import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Share2, Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Movie, Showtime, Seat } from '@/lib/movieData';

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  movie: Movie;
  showtime: Showtime;
  selectedSeats: Seat[];
  bookingId: string;
}

export default function ConfirmationModal({
  open,
  onClose,
  movie,
  showtime,
  selectedSeats,
  bookingId
}: ConfirmationModalProps) {
  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0) * 1.1;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Booking Confirmed</DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>
          
          <h2 className="text-2xl font-semibold mb-2">Booking Confirmed!</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Your tickets have been booked successfully
          </p>
          
          <div className="bg-card rounded-lg p-4 text-left space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Booking ID</span>
              <Badge variant="secondary" className="font-mono" data-testid="text-booking-id">
                {bookingId}
              </Badge>
            </div>
            
            <div className="flex gap-3">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-16 h-20 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0 text-sm">
                <h3 className="font-semibold mb-2">{movie.title}</h3>
                <div className="space-y-1 text-muted-foreground text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(showtime.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{showtime.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{showtime.theater}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div>
                <span className="text-sm text-muted-foreground">Seats: </span>
                <span className="font-medium">{selectedSeats.map(s => s.id).join(', ')}</span>
              </div>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" data-testid="button-download-ticket">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 gap-2" data-testid="button-share">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
          
          <Button className="w-full mt-3" onClick={onClose} data-testid="button-done">
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
