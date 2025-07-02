
import { Button } from "@/components/ui/button";
import { Server, ArrowLeft, Database, Settings, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import CookieBanner from "@/components/CookieBanner";

const ServerManagement = () => {
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
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-[#8B1538] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück zur Hauptseite</span>
              </Link>
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90 text-white">
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
                <Server className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Server-Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professionelle Verwaltung und Wartung Ihrer Server-Infrastruktur
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
                  Zuverlässiges Server-Management
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ihre Server sind das Herzstück Ihrer IT. Wir sorgen dafür, dass sie 
                  optimal laufen - mit proaktiver Überwachung, regelmäßigen Updates 
                  und schneller Fehlerbehebung.
                </p>
                <ul className="space-y-3">
                  {[
                    "Server-Installation & -Konfiguration",
                    "Proaktive Überwachung 24/7", 
                    "Update-Management",
                    "Performance-Optimierung",
                    "Backup & Recovery",
                    "Virtualisierung"
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
                  src="/lovable-uploads/b4e37a6e-ccd1-4e28-ae38-f8fb3b22b264.png" 
                  alt="Server-Infrastruktur" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Datenverfügbarkeit",
                  description: "99,9% Verfügbarkeit durch redundante Systeme"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Wartung",
                  description: "Regelmäßige Wartung und Updates für optimale Performance"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Monitoring",
                  description: "Kontinuierliche Leistungsüberwachung und -optimierung"
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
                Server-Beratung anfragen
              </h2>
              <p className="text-xl text-gray-600">
                Optimieren Sie Ihre Server-Infrastruktur
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

export default ServerManagement;
