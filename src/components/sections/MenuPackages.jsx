import { companyInfo } from '../../data/company-data';
import PackageCard from '../ui/PackageCard';
import SectionTitle from '../ui/SectionTitle';

const MenuPackages = () => {
  return (
    <section id="packages" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Choose the perfect package for your event">
          Our Catering Packages
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyInfo.menuPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg} 
              isPopular={pkg.name === "Gold Package"} // Mark Gold as popular
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3">
            <span className="text-yellow-600">⭐</span>
            <p className="text-yellow-700 font-semibold">
              <span className="text-royal-blue">Gold Package</span> is our most popular choice!
            </p>
          </div>
          
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4 text-lg">
              All packages include complete setup, professional service, and premium ingredients
            </p>
            <p className="text-lg font-semibold text-royal-blue">
              🗺️ Serving: {companyInfo.location.serviceAreas.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPackages;