import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md soft-shadow py-2' : 'bg-white py-2.5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Rent a Ride Logo" 
              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-[#ff5a3c] ${
                  location.pathname === link.path ? 'text-[#ff5a3c]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:09319524124" className="flex items-center gap-2 text-gray-700 hover:text-[#ff5a3c] font-medium transition-colors">
              <FiPhoneCall className="text-[#ff5a3c]" />
              093195 24124
            </a>
            <Link 
              to="/booking"
              className="bg-[#ff5a3c] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#e04526] transition-colors premium-shadow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#ff5a3c] focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block pt-2 font-medium ${
                    location.pathname === link.path ? 'text-[#ff5a3c]' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:09319524124" className="flex items-center gap-2 text-gray-700 font-medium">
                  <FiPhoneCall className="text-[#ff5a3c]" />
                  093195 24124
                </a>
                <Link 
                  to="/booking"
                  className="bg-[#ff5a3c] text-white px-6 py-3 rounded-full font-medium text-center hover:bg-[#e04526] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
