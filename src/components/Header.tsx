import React from 'react';
import { Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-navy-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="https://ygzhnozdmr.github.io/luxifyio/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <Crown className="w-8 h-8 text-gold-400" />
          <h1 className="text-2xl font-serif font-bold">
            <span className="text-white">Luxi</span>
            <span className="text-gold-400">fy</span>
          </h1>
        </a>
        
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/about" className="text-sm hover:text-gold-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-sm hover:text-gold-300 transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard" 
                className="text-sm bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 py-2 rounded-md transition-colors"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;