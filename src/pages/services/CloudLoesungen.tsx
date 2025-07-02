
import { Button } from "@/components/ui/button";
import { Globe, Server, Shield, Users, CheckCircle, ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CloudLoesungen = () => {
  const scrollToServicesSection = () => {
    // Navigate to main page and scroll to services section
    window.location.href = "/#services";
  };

  const scrollToContactSection = () => {
    // Navigate to main page and scroll to contact section
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">Hosting & Cloud-Lösungen</h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professionelle Hosting-Services, Nextcloud-Instanzen und sichere Cloud-Lösungen 
              für Ihr Unternehmen. Werden Sie unabhängig von Microsoft und Google.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Services Overview */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Unsere Hosting-Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Server className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Website-Hosting</h3>
                  <p className="text-gray-600">Schnelles, sicheres und zuverlässiges Hosting für Ihre Websites mit 99.9% Uptime-Garantie.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Users className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Nextcloud</h3>
                  <p className="text-gray-600">Ihre eigene Cloud-Lösung als Teams/OneDrive-Ersatz mit vollständiger Datenkontrolle.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Mail className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">E-Mail-Server</h3>
                  <p className="text-gray-600">Professionelle E-Mail-Lösungen mit eigener Domain und höchsten Sicherheitsstandards.</p>
                </div>
              </div>
            </section>

            {/* Nextcloud Details */}
            <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nextcloud - Ihre Microsoft Alternative</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Warum Nextcloud?</h3>
                  <div className="space-y-4">
                    {[
                      "100% Datenschutz - Ihre Daten bleiben bei Ihnen",
                      "Teams-Ersatz: Chat, Video-Calls, Dateien teilen",
                      "OneDrive-Alternative mit unbegrenztem Speicher",
                      "Integrierte Office-Suite für Dokumente",
                      "Kalender und Kontakte synchronisieren",
                      "Kostengünstig im Vergleich zu Microsoft 365"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Nextcloud Paket</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Ab 50€<span className="text-lg text-gray-600">/Monat</span></div>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Bis zu 10 Benutzer</li>
                    <li>• 1TB Speicherplatz</li>
                    <li>• Video-Konferenzen</li>
                    <li>• Office-Integration</li>
                    <li>• E-Mail & Kalender</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Website Hosting */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Website-Hosting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Basis Hosting</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">25€<span className="text-lg text-gray-600">/Monat</span></div>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />10GB SSD Speicher</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />1 Domain inklusive</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />SSL-Zertifikat</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Tägliche Backups</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />E-Mail Support</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Business Hosting</h3>
                  <div className="text-3xl font-bold mb-4">75€<span className="text-lg opacity-80">/Monat</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />100GB SSD Speicher</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />Unlimited Domains</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />SSL-Zertifikat</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />Stündliche Backups</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />24/7 Phone Support</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-300 mr-2" />Performance Monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Features */}
            <section className="mb-16 bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Sicherheit & Datenschutz</h2>
                <p className="text-xl text-gray-600">Höchste Sicherheitsstandards für Ihre Daten</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "DSGVO-konforme Serverstandorte in Österreich",
                  "SSL-Verschlüsselung für alle Verbindungen", 
                  "Automatische Sicherheitsupdates",
                  "Regelmäßige Penetrationstests"
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-4">Bereit für Ihre eigene Cloud?</h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam die perfekte Hosting-Lösung für Ihr Unternehmen finden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContactSection}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kostenloses Beratungsgespräch
                </Button>
                <Button
                  onClick={scrollToContactSection}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt aufnehmen
                </Button>
              </div>
            </section>

            {/* Back Button */}
            <div className="text-center mt-12">
              <Button
                onClick={scrollToServicesSection}
                variant="outline"
                className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zu den Leistungen
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CloudLoesungen;
