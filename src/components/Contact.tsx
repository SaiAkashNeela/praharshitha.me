'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const message = form.message.value;
    
    // Open email client with pre-filled content
    window.location.href = `mailto:svpraharshitha111@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 font-mono text-sm text-gray-400">
            <span className="text-blue-400">//</span> Get in Touch
          </div>
          <h2 className="text-4xl font-bold mb-12 text-center font-mono">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 font-mono text-blue-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Email</p>
                    <a href="mailto:svpraharshitha111@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors font-mono">
                      svpraharshitha111@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Location</p>
                    <p className="text-gray-300 font-mono">St Albans, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Phone</p>
                    <a href="tel:+447123456789" className="text-gray-300 hover:text-blue-400 transition-colors font-mono">
                      +44 7123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 font-mono text-blue-400">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-mono text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 font-mono focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 font-mono text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 font-mono focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-mono"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 