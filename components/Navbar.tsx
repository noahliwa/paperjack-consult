
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Strategy', path: '/strategy' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Partners', path: '/partners' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/blog' && location.pathname.startsWith('/blog')) return true;
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-azure hover:text-gold transition-colors'
                } px-1 pt-1 text-sm font-medium tracking-wide h-full flex items-center`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/paperjack-inc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-azure text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-opacity-90 transition-all shadow-sm"
            >
              Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-azure inline-flex items-center justify-center p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-azure hover:bg-gray-50 hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://calendly.com/paperjack-inc/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-4 text-base font-bold text-white bg-azure rounded-sm mt-4 text-center"
          >
            Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
