
import { Button } from "@/components/ui/button";
import { Network, ArrowLeft, Shield, Server, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import CookieBanner from "@/components/CookieBanner";

const Netzwerkloesungen = () => {
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
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90 text-white" asChild>
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-[#8B1538] rounded-full p-4">
                <Network className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Netzwerklösungen
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professionelle Netzwerk-Infrastrukturen für optimale Konnektivität und Performance
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Maßgeschneiderte Netzwerklösungen
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wir planen, installieren und warten Ihre komplette Netzwerk-Infrastruktur. 
                  Von kleinen Büronetzwerken bis hin zu komplexen Unternehmensarchitekturen - 
                  wir sorgen für zuverlässige und schnelle Verbindungen.
                </p>
                <ul className="space-y-3">
                  {[
                    "Netzwerkplanung und -design",
                    "LAN/WLAN-Installation", 
                    "Firewall-Konfiguration",
                    "VPN-Einrichtung",
                    "Network-Monitoring",
                    "Wartung und Support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#8B1538] rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/2ce30bf2-ca83-4c26-b6c7-c9e91e256ed0.png" 
                  alt="Netzwerk-Infrastruktur" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Sicherheit",
                  description: "Höchste Sicherheitsstandards mit Firewall und Verschlüsselung"
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Performance",
                  description: "Optimierte Netzwerkgeschwindigkeit für maximale Produktivität"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Wartung",
                  description: "Proaktive Überwachung und schnelle Problemlösung"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-[#8B1538] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Jetzt beraten lassen
              </h2>
              <p className="text-xl text-gray-600">
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CookieBanner />
    </div>
  );
};

export default Netzwerkloesungen;
