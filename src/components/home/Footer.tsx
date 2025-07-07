import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

interface FooterProps {
  smoothScroll?: (elementId: string) => void;
}

const Footer = ({ smoothScroll }: FooterProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage && smoothScroll) {
      e.preventDefault();
      smoothScroll('top');
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block" onClick={handleLogoClick}>
                <img 
                  src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                  alt="exis Solutions" 
                  className="h-12 mb-6 filter brightness-0 invert hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Ihr verlässlicher Partner für professionelle IT-Lösungen in Goldegg/Salzburg. 
                Von Netzwerken bis Hosting - wir machen Ihre IT zum Erfolgsfaktor.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:office@exis.at" className="hover:text-[#8B1538] transition-colors duration-200">
                    office@exis.at
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+43681846627377" className="hover:text-[#8B1538] transition-colors duration-200">
                    +43 681 84662737
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Hofmark 156, 5622 Goldegg</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/exis.at/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8B1538] transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/services/netzwerkloesungen" className="hover:text-[#8B1538] transition-colors duration-200">Netzwerklösungen</Link></li>
                <li><Link to="/services/it-support" className="hover:text-[#8B1538] transition-colors duration-200">IT-Support</Link></li>
                <li><Link to="/services/cloud-loesungen" className="hover:text-[#8B1538] transition-colors duration-200">Hosting</Link></li>
                <li><Link to="/services/sicherheitsloesungen" className="hover:text-[#8B1538] transition-colors duration-200">Sicherheitslösungen</Link></li>
                <li><Link to="/services/server-management" className="hover:text-[#8B1538] transition-colors duration-200">Server-Management</Link></li>
                <li><Link to="/services/it-beratung" className="hover:text-[#8B1538] transition-colors duration-200">IT-Beratung</Link></li>
                <li><Link to="/services/individuelle-loesungen" className="hover:text-[#8B1538] transition-colors duration-200">Individuelle Lösungen</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Rechtliches</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/impressum" className="hover:text-[#8B1538] transition-colors duration-200">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-[#8B1538] transition-colors duration-200">Datenschutz</Link></li>
                <li><Link to="/cookies" className="hover:text-[#8B1538] transition-colors duration-200">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 exis Solutions e. U. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
