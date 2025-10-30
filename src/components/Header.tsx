import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';

const NavLinks = () => (
  <>
    <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
    <Link to="/menu" className="text-foreground hover:text-primary transition-colors">Menu</Link>
    <Link to="/reservations" className="text-foreground hover:text-primary transition-colors">Reservations</Link>
    <Link to="/chefs" className="text-foreground hover:text-primary transition-colors">Chefs</Link>
    <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">Reviews</Link>
    <Link to="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
    <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
  </>
);

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-primary">Jollof Joy</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}