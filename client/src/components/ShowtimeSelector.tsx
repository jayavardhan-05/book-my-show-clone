import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { MapPin, Clock, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Showtime } from '@/lib/movieData';

interface ShowtimeSelectorProps {
  showtimes: Showtime[];
  onSelectShowtime: (showtime: Showtime) => void;
}

export default function ShowtimeSelector({ showtimes, onSelectShowtime }: ShowtimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null);

  const dates = Array.from(new Set(showtimes.map(s => s.date))).sort();
  const theaters = Array.from(new Set(showtimes.map(s => s.theater)));

  const filteredShowtimes = selectedDate 
    ? showtimes.filter(s => s.date === selectedDate)
    : showtimes;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const handleSelect = (showtime: Showtime) => {
    setSelectedShowtime(showtime.id);
    onSelectShowtime(showtime);
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-xl">Select Showtime</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Date</h4>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2">
              {dates.map((date) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDate(date === selectedDate ? null : date)}
                  data-testid={`button-date-${date}`}
                >
                  {formatDate(date)}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="space-y-4">
          {theaters.map((theater) => {
            const theaterShowtimes = filteredShowtimes.filter(s => s.theater === theater);
            if (theaterShowtimes.length === 0) return null;

            return (
              <motion.div
                key={theater}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm">{theater}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {theaterShowtimes.map((showtime) => (
                    <Button
                      key={showtime.id}
                      variant={selectedShowtime === showtime.id ? 'default' : 'outline'}
                      className="flex flex-col h-auto py-3 gap-1"
                      onClick={() => handleSelect(showtime)}
                      disabled={showtime.availableSeats === 0}
                      data-testid={`button-showtime-${showtime.id}`}
                    >
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="font-semibold">{showtime.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="secondary" className="text-xs px-1.5">
                          <Monitor className="w-3 h-3 mr-1" />
                          {showtime.format}
                        </Badge>
                        <span className="text-muted-foreground">${showtime.price}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
