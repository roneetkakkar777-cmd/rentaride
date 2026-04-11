import { motion } from 'framer-motion';
import SearchBooking from '../components/SearchBooking';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Cars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      {/* Header */}
      <div className="bg-[#1f2937] text-white pt-32 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#ff5a3c]">Fleet</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Discover our wide selection of {cars.length} premium vehicles. From compact hatchbacks to luxury SUVs, we have the perfect ride for every journey.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SearchBooking />
      </div>

      {/* Car Fleet Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Cars;
