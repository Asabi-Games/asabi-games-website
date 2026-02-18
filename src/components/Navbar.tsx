import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/games', label: 'GAMES' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#070810] border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-wider">
            ASABI GAMES
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#e84545]'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#070810] border-t border-[#1e293b]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#e84545]'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
