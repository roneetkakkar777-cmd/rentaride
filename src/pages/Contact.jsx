import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add Web3Forms access key (placeholder)
    data.access_key = "YOUR_ACCESS_KEY_HERE";
    data.subject = "New Contact Message - Rent a Ride";

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
      className="pt-24 pb-20 bg-gray-50 min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#ff5a3c]">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question about our fleet or need help with a booking? Our team is always ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-3xl soft-shadow overflow-hidden relative"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  placeholder="09319524124" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  name="message"
                  rows="4"
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff5a3c] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                disabled={status === 'sending'}
                type="submit"
                className={`w-full bg-[#ff5a3c] text-white py-4 rounded-xl font-bold premium-shadow hover:bg-[#e04526] transition-all flex items-center justify-center gap-2 group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
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
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-8">Thank you for reaching out. We will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setStatus(null)}
                        className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                      >
                        Send Another
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 text-4xl">
                        <FiXCircle />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Submission Failed</h3>
                      <p className="text-gray-600 mb-8">Something went wrong while sending your message. Please try again later.</p>
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

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl soft-shadow">
                <div className="w-12 h-12 bg-orange-50 text-[#ff5a3c] rounded-xl flex items-center justify-center mb-4">
                  <FiPhone size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-gray-500 text-sm">093195 24124</p>
                <p className="text-gray-500 text-sm mt-1">Available 24/7</p>
              </div>

              <div className="bg-white p-6 rounded-2xl soft-shadow">
                <div className="w-12 h-12 bg-orange-50 text-[#ff5a3c] rounded-xl flex items-center justify-center mb-4">
                  <FiMail size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <p className="text-gray-500 text-sm">baleno7616@gmail.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll reply in 24hrs</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl soft-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 text-[#ff5a3c] rounded-xl flex items-center justify-center shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Office</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  5th floor, Multi level Car Parking, Sector 4, Vaishali, Ghaziabad, Uttar Pradesh 201010
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-3xl soft-shadow h-64 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996232532729!2d77.34005!3d28.6300481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaeb63b6b153%3A0xe54dbea9aaacef31!2sSector%204%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
