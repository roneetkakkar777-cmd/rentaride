import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiStar, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const trustIndicators = [
    '100% Verified Cars',
    'No Hidden Charges',
    '24/7 Dedicated Support',
  ];

  return (
    <div className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Premium Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent -z-10" />
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-100/50 rounded-full blur-[100px] -z-10" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(#ff5a3c 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-50 text-[#ff5a3c] px-4 py-2 rounded-full text-sm font-bold mb-8 border border-orange-100"
            >
              <FiStar className="fill-current" />
              <span>Ghaziabad's #1 Car Rental</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight text-gray-900">
              Premium Cars.<br />
              Seamless Rides.<br />
              <span className="text-[#ff5a3c]">Zero Hassle.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience the ultimate comfort and convenience. Whether it's a weekend getaway or a business trip, we've got the perfect ride for you at unbeatable prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-10">
              <Link
                to="/cars"
                className="bg-[#ff5a3c] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#e04526] transition-all hover:scale-105 hover:-rotate-1 active:scale-95 premium-shadow inline-flex items-center justify-center gap-2 group"
              >
                Browse Cars
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/cars"
                className="bg-white text-gray-900 border-2 border-gray-200 px-10 py-5 rounded-2xl font-black text-xl hover:border-gray-900 hover:bg-gray-50 transition-all active:scale-95 inline-flex items-center justify-center"
              >
                Explore Fleet
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              {trustIndicators.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex items-center gap-2 text-gray-600 font-bold text-sm"
                >
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <FiCheck size={14} strokeWidth={4} />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 hidden md:block"
          >
            <div className="relative group p-4">
              {/* Decorative Background for Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#ff5a3c]/5 rounded-full blur-[60px] group-hover:bg-[#ff5a3c]/10 transition-colors" />
              
              {/* Floating Image Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop" 
                  alt="Luxury White SUV" 
                  className="w-full h-auto object-cover rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] hover:shadow-[0_48px_80px_-24px_rgba(255,90,60,0.25)] transition-all duration-700"
                />
                
                {/* Floating Badge 1: Top Rated */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-8 -right-8 bg-white p-5 rounded-2xl soft-shadow border border-gray-100 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-[#ff5a3c] font-black text-xl">
                    4.8
                  </div>
                  <div>
                    <div className="flex text-orange-400 gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current w-3 h-3" />)}
                    </div>
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wider">Top Rated Rental</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Verified */}
                <motion.div 
                  animate={{ x: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl soft-shadow border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold text-2xl shadow-inner">
                    ✓
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-lg leading-tight uppercase tracking-tight">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Happy Clients</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
