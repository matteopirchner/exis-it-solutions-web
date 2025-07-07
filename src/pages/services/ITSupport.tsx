import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Headphones, ArrowLeft, Clock, Phone, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/home/Footer";

const ITSupport = () => {
  useEffect(() => {
    document.title = "IT-Support | exis Solutions";
  }, []);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
              <Link to="/#services">
                <Button variant="ghost" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </Link>
              <Button 
                onClick={() => smoothScroll('contact')}
                className="bg-[#8B1538] hover:bg-[#8B1538]/90 text-white"
              >
                Kontakt
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
                <Headphones className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT-Support
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Schnelle Hilfe bei IT-Problemen - vor Ort oder remote. Ihr zuverlässiger IT-Partner.
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
                  Professioneller IT-Support
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Unser erfahrenes Support-Team steht Ihnen bei allen IT-Problemen zur Seite. 
                  Ob Hardware-Defekte, Software-Probleme oder Systemausfälle - wir lösen Ihre 
                  IT-Herausforderungen schnell und effizient.
                </p>
                <ul className="space-y-3">
                  {[
                    "24/7 Notfall-Support",
                    "Remote-Wartung und -Support", 
                    "Vor-Ort-Service",
                    "Hardware-Reparaturen",
                    "Software-Installation",
                    "Systemoptimierung"
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
                  src="/lovable-uploads/7b856886-75e6-4ed2-889b-761ab5eda86c.png" 
                  alt="IT-Support" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Schnelle Reaktion",
                  description: "Innerhalb von 2 Stunden bei kritischen Problemen vor Ort"
                },
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "24/7 Erreichbar",
                  description: "Rund um die Uhr verfügbar für Notfälle und Support"
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Remote-Support",
                  description: "Viele Probleme lösen wir direkt per Fernwartung"
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
                Jetzt Support anfordern
              </h2>
              <p className="text-xl text-gray-600">
                Kontaktieren Sie uns für schnelle IT-Hilfe
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default ITSupport;
