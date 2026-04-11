import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from './CarCard';

const FeaturedCars = () => {
  // Show first 6 cars as featured
  const featuredCars = cars.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-[#ff5a3c]">Cars</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of premium and well-maintained cars. Perfect for every journey and occasion.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-[#ff5a3c] font-semibold hover:text-[#e04526] transition-colors"
          >
            View All Cars →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
