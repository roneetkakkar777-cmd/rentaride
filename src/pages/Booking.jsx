import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiUser, FiPhone, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

const Booking = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add Web3Forms access key (placeholder)
    data.access_key = "YOUR_ACCESS_KEY_HERE";
    data.subject = "New Car Booking - Rent a Ride";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 bg-gray-50 min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-[#ff5a3c]">Ride</span>
          </h1>
          <p className="text-gray-600">
            Fill out the form below to reserve your vehicle. Fast, secure, and instant confirmation.
          </p>
        </div>

        {/* Booking Form Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 soft-shadow border border-gray-100 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      required
                      name="full_name"
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="+91 9319524124" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Details */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">Journey Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
                    <input 
                      required
                      name="pickup_location"
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Drop Location</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
                    <input 
                      required
                      name="drop_location"
                      type="text" 
                      placeholder="Enter drop address" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="pickup_date" type="date" className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                    <div className="relative">
                      <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="pickup_time" type="time" className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] transition-all text-sm" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Drop Date</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="drop_date" type="date" className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                    <div className="relative">
                      <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="drop_time" type="time" className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] transition-all text-sm" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Vehicle Selection */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">Vehicle Selection</h3>
              <div className="relative">
                <FaCar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a3c]" />
                <select 
                  required
                  name="selected_car"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all appearance-none cursor-pointer text-gray-700"
                >
                  <option value="" disabled selected>Select a car...</option>
                  <option value="Maruti Suzuki Swift">Maruti Suzuki Swift (Hatchback)</option>
                  <option value="Maruti Baleno">Maruti Baleno (Premium Hatchback)</option>
                  <option value="Hyundai Creta">Hyundai Creta (SUV)</option>
                  <option value="Toyota Innova Crysta">Toyota Innova Crysta (MUV)</option>
                  <option value="Toyota Fortuner">Toyota Fortuner (Luxury SUV)</option>
                  <option value="Mahindra Thar">Mahindra Thar (Off-roader)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-100">
              <button 
                disabled={status === 'sending'}
                type="submit"
                className={`w-full bg-[#ff5a3c] text-white py-4 rounded-xl font-bold premium-shadow hover:bg-[#e04526] transition-all flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'transform hover:-translate-y-1'}`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Confirming...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </form>

          {/* Submission Status Overlay */}
          <AnimatePresence>
            {(status === 'success' || status === 'error') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center"
              >
                {status === 'success' ? (
                  <>
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-4xl">
                      <FiCheckCircle />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-600 mb-8">Your reservation request has been sent. Our team will contact you shortly to finalize the details.</p>
                    <button 
                      onClick={() => setStatus(null)}
                      className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                    >
                      New Booking
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 text-4xl">
                      <FiXCircle />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Booking Failed</h3>
                    <p className="text-gray-600 mb-8">Something went wrong while processing your booking. Please try again or call us directly.</p>
                    <button 
                      onClick={() => setStatus(null)}
                      className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Booking;
