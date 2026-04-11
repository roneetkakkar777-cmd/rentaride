import Hero from '../components/Hero';
import SearchBooking from '../components/SearchBooking';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SearchBooking />
      </div>
      <FeaturedCars />
      <WhyChooseUs />
    </motion.div>
  );
};

export default Home;
