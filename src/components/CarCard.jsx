import { motion } from 'framer-motion';
import { FiUsers, FiBriefcase, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CarCard = ({ car, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden soft-shadow transition-all duration-300 group h-full flex flex-col"
    >
      {/* Car Image with Badge */}
      <div className="relative h-56 overflow-hidden bg-gray-200 shrink-0">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#ff5a3c]">
          {car.category}
        </div>
      </div>

      {/* Car Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 h-14 line-clamp-2">{car.name}</h3>
        <div className="text-2xl font-bold text-[#ff5a3c] mb-6">
          ₹{car.price} <span className="text-sm text-gray-500 font-normal">/ day</span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="flex flex-col items-center text-gray-500 text-center">
            <FiUsers className="mb-1 text-lg shrink-0" />
            <span className="text-xs">{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 text-center">
            <FiSettings className="mb-1 text-lg shrink-0" />
            <span className="text-xs truncate w-full">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 text-center">
            <FiBriefcase className="mb-1 text-lg shrink-0" />
            <span className="text-xs">{car.fuel}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to="/booking"
            className="block w-full text-center bg-gray-50 hover:bg-[#ff5a3c] text-gray-900 hover:text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
