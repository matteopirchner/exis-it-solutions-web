
import { useEffect } from 'react';
import { trackEvent } from "@/utils/analytics";
import CookieBanner from "@/components/CookieBanner";
import Navigation from "@/components/home/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import NextcloudSection from "@/components/home/NextcloudSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Start | exis Solutions";
  }, []);

  const smoothScroll = (elementId: string) => {
    if (elementId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Track scroll navigation in Google Analytics
      trackEvent('scroll_navigation', 'navigation', elementId);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation smoothScroll={smoothScroll} />
      <HeroSection smoothScroll={smoothScroll} />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <NextcloudSection smoothScroll={smoothScroll} />
      <FAQSection />
      <ContactSection />
      <Footer smoothScroll={smoothScroll} />
      <CookieBanner />
    </div>
  );
};

export default Index;
