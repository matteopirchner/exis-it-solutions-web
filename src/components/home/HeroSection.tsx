
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ParallaxBackground from "@/components/ParallaxBackground";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

interface HeroSectionProps {
  smoothScroll: (elementId: string) => void;
}

const HeroSection = ({ smoothScroll }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B1538]/20 to-transparent"></div>
        </div>
      </ParallaxBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <ScrollRevealWrapper animation="fadeIn" delay={200}>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-light mb-2 text-[#8B1538] animate-pulse">
                Das ist IT. Das ist exis.
              </p>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="fadeUp" delay={400}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              IT-Lösungen für Ihr Unternehmen
            </h1>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="fadeUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Professionelle IT-Services, Hosting-Lösungen und Support für B2B und Privatkunden. 
              Ihre Experten für moderne Technologie in Pongau/Salzburg.
            </p>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="zoomIn" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => smoothScroll('contact')} 
                className="bg-[#8B1538] hover:bg-[#8B1538]/90 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4 text-white"
              >
                Kostenloses Beratungsgespräch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => smoothScroll('services')} 
                className="border-white text-black hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4 bg-white"
              >
                Unsere Leistungen
              </Button>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <ScrollRevealWrapper animation="fadeIn" delay={1000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default HeroSection;
