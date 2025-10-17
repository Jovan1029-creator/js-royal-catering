import Layout from '../components/layout/Layout';
import { companyInfo } from '../data/company-data';
import { motion } from 'framer-motion';

const About = () => {
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

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-blue-900 via-royal-blue to-blue-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-royal-gold rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg opacity-10 animate-ping"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-royal-gold bg-clip-text text-transparent drop-shadow-2xl">
              Our Story
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-light mb-8 drop-shadow-lg">
              Crafting Unforgettable Culinary Experiences
            </p>
            <div className="w-24 h-1 bg-royal-gold mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            
            {/* Story Section */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">👑</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Heritage</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  <span className="text-2xl text-royal-blue font-bold">JS Royal Inn Catering Services</span> has been the epitome of culinary excellence across Tanzania for years. Born from a passion for exceptional food and royal hospitality, we've built our reputation on delivering unforgettable dining experiences.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From intimate family gatherings to grand corporate events, we bring the same dedication to quality, freshness, and presentation that has made us the preferred choice for discerning clients.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-royal-blue to-blue-700 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To deliver exceptional catering experiences through innovative menus, premium ingredients, and impeccable service that exceeds expectations.
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-royal-gold to-yellow-500 text-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-800 leading-relaxed">
                    To be Tanzania's most trusted catering service, setting new standards in culinary excellence and event hospitality.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                  Why Choose JS Royal?
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: '🍽️', title: 'Premium Ingredients', desc: 'Only the freshest, highest quality ingredients' },
                    { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Experienced culinary team with royal standards' },
                    { icon: '⚡', title: 'Professional Service', desc: 'Impeccable setup and attentive staff' },
                    { icon: '💰', title: 'Competitive Pricing', desc: 'Premium quality at accessible prices' },
                    { icon: '🎨', title: 'Custom Menus', desc: 'Tailored packages for every event type' },
                    { icon: '🚚', title: 'Wide Coverage', desc: `Serving ${companyInfo.location.serviceAreas.join(', ')}` }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white transition-all duration-300 group cursor-pointer border border-gray-200 hover:border-royal-blue/30"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              The principles that guide every dish we serve and every event we cater
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '❤️', title: 'Passion', desc: 'We cook with heart and serve with soul' },
                { icon: '⭐', title: 'Excellence', desc: 'Never settling for anything but the best' },
                { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, transparent service' }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-royal-blue to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Royal Catering?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us make your next event unforgettable with our premium catering services
              </p>
              <a
                href="https://wa.me/255765365358?text=Hello%20JS%20Royal,%20I'd%20like%20to%20discuss%20catering%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-royal-gold to-yellow-400 text-gray-900 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300"
              >
                📞 Book Your Event
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;