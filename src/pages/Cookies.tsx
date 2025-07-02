
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
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
              <Cookie className="w-20 h-20 text-[#8B1538] mx-auto mb-6 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cookie-Richtlinie
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Verstehen Sie, wie wir Cookies verwenden, um Ihr Nutzererlebnis zu verbessern
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
                        <Settings className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Funktionalität</h3>
                        <p className="text-sm text-gray-600 mt-2">Cookies ermöglichen die optimale Funktion unserer Website</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Shield className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Sicherheit</h3>
                        <p className="text-sm text-gray-600 mt-2">Sichere Speicherung und Verarbeitung Ihrer Präferenzen</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <CheckCircle className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Kontrolle</h3>
                        <p className="text-sm text-gray-600 mt-2">Sie haben jederzeit die volle Kontrolle über Ihre Cookie-Einstellungen</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 border-[#8B1538] hover:shadow-lg transition-shadow duration-300">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Was sind Cookies?</h2>
                      <p className="mb-4">
                        Unsere Website verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Welche Cookies verwenden wir?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                            <p className="text-sm text-gray-600">
                              Zur Sicherstellung der Website-Funktionalität
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Settings className="w-5 h-5 text-[#8B1538] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                            <p className="text-sm text-gray-600">
                              Google Analytics zur Verbesserung unseres Angebots
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Zustimmung</h3>
                      <p className="mb-4">
                        Bei Ihrem ersten Besuch fragen wir Sie über ein Cookie-Banner nach Ihrer Zustimmung. Sie können Ihre Einstellungen jederzeit ändern.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#8B1538]/5 to-transparent rounded-2xl p-6 border border-[#8B1538]/20">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Rechtsgrundlage</h3>
                      <p className="mb-4">
                        Die Speicherung von Cookies erfolgt auf Grundlage von Art 6 Abs 1 lit a DSGVO, sofern Sie eingewilligt haben, ansonsten auf Grundlage unseres berechtigten Interesses (Art 6 Abs 1 lit f DSGVO).
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

export default Cookies;
