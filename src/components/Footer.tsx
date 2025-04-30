import React from 'react';
import { Crown, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-6 h-6 text-gold-400" />
              <h2 className="text-xl font-serif font-bold">
                <span className="text-white">Luxi</span>
                <span className="text-gold-400">fy</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Elevate your luxury marketing strategies with AI-powered insights and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gold-400 font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features/roadmap" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Marketing Roadmap
                </Link>
              </li>
              <li>
                <Link to="/features/tips" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Luxury Tips
                </Link>
              </li>
              <li>
                <Link to="/features/analysis" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Visual Analysis
                </Link>
              </li>
              <li>
                <Link to="/features/export" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Export Plans
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold-400 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/resources/newsletter" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold-400 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Luxify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;