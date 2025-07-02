
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, Users, Database, Mail, Shield, CheckCircle, Server } from "lucide-react";
import { Link } from "react-router-dom";

const CloudLoesungen = () => {
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
            <div className="flex items-center space-x-4">
              <Link to="/#services" className="flex items-center space-x-2 text-gray-700 hover:text-[#8B1538] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <Globe className="w-16 h-16 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professionelle Hosting-Lösungen
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Von Website-Hosting bis zu kompletten Nextcloud-Instanzen - wir bieten sichere, 
              leistungsstarke Hosting-Lösungen für alle Ihre Anforderungen.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4">
              <a href="/#contact">Hosting-Beratung anfragen</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Nextcloud Highlight */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nextcloud - Ihre Teams & OneDrive Alternative
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Werden Sie unabhängig von Microsoft! Nextcloud bietet alle Funktionen von Teams, 
                OneDrive und mehr - komplett unter Ihrer Kontrolle und DSGVO-konform.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
                  alt="Nextcloud Dashboard" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Kompletter Microsoft-Ersatz
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Teams-Ersatz</h4>
                      <p className="text-gray-600">Chat, Video-Calls, Screen-Sharing und Kollaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">OneDrive-Ersatz</h4>
                      <p className="text-gray-600">Sicherer Cloud-Speicher mit Sync-Funktionen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office-Integration</h4>
                      <p className="text-gray-600">Dokumentenbearbeitung direkt im Browser</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Kalender & Kontakte</h4>
                      <p className="text-gray-600">Vollständige Terminplanung und Adressverwaltung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nextcloud-Pakete</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Starter</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-4">50€<span className="text-sm text-gray-500">/Monat</span></p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Bis zu 5 Benutzer</li>
                    <li>✓ 100GB Speicher</li>
                    <li>✓ Chat & Video-Calls</li>
                    <li>✓ Dokumentenbearbeitung</li>
                    <li>✓ Mobile Apps</li>
                  </ul>
                </div>
                <div className="border-2 border-blue-500 rounded-xl p-6 hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Beliebt
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Business</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-4">120€<span className="text-sm text-gray-500">/Monat</span></p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Bis zu 25 Benutzer</li>
                    <li>✓ 500GB Speicher</li>
                    <li>✓ Alle Starter-Features</li>
                    <li>✓ E-Mail Integration</li>
                    <li>✓ Erweiterte Sicherheit</li>
                    <li>✓ Priority Support</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-4">Ab 250€<span className="text-sm text-gray-500">/Monat</span></p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Unbegrenzte Benutzer</li>
                    <li>✓ Unbegrenzter Speicher</li>
                    <li>✓ Alle Business-Features</li>
                    <li>✓ Single Sign-On</li>
                    <li>✓ Compliance Features</li>
                    <li>✓ Dedizierte Infrastruktur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Hosting Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Weitere Hosting-Services
              </h2>
              <p className="text-xl text-gray-600">
                Komplette Hosting-Lösungen für alle Ihre Anforderungen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Website-Hosting</h3>
                  <p className="text-gray-600 mb-6">
                    Schnelles, sicheres Hosting für Ihre Websites mit SSL-Zertifikaten, 
                    täglichen Backups und 99.9% Uptime-Garantie.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ SSD-Speicher</li>
                    <li>✓ Kostenlose SSL-Zertifikate</li>
                    <li>✓ Automatische Backups</li>
                    <li>✓ 24/7 Monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">E-Mail-Server</h3>
                  <p className="text-gray-600 mb-6">
                    Professionelle E-Mail-Lösungen mit eigener Domain, 
                    Spam-Schutz und mobiler Synchronisation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Eigene E-Mail-Domain</li>
                    <li>✓ Spam & Virus-Schutz</li>
                    <li>✓ Mobile Synchronisation</li>
                    <li>✓ Webmail-Interface</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Server className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Server</h3>
                  <p className="text-gray-600 mb-6">
                    Leistungsstarke dedizierte Server für ressourcenintensive 
                    Anwendungen und maximale Performance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Vollständige Root-Zugriffe</li>
                    <li>✓ Hochleistungs-Hardware</li>
                    <li>✓ Individuelle Konfiguration</li>
                    <li>✓ Managed Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Warum unser Hosting wählen?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-[#8B1538] mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">DSGVO-Konform</h3>
                  <p className="text-gray-600">
                    Ihre Daten bleiben in Österreich und werden nach strengsten 
                    Datenschutzbestimmungen verwaltet.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
                  <p className="text-gray-600">
                    Hochverfügbare Infrastruktur mit redundanten Systemen 
                    für maximale Ausfallsicherheit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Persönlicher Support</h3>
                  <p className="text-gray-600">
                    Direkter Kontakt zu unseren Experten - kein Callcenter, 
                    sondern persönliche Betreuung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Database className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Skalierbar</h3>
                  <p className="text-gray-600">
                    Unsere Lösungen wachsen mit Ihrem Unternehmen - 
                    von kleinen Websites bis zu Enterprise-Anwendungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für professionelles Hosting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung und finden Sie die 
              perfekte Hosting-Lösung für Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4">
                <a href="/#contact">Kostenlose Beratung</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4">
                <Link to="/#services">Zurück zu Leistungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

export default CloudLoesungen;
