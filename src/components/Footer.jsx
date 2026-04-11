import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Rent a Ride Logo" 
                className="w-16 h-16 object-contain" 
              />
              <span className="font-bold text-2xl tracking-tight text-white">
                Rent a <span className="text-[#ff5a3c]">Ride</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Find and rent the best cars at affordable prices. Your perfect ride, just one click away!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff5a3c] hover:text-white transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff5a3c] hover:text-white transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff5a3c] hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff5a3c] hover:text-white transition-colors">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Cars List</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Top Cities (Example Links) */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Top Cities</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">New Delhi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Mumbai</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Bangalore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff5a3c] transition-colors">Pune</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#ff5a3c] mt-1 shrink-0" />
                <span>5th floor, Multi level Car Parking, Sector 4, Vaishali, Ghaziabad, UP 201010</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#ff5a3c] shrink-0" />
                <span>093195 24124</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#ff5a3c] shrink-0" />
                <span>baleno7616@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rent a Ride Car Rental. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
