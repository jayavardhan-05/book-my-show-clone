import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Film, Search, Ticket, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  ticketCount?: number;
  onSearch?: (query: string) => void;
}

export default function Header({ ticketCount = 0, onSearch }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          <a href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl tracking-wide">CINEBOOK</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#now-showing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-now-showing">
              Now Showing
            </a>
            <a href="#coming-soon" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-coming-soon">
              Coming Soon
            </a>
            <a href="#theaters" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-theaters">
              Theaters
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <Input
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-48"
                    data-testid="input-search"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setSearchOpen(!searchOpen)}
              data-testid="button-search-toggle"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button size="icon" variant="ghost" className="relative" data-testid="button-cart">
              <Ticket className="w-5 h-5" />
              {ticketCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {ticketCount}
                </Badge>
              )}
            </Button>

            <Button size="icon" variant="ghost" className="hidden md:flex" data-testid="button-profile">
              <User className="w-5 h-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              <a href="#now-showing" className="py-2 text-sm font-medium" data-testid="mobile-link-now-showing">
                Now Showing
              </a>
              <a href="#coming-soon" className="py-2 text-sm font-medium" data-testid="mobile-link-coming-soon">
                Coming Soon
              </a>
              <a href="#theaters" className="py-2 text-sm font-medium" data-testid="mobile-link-theaters">
                Theaters
              </a>
              <a href="#profile" className="py-2 text-sm font-medium" data-testid="mobile-link-profile">
                My Profile
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
