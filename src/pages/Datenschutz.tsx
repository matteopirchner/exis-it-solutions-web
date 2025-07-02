import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/home/Footer";

const Datenschutz = () => {
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="w-20 h-20 text-[#8B1538] mx-auto mb-6 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transparenz und Schutz Ihrer persönlichen Daten haben für uns höchste Priorität
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Lock className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">DSGVO-konform</h3>
                        <p className="text-sm text-gray-600 mt-2">Vollständige Einhaltung der europäischen Datenschutzgrundverordnung</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Eye className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Transparenz</h3>
                        <p className="text-sm text-gray-600 mt-2">Vollständige Offenlegung unserer Datenverarbeitungspraktiken</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <FileText className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Ihre Rechte</h3>
                        <p className="text-sm text-gray-600 mt-2">Umfassende Information über Ihre Datenschutzrechte</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 border-[#8B1538] hover:shadow-lg transition-shadow duration-300">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Grundsätze unseres Datenschutzes</h2>
                      <p className="mb-4">
                        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatische Datenerfassung</h3>
                      <p className="mb-4">
                        Wenn Sie unsere Website besuchen, werden automatisch technische Daten erfasst (z.B. IP-Adresse, Browsertyp). Diese Daten sind notwendig, um die Website korrekt darzustellen.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Analytics</h3>
                      <p className="mb-4">
                        Wir verwenden Google Analytics zur Analyse des Nutzerverhaltens auf dieser Website. Ihre IP-Adresse wird anonymisiert. Die Datenverarbeitung erfolgt auf Grundlage von Art 6 Abs 1 lit f DSGVO.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Wahlmöglichkeiten</h3>
                      <p className="mb-4">
                        Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Außerdem können Sie der Verwendung von Google Analytics widersprechen.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#8B1538]/5 to-transparent rounded-2xl p-6 border border-[#8B1538]/20">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie-Einstellungen</h3>
                      <p className="mb-4">
                        Weitere Informationen finden Sie in den Einstellungen unseres{" "}
                        <Link to="/cookies" className="text-[#8B1538] hover:underline font-semibold transition-colors duration-300">
                          Cookie-Banners
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Datenschutz;
