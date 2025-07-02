
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import GoogleMaps from "@/components/GoogleMaps";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
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
              <a href="#about" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Allgemeines
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Leistungen
              </a>
              <a href="#faq" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Fragen
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                Kontakt Info
              </a>
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90">
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              IT-Lösungen für Ihr Unternehmen
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professionelle IT-Services, Netzwerklösungen und Support für B2B und Privatkunden. 
              Ihre Experten für moderne Technologie in Österreich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#8B1538] hover:bg-[#8B1538]/90">
                <a href="#contact">Kostenloses Beratungsgespräch</a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#services">Unsere Leistungen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Über exis Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir sind Ihr verlässlicher Partner für alle IT-Angelegenheiten. Mit jahrelanger Erfahrung 
                und modernsten Technologien sorgen wir dafür, dass Ihre IT-Infrastruktur reibungslos funktioniert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Netzwerk-Infrastruktur" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Warum exis Solutions?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B1538] rounded-full mr-3"></span>
                    Individuelle Lösungen für Ihre Anforderungen
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B1538] rounded-full mr-3"></span>
                    24/7 Support und schnelle Reaktionszeiten
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B1538] rounded-full mr-3"></span>
                    Modernste Technologien und bewährte Lösungen
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B1538] rounded-full mr-3"></span>
                    Transparente Preise und faire Konditionen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-600">
                Komplette IT-Services aus einer Hand
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Netzwerklösungen" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Netzwerklösungen</h3>
                <p className="text-gray-600">
                  Planung, Installation und Wartung von Netzwerk-Infrastrukturen für optimale Konnektivität.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Software-Entwicklung" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Software-Entwicklung</h3>
                <p className="text-gray-600">
                  Maßgeschneiderte Software-Lösungen für Ihre spezifischen Geschäftsanforderungen.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="IT-Support" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">IT-Support</h3>
                <p className="text-gray-600">
                  Schnelle Hilfe bei IT-Problemen - vor Ort oder remote. Ihr zuverlässiger IT-Partner.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Cloud-Lösungen" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud-Lösungen</h3>
                <p className="text-gray-600">
                  Migration und Verwaltung von Cloud-Infrastrukturen für flexible und skalierbare IT.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Sicherheitslösungen" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sicherheitslösungen</h3>
                <p className="text-gray-600">
                  Umfassende IT-Security-Konzepte zum Schutz Ihrer Daten und Systeme.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Beratung" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">IT-Beratung</h3>
                <p className="text-gray-600">
                  Strategische Beratung für Ihre IT-Landschaft und digitale Transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-600">
                Antworten auf die wichtigsten Fragen zu unseren Services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Wie schnell können Sie bei IT-Problemen helfen?
                </h3>
                <p className="text-gray-600">
                  Wir bieten 24/7 Support mit garantierten Reaktionszeiten. Bei kritischen Problemen 
                  sind wir innerhalb von 2 Stunden vor Ort oder remote verfügbar.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Arbeiten Sie auch mit kleinen Unternehmen?
                </h3>
                <p className="text-gray-600">
                  Ja, wir betreuen sowohl große Unternehmen als auch kleine Betriebe und Privatpersonen. 
                  Unsere Lösungen sind skalierbar und an Ihre Bedürfnisse angepasst.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bieten Sie auch Wartungsverträge an?
                </h3>
                <p className="text-gray-600">
                  Selbstverständlich! Wir bieten flexible Wartungsverträge, die präventive Wartung, 
                  Updates und Priority-Support umfassen.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Wie sicher sind Cloud-Lösungen?
                </h3>
                <p className="text-gray-600">
                  Wir implementieren nur DSGVO-konforme Cloud-Lösungen mit höchsten Sicherheitsstandards, 
                  Verschlüsselung und regelmäßigen Backups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Kontakt aufnehmen
              </h2>
              <p className="text-xl text-gray-600">
                Lassen Sie uns über Ihre IT-Anforderungen sprechen
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kontakt Info</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">E-Mail</h4>
                      <p className="text-gray-600">office@exis.at</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">
                        exis Solutions e.U.<br />
                        [Ihre Adresse]<br />
                        [PLZ] [Ort], Österreich
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Öffnungszeiten</h4>
                      <p className="text-gray-600">
                        Mo-Fr: 8:00 - 18:00 Uhr<br />
                        24/7 Notfall-Support verfügbar
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Standort</h3>
                  <GoogleMaps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <img 
                  src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                  alt="exis Solutions" 
                  className="h-12 mb-4 filter brightness-0 invert"
                />
                <p className="text-gray-400 mb-4">
                  Ihr verlässlicher Partner für professionelle IT-Lösungen in Österreich. 
                  Von Netzwerken bis Cloud - wir machen Ihre IT zum Erfolgsfaktor.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#services" className="hover:text-[#8B1538] transition-colors">Netzwerklösungen</a></li>
                  <li><a href="#services" className="hover:text-[#8B1538] transition-colors">Software-Entwicklung</a></li>
                  <li><a href="#services" className="hover:text-[#8B1538] transition-colors">IT-Support</a></li>
                  <li><a href="#services" className="hover:text-[#8B1538] transition-colors">Cloud-Lösungen</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Rechtliches</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/impressum" className="hover:text-[#8B1538] transition-colors">Impressum</Link></li>
                  <li><Link to="/datenschutz" className="hover:text-[#8B1538] transition-colors">Datenschutz</Link></li>
                  <li><Link to="/cookies" className="hover:text-[#8B1538] transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 exis Solutions e. U. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
