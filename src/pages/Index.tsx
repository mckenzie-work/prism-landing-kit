import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesCarousel from '@/components/ServicesCarousel';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PartnersMarquee />
      <ServicesCarousel />
      <About />
      <TechStack />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
