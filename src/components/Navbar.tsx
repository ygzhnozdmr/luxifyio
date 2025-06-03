import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gold-300">
            Luxify
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/pricing" className="text-white hover:text-gold-300">
              Plans
            </Link>
            <Link to="/offer" className="text-white hover:text-gold-300">
              Offer
            </Link>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 