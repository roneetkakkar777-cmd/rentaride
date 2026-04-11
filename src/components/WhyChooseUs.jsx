import { motion } from 'framer-motion';
import { FiDollarSign, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

const features = [
  {
    icon: <FiDollarSign size={24} />,
    title: 'Affordable Pricing',
    description: 'We offer the most competitive rates in the market with absolutely no hidden charges.'
  },
  {
    icon: <FaCar size={24} />,
    title: 'Wide Range of Cars',
    description: 'From compact hatchbacks to luxury SUVs, find the perfect vehicle for your needs.'
  },
  {
    icon: <FiClock size={24} />,
    title: '24/7 Support',
    description: 'Our dedicated customer support team is available round the clock to assist you.'
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: 'Easy Booking',
    description: 'Seamless online reservation system. Book your car in just a few simple steps.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-[#ff5a3c]">Choose Us?</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We are committed to providing you with the best car rental experience. 
              Our focus on quality, customer satisfaction, and affordability makes us 
              the preferred choice for thousands of happy riders.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 text-[#ff5a3c] rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#ff5a3c] rounded-3xl transform rotate-6 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2670&auto=format&fit=crop" 
              alt="Happy customer" 
              className="relative rounded-3xl shadow-xl object-cover h-[600px] w-full"
            />
            {/* Satisfaction Badge */}
            <div className="absolute -left-8 top-1/4 bg-white p-6 rounded-2xl soft-shadow text-center">
              <div className="text-[#ff5a3c] font-bold text-3xl mb-1">4.9/5</div>
              <div className="flex text-yellow-400 justify-center mb-2">
                {"★".repeat(5)}
              </div>
              <p className="text-sm text-gray-500 font-medium">Customer Review</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
