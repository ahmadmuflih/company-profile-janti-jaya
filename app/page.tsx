import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import QualityAssurance from '@/components/QualityAssurance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductCategory />
      <QualityAssurance />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
