import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import MenuPackages from '../components/sections/MenuPackages';
import GalleryPreview from '../components/sections/GalleryPreview';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MenuPackages />
      <GalleryPreview />
      <ContactSection />
    </Layout>
  );
}