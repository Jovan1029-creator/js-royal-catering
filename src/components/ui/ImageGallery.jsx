import { useState, useEffect } from 'react';
import { companyInfo } from '../../data/company-data';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [randomizedImages, setRandomizedImages] = useState([]);

  // Shuffle array function - moved to useEffect to avoid hydration mismatch
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Only shuffle on client side after component mounts
    setRandomizedImages(shuffleArray(companyInfo.galleryImages));
  }, []);

  // Show loading state or empty during initial render
  if (randomizedImages.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {companyInfo.galleryImages.map((image, index) => (
          <div 
            key={index}
            className="aspect-square bg-gray-200 rounded-lg animate-pulse"
          >
            {/* Empty placeholder during load */}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {randomizedImages.map((image, index) => (
          <div 
            key={index}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;