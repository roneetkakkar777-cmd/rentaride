import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiClock, FiStar, FiMapPin, FiTruck, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '500+', icon: <FiUsers /> },
    { label: 'Cars Available', value: '50+', icon: <FiTrendingUp /> },
    { label: 'Safety Rating', value: '4.8', icon: <FiStar /> },
    { label: 'Support', value: '24/7', icon: <FiClock /> },
  ];

  const missionVision = [
    {
      title: 'Our Mission',
      content: 'To provide reliable, safe, and affordable car rental solutions that empower our customers to travel with complete peace of mind and convenience.',
      color: 'bg-orange-50',
      icon: <FiCheckCircle className="text-[#ff5a3c]" />,
    },
    {
      title: 'Our Vision',
      content: 'To become the leading and most trusted car rental service in the region, known for our exceptional fleet and customer-first approach.',
      color: 'bg-gray-50',
      icon: <FiTrendingUp className="text-[#ff5a3c]" />,
    },
  ];

  const features = [
    {
      title: 'Affordable Pricing',
      description: 'Competitive rates and transparent billing with zero hidden charges. Best value for your money.',
      icon: <FiTrendingUp />,
    },
    {
      title: 'Verified & Maintained',
      description: 'Every car in our fleet undergoes rigorous safety checks and regular maintenance for your safety.',
      icon: <FiShield />,
    },
    {
      title: 'Easy Booking',
      description: 'Seamless online booking process. Get your car confirmed in just a few clicks.',
      icon: <FiClock />,
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you throughout your journey.',
      icon: <FiStar />,
    },
    {
      title: 'Flexible Plans',
      description: 'Daily, weekly, and monthly rental options tailored to your specific travel needs.',
      icon: <FiTruck />,
    },
    {
      title: 'Prime Location',
      description: 'Conveniently located in Ghaziabad, ensuring easy pickup and drop-off access.',
      icon: <FiMapPin />,
    },
  ];

  const testimonials = [
    {
      name: 'Aditya Sharma',
      text: 'Great experience with Rent a Ride. The Thar was in brand new condition and the booking process was super smooth.',
      rating: 5,
    },
    {
      name: 'Priya Verma',
      text: 'Most affordable car rental in Ghaziabad. Very professional staff and well-maintained cars. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Rahul Gupta',
      text: 'Took an Innova for a family trip. The car was clean and the driver was very polite. Will definitely book again.',
      rating: 4,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 overflow-x-hidden"
    >
      {/* Hero Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16 pt-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-[#ff5a3c]">Rent a Ride</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Established in 2010, Rent a Ride has grown from a local Ghaziabad startup into a premium car rental powerhouse. 
            We are dedicated to providing the highest quality vehicles with a focus on trust, safety, and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
            <img 
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV700/10794/1762509966753/front-left-side-47.jpg" 
              alt="Premium SUV" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Your Journey, Our Commitment</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Rent a Ride, we understand that a car is more than just a vehicle; it's a key part of your travel story. 
              Whether you're planning a weekend getaway, a business trip, or a family outing, we provide the perfect 
              set of wheels to match your style and budget.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Based in the heart of Ghaziabad, we pride ourselves on a fleet that is meticulously maintained and 
              a service that is remarkably seamless. Our goal is simple: to make every ride a memory to cherish.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link to="/cars" className="bg-[#ff5a3c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e04526] transition-colors premium-shadow">
                  Explore Our Fleet
               </Link>
               <Link to="/contact" className="border-2 border-gray-200 text-gray-800 px-8 py-3 rounded-xl font-bold hover:border-gray-800 transition-colors">
                  Contact Us
               </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20 border-y border-gray-100 mb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${item.color} p-10 rounded-3xl border border-gray-100 flex items-start gap-6`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#1f2937] text-white rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a3c] opacity-10 rounded-full blur-[100px]" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-black text-[#ff5a3c] mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium tracking-wider uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-[#ff5a3c]">Us</span></h2>
          <p className="text-gray-600">Setting the standard in car rental excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-white hover:soft-shadow transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#ff5a3c] text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Fleet - Short Intro */}
      <div className="bg-orange-50/30 py-24 mb-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">A Car for Every <span className="text-[#ff5a3c]">Occasion</span></h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our fleet is diverse, ranging from efficient city hatchbacks to luxury SUVs and sophisticated sedans. 
              Every vehicle is kept in pristine condition, ensuring you have the best possible experience on the road.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Hatchbacks', 'Sedans', 'SUVs', 'Premium'].map((cat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl text-center shadow-sm border border-orange-50">
                  <span className="font-bold text-gray-900">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="text-[#ff5a3c]">Customers Say</span></h2>
          <p className="text-gray-600 italic">"Travel is better when you rent from people who care."</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] soft-shadow border border-gray-50 relative"
            >
              <div className="text-orange-400 flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={i < t.rating ? 'fill-current' : ''} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-[#ff5a3c]">
                  {t.name.charAt(0)}
                </div>
                <div className="font-bold text-gray-900">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#ff5a3c] to-[#ff7b5f] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-200"
        >
          <div className="absolute inset-0 bg-white opacity-5 pattern-grid" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready for Your Next Trip?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Book your ride today and experience hassle-free travel with Ghaziabad's most trusted car rental.
          </p>
          <Link to="/cars" className="bg-white text-[#ff5a3c] px-12 py-4 rounded-full font-black text-lg hover:bg-gray-50 transition-all inline-block relative z-10">
            Book Now
          </Link>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default About;
