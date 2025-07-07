
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  smoothScroll: (elementId: string) => void;
}

const Navigation = ({ smoothScroll }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = (elementId: string) => {
    setMobileMenuOpen(false);
    smoothScroll(elementId);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => smoothScroll('top')} className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/5e5dfe99-0eab-452e-b862-12cf25362854.png" 
              alt="exis Solutions" 
              className="h-12"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => smoothScroll('top')} 
              className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
            >
              Start
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => smoothScroll('about')} 
              className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
            >
              Über Exis
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => smoothScroll('services')} 
              className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
            >
              Leistungen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => smoothScroll('faq')} 
              className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
            >
              Fragen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button 
              onClick={() => smoothScroll('contact')} 
              className="bg-[#8B1538] hover:bg-[#8B1538]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 p-6 space-y-4">
            <button 
              onClick={() => handleMobileMenuClick('top')} 
              className="block w-full text-left text-gray-700 hover:text-[#8B1538] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              Start
            </button>
            <button 
              onClick={() => handleMobileMenuClick('about')} 
              className="block w-full text-left text-gray-700 hover:text-[#8B1538] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              Über Exis
            </button>
            <button 
              onClick={() => handleMobileMenuClick('services')} 
              className="block w-full text-left text-gray-700 hover:text-[#8B1538] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              Leistungen
            </button>
            <button 
              onClick={() => handleMobileMenuClick('faq')} 
              className="block w-full text-left text-gray-700 hover:text-[#8B1538] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              Fragen
            </button>
            <Button 
              onClick={() => handleMobileMenuClick('contact')} 
              className="w-full bg-[#8B1538] hover:bg-[#8B1538]/90 text-white justify-center"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
