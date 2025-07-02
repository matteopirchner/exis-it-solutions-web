
import { Button } from "@/components/ui/button";
import { Building, Mail, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                alt="exis Solutions" 
                className="h-12 hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#about" className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group">
                Allgemeines
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/#services" className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group">
                Leistungen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/#faq" className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group">
                Fragen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/#contact" className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group">
                Kontakt Info
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link to="/#contact">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Building className="w-20 h-20 text-[#8B1538] mx-auto mb-6 hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Impressum
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Rechtliche Informationen und Kontaktdaten unseres Unternehmens
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Building className="w-10 h-10 text-[#8B1538] mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900 text-sm">Unternehmen</h3>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Mail className="w-10 h-10 text-[#8B1538] mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900 text-sm">Kontakt</h3>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Globe className="w-10 h-10 text-[#8B1538] mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900 text-sm">Online</h3>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Scale className="w-10 h-10 text-[#8B1538] mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900 text-sm">Rechtliches</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 border-[#8B1538] hover:shadow-lg transition-shadow duration-300">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Building className="w-6 h-6 mr-3 text-[#8B1538]" />
                        Angaben gemäß § 5 TMG
                      </h2>
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="font-semibold text-lg text-gray-900 mb-2">exis Solutions e.U.</p>
                        <p className="text-gray-600">Inhaber: [Name]</p>
                        <p className="text-gray-600">[Adresse]</p>
                        <p className="text-gray-600">[PLZ] [Ort]</p>
                        <p className="text-gray-600 font-medium">Österreich</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-[#8B1538]" />
                        Kontakt
                      </h3>
                      <div className="bg-white rounded-xl p-6 shadow-sm space-y-2">
                        <p className="flex items-center">
                          <span className="font-medium text-gray-900 w-20">Telefon:</span>
                          <span className="text-gray-600">[Telefonnummer]</span>
                        </p>
                        <p className="flex items-center">
                          <span className="font-medium text-gray-900 w-20">E-Mail:</span>
                          <span className="text-[#8B1538] font-medium">office@exis.at</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h3>
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-600 mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                        <p className="font-semibold text-gray-900">[UID-Nummer]</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h3>
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-600 mb-3">
                          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        </p>
                        <a 
                          href="https://ec.europa.eu/consumers/odr/" 
                          className="text-[#8B1538] hover:underline font-semibold transition-colors duration-300 hover:scale-105 inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://ec.europa.eu/consumers/odr/
                        </a>
                        <p className="text-gray-600 mt-3">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#8B1538]/5 to-transparent rounded-2xl p-6 border border-[#8B1538]/20">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Verbraucherstreitbeilegung/Universalschlichtungsstelle
                      </h3>
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-600">
                          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                          Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              © 2025 exis Solutions e. U.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-[#8B1538] transition-all duration-300 hover:scale-105">Home</Link>
              <Link to="/impressum" className="hover:text-[#8B1538] transition-all duration-300 hover:scale-105">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-[#8B1538] transition-all duration-300 hover:scale-105">Datenschutz</Link>
              <Link to="/cookies" className="hover:text-[#8B1538] transition-all duration-300 hover:scale-105">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
