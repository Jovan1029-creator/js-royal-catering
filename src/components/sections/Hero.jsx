import WhatsAppButton from '../ui/WhatsAppButton';
import { companyInfo } from '../../data/company-data';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

const Hero = () => {
  const [showMainTypewriter, setShowMainTypewriter] = useState(true);

  return (
    <section 
      className="relative py-32 text-white bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${companyInfo.heroImage})` 
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 to-royal-gold/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Main Heading - Typewrites once then stays */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-royal-gold bg-clip-text text-transparent">
              {showMainTypewriter ? (
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 100,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('JS Royal Catering')
                      .callFunction(() => {
                        setShowMainTypewriter(false);
                      })
                      .start();
                  }}
                />
              ) : (
                'JS Royal Catering'
              )}
            </span>
          </h1>
          
          {/* Static Tagline */}
          <p className="text-2xl md:text-4xl mb-4 text-yellow-300 drop-shadow-lg font-light">
            {companyInfo.tagline}
          </p>
          
          {/* Animated Description - Loops continuously */}
          <div className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed h-16 flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  'Premium catering services for weddings, corporate events, and private parties.',
                  'Experience royal taste at every event with our exquisite menu packages.',
                  'Serving Morogoro, Dar es Salaam, and Dodoma with excellence.',
                  'Fresh ingredients, professional service, unforgettable experiences.'
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
                pauseFor: 2500,
              }}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WhatsAppButton 
            message="Hello JS Royal! I'm interested in your catering services. Please send me more information."
            className="text-lg px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 font-bold text-white rounded-2xl border-2 border-green-400"
          />
          <button 
            onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-royal-gold to-yellow-400 text-gray-900 px-10 py-5 rounded-2xl hover:from-yellow-400 hover:to-royal-gold transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 border-2 border-yellow-300 hover:border-yellow-200"
          >
            🎉 View Our Packages
          </button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-royal-gold rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default Hero;
