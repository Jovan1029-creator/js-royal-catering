import Layout from '../components/layout/Layout';
import { companyInfo } from '../data/company-data';
import PackageCard from '../components/ui/PackageCard';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const Packages = () => {
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
              Our Packages
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-light mb-8 drop-shadow-lg">
              Choose the Perfect Catering Solution for Your Event
            </p>
            <div className="w-24 h-1 bg-royal-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we have the perfect package to make your event unforgettable. All packages include professional service and premium ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Package Comparison Header */}
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Compare Our <span className="bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">Premium Packages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each package is carefully crafted to suit different event sizes and budgets. 
                All include complete setup, professional staff, and the royal treatment your guests deserve.
              </p>
            </motion.div>

            {/* Package Cards Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16"
            >
              {companyInfo.menuPackages.map((pkg, index) => (
                <PackageCard 
                  key={pkg.id} 
                  package={pkg} 
                  isPopular={pkg.name === "Gold Package"}
                />
              ))}
            </motion.div>

            {/* Package Comparison Table */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 mb-16"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Package Comparison
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Feature</th>
                      {companyInfo.menuPackages.map((pkg) => (
                        <th key={pkg.id} className="text-center py-4 px-6 font-bold text-lg">
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-700">Price</td>
                      {companyInfo.menuPackages.map((pkg) => (
                        <td key={pkg.id} className="text-center py-4 px-6 font-bold text-royal-blue text-lg">
                          {pkg.price}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-700">Dish Variety</td>
                      <td className="text-center py-4 px-6 text-green-600">Good</td>
                      <td className="text-center py-4 px-6 text-green-600">Better</td>
                      <td className="text-center py-4 px-6 text-green-600">Premium</td>
                      <td className="text-center py-4 px-6 text-green-600">Royal</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-700">Service Level</td>
                      <td className="text-center py-4 px-6">⭐️⭐️⭐️⭐️⭐️</td>
                      <td className="text-center py-4 px-6">⭐️⭐️⭐️⭐️⭐️</td>
                      <td className="text-center py-4 px-6">⭐️⭐️⭐️⭐️⭐️</td>
                      <td className="text-center py-4 px-6">⭐️⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-700">Setup Included</td>
                      <td className="text-center py-4 px-6 text-green-500">✓</td>
                      <td className="text-center py-4 px-6 text-green-500">✓</td>
                      <td className="text-center py-4 px-6 text-green-500">✓</td>
                      <td className="text-center py-4 px-6 text-green-500">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Service Areas & Additional Info */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              <div className="bg-gradient-to-br from-royal-blue to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span>🗺️</span> Service Areas
                </h3>
                <p className="text-blue-100 mb-4">
                  We proudly serve these regions with the same royal quality:
                </p>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.location.serviceAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-royal-gold to-yellow-500 rounded-3xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span>⚡</span> Why Choose Us?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✓ Fresh, premium ingredients</li>
                  <li className="flex items-center gap-2">✓ Experienced catering team</li>
                  <li className="flex items-center gap-2">✓ Professional event setup</li>
                  <li className="flex items-center gap-2">✓ Flexible customization</li>
                  <li className="flex items-center gap-2">✓ Competitive pricing</li>
                </ul>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Book Your Event?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us now to discuss your event requirements and get a personalized quote. 
                  We'll help you choose the perfect package for your special occasion.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <WhatsAppButton 
                    message="Hello JS Royal! I'm interested in your catering packages. Please send me more information and help me choose the right package for my event."
                    className="text-lg px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  />
                  
                  <a
                    href="tel:0765365358"
                    className="bg-gradient-to-r from-royal-blue to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500"
                  >
                    📞 Call Now
                  </a>
                </div>
                
                <p className="text-gray-500 mt-6">
                  Prefer to talk? We're available {companyInfo.phones.join(' / ')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;