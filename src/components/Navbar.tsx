
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300',
        scrolled ? 'bg-white/90 shadow backdrop-blur-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">CraftsyVisions</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                'nav-link text-base font-medium', 
                location.pathname === link.path ? 'text-primary after:scale-x-100' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  'text-xl font-medium nav-link',
                  location.pathname === link.path ? 'text-primary after:scale-x-100' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
