import Layout from '../components/layout/Layout';
import ImageGallery from '../components/ui/ImageGallery';
import SectionTitle from '../components/ui/SectionTitle';

export default function Gallery() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl">See our catering excellence in action</p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Click any image to view larger">
            Event & Food Gallery
          </SectionTitle>
          <ImageGallery />
        </div>
      </div>
    </Layout>
  );
}