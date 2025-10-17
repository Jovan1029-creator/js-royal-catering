import Link from 'next/link';
import SectionTitle from '../ui/SectionTitle';
import ImageGallery from '../ui/ImageGallery';

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>
          Our Events Gallery
        </SectionTitle>
        
        <div className="mb-8">
          <ImageGallery />
        </div>
        
        <div className="text-center">
          <Link 
            href="/gallery"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold inline-block shadow-lg hover:shadow-xl"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;