import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import ProductGallery from '@/components/ProductGallery';
import QualityAssurance from '@/components/QualityAssurance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductCategory />
      <ProductGallery />
      <QualityAssurance />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
