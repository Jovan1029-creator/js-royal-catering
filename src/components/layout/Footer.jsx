import { companyInfo } from '../../data/company-data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">JS Royal Catering</h3>
        <p className="mb-2">&copy; 2025 {companyInfo.name}. All rights reserved.</p>
        <p className="text-yellow-300 mb-4 text-lg">{companyInfo.tagline}</p>
        <div className="mb-4">
          <p><strong>Contact:</strong> {companyInfo.phones.join(' / ')}</p>
          <p><strong>Email:</strong> {companyInfo.email}</p>
        </div>
        <p className="text-gray-400">Serving: {companyInfo.location.serviceAreas.join(', ')}</p>
      </div>
    </footer>
  );
};

export default Footer;