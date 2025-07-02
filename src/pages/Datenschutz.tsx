
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                alt="exis Solutions" 
                className="h-12"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#about" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Allgemeines
              </Link>
              <Link to="/#services" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Leistungen
              </Link>
              <Link to="/#faq" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Fragen
              </Link>
              <Link to="/#contact" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Kontakt Info
              </Link>
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90">
                <Link to="/#contact">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Datenschutzerklärung
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                </p>
                
                <p className="mb-6">
                  Wenn Sie unsere Website besuchen, werden automatisch technische Daten erfasst (z.B. IP-Adresse, Browsertyp). Diese Daten sind notwendig, um die Website korrekt darzustellen.
                </p>
                
                <p className="mb-6">
                  Wir verwenden Google Analytics zur Analyse des Nutzerverhaltens auf dieser Website. Ihre IP-Adresse wird anonymisiert. Die Datenverarbeitung erfolgt auf Grundlage von Art 6 Abs 1 lit f DSGVO.
                </p>
                
                <p className="mb-6">
                  Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Außerdem können Sie der Verwendung von Google Analytics widersprechen.
                </p>
                
                <p className="mb-6">
                  Weitere Informationen finden Sie in den Einstellungen unseres{" "}
                  <Link to="/cookies" className="text-[#8B1538] hover:underline">
                    Cookie-Banners
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              © 2025 exis Solutions e. U.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-[#8B1538] transition-colors">Home</Link>
              <Link to="/impressum" className="hover:text-[#8B1538] transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-[#8B1538] transition-colors">Datenschutz</Link>
              <Link to="/cookies" className="hover:text-[#8B1538] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Datenschutz;
