import { companyInfo } from '../../data/company-data';
import WhatsAppButton from '../ui/WhatsAppButton';
import SectionTitle from '../ui/SectionTitle';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-royal-blue to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-royal-gold rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-bounce"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>
          <span className="bg-gradient-to-r from-yellow-300 via-royal-gold to-yellow-400 bg-clip-text text-transparent">
            Ready to Book?
          </span>
        </SectionTitle>
        <p className="text-xl text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          Get in touch with us today and let's create an unforgettable catering experience for your event
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">Call Us</h3>
            </div>
            <div className="space-y-3 text-center">
              {companyInfo.phones.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone}`}
                  className="block text-lg text-blue-100 hover:text-yellow-300 transition-colors duration-300 font-medium py-2 hover:bg-white/10 rounded-xl"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Areas */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">We Serve</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-wrap gap-2 justify-center">
                {companyInfo.location.serviceAreas.map((area, index) => (
                  <span 
                    key={index}
                    className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/30"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-blue-100 mt-4 text-sm">
                Plus surrounding areas within each region
              </p>
            </div>
          </div>

          {/* Quick Action */}
          <div className="bg-gradient-to-br from-royal-gold to-yellow-500 rounded-3xl p-8 border border-yellow-400 shadow-2xl group hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Instant Booking</h3>
              <p className="text-gray-700 mb-4">
                Get a quick quote and book instantly via WhatsApp
              </p>
            </div>
            
            <div className="space-y-4">
              <WhatsAppButton 
                message="Hello JS Royal! I'd like to book your catering services. Please send me package details and pricing."
                className="w-full bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              />
              
              <Link 
                href="/contact"
                className="block w-full bg-white text-gray-900 py-4 rounded-2xl font-bold text-lg text-center hover:bg-gray-100 transition-all duration-300 border-2 border-white shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                📧 More Contact Options
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-yellow-300 text-xl font-semibold mb-4">{companyInfo.tagline}</p>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Experience the royal difference in catering. Fresh ingredients, professional service, and unforgettable flavors await your event.
          </p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full opacity-30 animate-bounce"></div>
      </div>
    </section>
  );
};

export default ContactSection;