
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedServiceText from "./AnimatedServiceText";

interface HeroSectionProps {
  smoothScroll: (elementId: string) => void;
}

const HeroSection = ({ smoothScroll }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B1538]/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <AnimatedServiceText />
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-fade-in">
            IT-Lösungen für Jedermann
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Professionelle IT-Services, Hosting-Lösungen und Support für B2B und Privatkunden. 
            Ihre Experten für moderne Technologie in Pongau/Salzburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
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
        </div>
      </div>
      
      {/* Scroll Indicator - Fixed positioning for perfect centering */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
