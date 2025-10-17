// In PackageCard.jsx - Replace the entire file with:
import WhatsAppButton from './WhatsAppButton';

const PackageCard = ({ package: pkg, isPopular }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
      isPopular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
    }`}>
      
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-royal-cream opacity-90"></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-96 transition-all duration-1000"></div>
      
      <div className="relative p-8 z-10">
        
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg rotate-12">
            MOST POPULAR
          </div>
        )}
        
        {/* Package Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent mb-2">
            {pkg.name}
          </h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
            <span className="text-gray-500 text-sm">per person</span>
          </div>
        </div>
        
        {/* Features List */}
        <div className="mb-6">
          <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-white border-opacity-50">
            <h4 className="font-semibold text-gray-700 mb-3 text-center">🎉 What's Included:</h4>
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              {pkg.items.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* WhatsApp Button */}
        <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
          <WhatsAppButton 
            message={`I want to book the ${pkg.name} (${pkg.originalName}) for my event. Please contact me with more details.`} 
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;