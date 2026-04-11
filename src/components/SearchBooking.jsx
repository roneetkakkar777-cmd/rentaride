import { FiMapPin, FiCalendar, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SearchBooking = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-6 md:p-8 soft-shadow mx-4 lg:mx-0 -mt-16 relative z-20 border border-gray-100"
    >
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        
        {/* Pickup Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
            <input 
              type="text" 
              placeholder="City, Airport, or Station" 
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Drop Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Same as pickup" 
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
          <div className="relative">
            <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
            <input 
              type="date" 
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all text-gray-600"
            />
          </div>
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Drop Date</label>
          <div className="relative">
            <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
            <input 
              type="date" 
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all text-gray-600"
            />
          </div>
        </div>

        {/* CTA */}
        <div>
          <button 
            type="button"
            className="w-full bg-[#ff5a3c] text-white py-3 px-6 rounded-xl font-semibold premium-shadow hover:bg-[#e04526] transition-colors focus:outline-none focus:ring-4 focus:ring-red-100"
          >
            Search Cars
          </button>
        </div>

      </form>
    </motion.div>
  );
};

export default SearchBooking;
