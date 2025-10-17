import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect current page from router pathname
  useEffect(() => {
    const path = router.pathname;
    if (path === '/') setActiveLink('home');
    else if (path === '/packages') setActiveLink('packages');
    else if (path === '/gallery') setActiveLink('gallery');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/contact') setActiveLink('contact');
  }, [router.pathname, router.asPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (linkId, href) => {
    setActiveLink(linkId);
    closeMobileMenu();
  };

  const navigationItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Packages', href: '/packages', id: 'packages' },
    { name: 'Gallery', href: '/gallery', id: 'gallery' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-royal-blue text-white sticky top-0 z-50 shadow-2xl backdrop-blur-lg bg-opacity-95 border-b border-royal-gold/30">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Premium Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-4 group"
            onClick={() => handleLinkClick('home', '/')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-royal-gold rounded-xl blur-md group-hover:blur-lg transition-all duration-500 opacity-60 group-hover:opacity-80"></div>
              <img 
                src="/logo.jpg" 
                alt="JS Royal Catering" 
                className="h-14 w-14 object-contain rounded-xl relative z-10 border-2 border-royal-gold shadow-2xl transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-royal-gold to-yellow-400 bg-clip-text text-transparent leading-tight group-hover:scale-105 transition-transform duration-300">
                JS Royal Catering Services
              </span>
              
            </div>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
            {navigationItems.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id, link.href)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 group/nav ${
                  activeLink === link.id 
                    ? 'text-royal-blue bg-gradient-to-r from-yellow-400 to-royal-gold shadow-lg' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/20'
                }`}
              >
                <span className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover/nav:w-8 transition-all duration-300 ${
                  activeLink === link.id ? 'w-8 bg-royal-blue' : ''
                }`}></span>
                
                {link.name}
                
                <span className="absolute -top-1 -right-1 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                  ✨
                </span>
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/255765365358?text=Hello%20JS%20Royal,%20I%20want%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400 flex items-center gap-2"
            >
              📱 Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden bg-royal-gold text-gray-900 p-3 rounded-2xl hover:bg-yellow-400 transition-all duration-300 shadow-lg flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-fade-in">
            <div className="py-4 space-y-2">
              {navigationItems.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id, link.href)}
                  className={`block px-6 py-4 mx-2 rounded-xl font-semibold transition-all duration-300 ${
                    activeLink === link.id
                      ? 'bg-gradient-to-r from-yellow-400 to-royal-gold text-gray-900 shadow-lg'
                      : 'text-white hover:bg-white/20 hover:text-yellow-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      activeLink === link.id ? 'bg-gray-900' : 'bg-yellow-400'
                    }`}></span>
                    {link.name}
                  </div>
                </Link>
              ))}
              
              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/255765365358?text=Hello%20JS%20Royal,%20I%20want%20to%20place%20an%20order!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block mx-2 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 border-2 border-green-400 mt-4"
              >
                📱 Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
    </header>
  );
};

export default Header;