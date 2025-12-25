// todo: remove mock functionality - replace with real API data
import sciFiPoster from '@assets/generated_images/sci-fi_astronaut_movie_poster.png';
import thrillerPoster from '@assets/generated_images/noir_thriller_movie_poster.png';
import romcomPoster from '@assets/generated_images/romantic_comedy_movie_poster.png';
import fantasyPoster from '@assets/generated_images/fantasy_dragon_movie_poster.png';
import horrorPoster from '@assets/generated_images/horror_mansion_movie_poster.png';
import animatedPoster from '@assets/generated_images/animated_family_movie_poster.png';

export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  genre: string[];
  runtime: number;
  releaseDate: string;
  synopsis: string;
  director: string;
  cast: string[];
}

export interface Showtime {
  id: string;
  movieId: string;
  theater: string;
  date: string;
  time: string;
  format: string;
  price: number;
  availableSeats: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: 'regular' | 'premium' | 'vip';
  status: 'available' | 'selected' | 'booked';
  price: number;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Beyond the Stars',
    poster: sciFiPoster,
    backdrop: sciFiPoster,
    rating: 8.7,
    genre: ['Sci-Fi', 'Adventure'],
    runtime: 148,
    releaseDate: '2024-12-20',
    synopsis: 'An astronaut embarks on a perilous journey across the galaxy to find a new home for humanity. As she ventures deeper into uncharted space, she discovers ancient secrets that could change everything we know about the universe.',
    director: 'Sarah Chen',
    cast: ['Emma Stone', 'Idris Elba', 'Oscar Isaac']
  },
  {
    id: '2',
    title: 'Shadows in the Rain',
    poster: thrillerPoster,
    backdrop: thrillerPoster,
    rating: 8.2,
    genre: ['Thriller', 'Mystery'],
    runtime: 126,
    releaseDate: '2024-12-15',
    synopsis: 'A detective haunted by his past must unravel a series of cryptic murders in a rain-soaked city. Each clue leads deeper into a conspiracy that threatens to consume him.',
    director: 'David Fincher',
    cast: ['Jake Gyllenhaal', 'Viola Davis', 'Paul Dano']
  },
  {
    id: '3',
    title: 'Love in the City',
    poster: romcomPoster,
    backdrop: romcomPoster,
    rating: 7.4,
    genre: ['Romance', 'Comedy'],
    runtime: 112,
    releaseDate: '2024-12-18',
    synopsis: 'Two rival food critics accidentally swap apartments and must learn to coexist while discovering that love can blossom in the most unexpected places.',
    director: 'Nancy Meyers',
    cast: ['Zendaya', 'Tom Holland', 'Awkwafina']
  },
  {
    id: '4',
    title: 'Dragon\'s Reign',
    poster: fantasyPoster,
    backdrop: fantasyPoster,
    rating: 8.9,
    genre: ['Fantasy', 'Action'],
    runtime: 165,
    releaseDate: '2024-12-25',
    synopsis: 'In a realm where dragons once ruled, a young blacksmith discovers she can communicate with the last surviving dragon. Together, they must stop an ancient evil from awakening.',
    director: 'Denis Villeneuve',
    cast: ['Florence Pugh', 'Timothée Chalamet', 'Pedro Pascal']
  },
  {
    id: '5',
    title: 'The Haunting of Blackwood',
    poster: horrorPoster,
    backdrop: horrorPoster,
    rating: 7.8,
    genre: ['Horror', 'Supernatural'],
    runtime: 108,
    releaseDate: '2024-12-13',
    synopsis: 'A family inherits a Victorian mansion with a dark history. As strange events unfold, they must uncover the truth before the house claims them forever.',
    director: 'Ari Aster',
    cast: ['Lupita Nyongo', 'Daniel Kaluuya', 'Jenna Ortega']
  },
  {
    id: '6',
    title: 'Robot & Me',
    poster: animatedPoster,
    backdrop: animatedPoster,
    rating: 8.5,
    genre: ['Animation', 'Family'],
    runtime: 98,
    releaseDate: '2024-12-22',
    synopsis: 'A curious young girl befriends a malfunctioning robot and together they explore a vibrant futuristic city, learning about friendship, courage, and what it means to be alive.',
    director: 'Pete Docter',
    cast: ['Millie Bobby Brown', 'Chris Pratt', 'Tina Fey']
  }
];

export const showtimes: Showtime[] = [
  { id: 's1', movieId: '1', theater: 'CineMax IMAX', date: '2024-12-20', time: '14:30', format: 'IMAX', price: 18, availableSeats: 45 },
  { id: 's2', movieId: '1', theater: 'CineMax IMAX', date: '2024-12-20', time: '18:00', format: 'IMAX', price: 20, availableSeats: 32 },
  { id: 's3', movieId: '1', theater: 'CineMax IMAX', date: '2024-12-20', time: '21:30', format: 'IMAX', price: 20, availableSeats: 68 },
  { id: 's4', movieId: '1', theater: 'Starlight Cinema', date: '2024-12-20', time: '15:00', format: '3D', price: 15, availableSeats: 52 },
  { id: 's5', movieId: '1', theater: 'Starlight Cinema', date: '2024-12-20', time: '19:30', format: '3D', price: 16, availableSeats: 28 },
  { id: 's6', movieId: '2', theater: 'CineMax IMAX', date: '2024-12-20', time: '16:00', format: 'Standard', price: 14, availableSeats: 55 },
  { id: 's7', movieId: '2', theater: 'Downtown Cineplex', date: '2024-12-20', time: '20:00', format: 'Standard', price: 12, availableSeats: 40 },
  { id: 's8', movieId: '3', theater: 'Starlight Cinema', date: '2024-12-20', time: '17:30', format: 'Standard', price: 12, availableSeats: 65 },
  { id: 's9', movieId: '4', theater: 'CineMax IMAX', date: '2024-12-25', time: '13:00', format: 'IMAX 3D', price: 22, availableSeats: 38 },
  { id: 's10', movieId: '5', theater: 'Downtown Cineplex', date: '2024-12-20', time: '22:00', format: 'Standard', price: 12, availableSeats: 72 },
];

export function generateSeats(): Seat[] {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const seats: Seat[] = [];
  
  rows.forEach((row, rowIndex) => {
    for (let num = 1; num <= seatsPerRow; num++) {
      const isVip = rowIndex >= 3 && rowIndex <= 4 && num >= 4 && num <= 9;
      const isPremium = rowIndex >= 5 && num >= 3 && num <= 10;
      const isBooked = Math.random() < 0.25;
      
      seats.push({
        id: `${row}${num}`,
        row,
        number: num,
        type: isVip ? 'vip' : isPremium ? 'premium' : 'regular',
        status: isBooked ? 'booked' : 'available',
        price: isVip ? 25 : isPremium ? 18 : 14
      });
    }
  });
  
  return seats;
}
