import Layout from '../components/layout/Layout';
import { companyInfo } from '../data/company-data';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AEvent Type: ${formData.eventType}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/255765365358?text=${message}`, '_blank');
  };

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-blue-900 via-royal-blue to-blue-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-royal-gold rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-30 animate-bounce"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-royal-gold bg-clip-text text-transparent drop-shadow-2xl">
              Contact Us
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-light mb-8 drop-shadow-lg">
              Let's Create Your Perfect Event Together
            </p>
            <div className="w-24 h-1 bg-royal-gold mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >

            {/* Contact Information & Location */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-white border border-green-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl text-white">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">Call Us</h3>
                      <div className="space-y-1">
                        {companyInfo.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-gray-600 hover:text-green-600 transition-colors duration-300 text-lg"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl text-white">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">Email Us</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-white border border-yellow-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-royal-gold to-yellow-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl text-white">🗺️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">Service Areas</h3>
                      <p className="text-gray-600 text-lg">
                        {companyInfo.location.serviceAreas.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Quick WhatsApp CTA */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-center mt-8">
                    <h3 className="text-xl font-bold text-white mb-3">Quick Response Guaranteed!</h3>
                    <a
                      href="https://wa.me/255765365358?text=Hello%20JS%20Royal,%20I'd%20like%20to%20get%20a%20quote%20for%20my%20event."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Map Section */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                  Where We Are
                </h2>

                {/* Real Google Maps - JS Catering Services Location */}
                <div className="rounded-2xl overflow-hidden h-64 mb-6 border-2 border-gray-300 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.1298383238985!2d37.636707276105895!3d-6.768162171678323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a61801fd6a5e5%3A0x46bca500499c599d!2sJS%20Catering%20Services!5e1!3m2!1sen!2stz!4v1760692077806!5m2!1sen!2stz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                    title="JS Royal Catering Services Location"
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">Visit Our Kitchen</p>
                      <p className="text-gray-600">JS Catering Services, Morogoro, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                    <span className="text-2xl">🚚</span>
                    <div>
                      <p className="font-semibold text-gray-800">Delivery Coverage</p>
                      <p className="text-gray-600">We serve {companyInfo.location.serviceAreas.join(', ')} and surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 sticky top-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="private">Private Gathering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Tell us about your event, number of guests, date, and any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-royal-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    📧 Send Message
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    Or contact us directly via WhatsApp for instant response
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Business Hours & Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 9:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Response</h3>
              <p className="text-gray-600">We typically respond within 1-2 hours during business hours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Service Promise</h3>
              <p className="text-gray-600">Quality guaranteed. Satisfaction assured. Royal experience delivered.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;