import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiUserCheck, FiClock } from 'react-icons/fi';

const servicesList = [
  {
    icon: <FiClock size={32} />,
    title: 'Self Drive Cars',
    description: 'Experience the freedom of driving on your own terms. Choose from our wide range of well-maintained cars for city tours, outstation trips, or daily commutes.',
    color: 'bg-orange-50 text-[#ff5a3c]'
  },
  {
    icon: <FiUserCheck size={32} />,
    title: 'Chauffeur Driven',
    description: 'Sit back, relax, and enjoy the ride. Our professional and verified chauffeurs ensure a smooth, safe, and comfortable journey to your destination.',
    color: 'bg-blue-50 text-blue-500'
  },
  {
    icon: <FiMapPin size={32} />,
    title: 'Airport Pickup & Drop',
    description: 'Never miss a flight. We provide timely and reliable airport transfer services to ensure you reach the airport or your hotel without any stress.',
    color: 'bg-emerald-50 text-emerald-500'
  },
  {
    icon: <FiBriefcase size={32} />,
    title: 'Long Term Rentals',
    description: 'Need a car for a month or more? We offer flexible long-term car rental packages with maintenance included at highly discounted rates.',
    color: 'bg-purple-50 text-purple-500'
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 bg-gray-50 min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium <span className="text-[#ff5a3c]">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of car rental services tailored to meet all your personal and corporate mobility needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-10 rounded-3xl soft-shadow transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <a 
                href="/booking"
                className="inline-flex items-center gap-2 text-[#ff5a3c] font-semibold hover:text-[#e04526] transition-colors group"
              >
                Book this service 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Services;
