
import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
              Über exis Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Seit über 5 Jahren sind wir Ihr verlässlicher Partner für alle IT-Angelegenheiten. Mit modernsten 
              Technologien und persönlichem Service sorgen wir dafür, dass Ihre IT-Infrastruktur reibungslos funktioniert.
              Als junges Team aus dem Pongau in Salzburg bringen wir frische Ideen und innovative Lösungen zu Ihnen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B1538]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src="/lovable-uploads/ef49115e-c47a-4e3d-bd71-221f60451dae.png" 
                alt="Server-Infrastruktur" 
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Warum exis Solutions?
              </h3>
              <div className="space-y-6">
                {[
                  "Über 150 zufriedene Kunden vertrauen uns",
                  "24/7 Support und garantierte Reaktionszeiten", 
                  "Modernste Hosting-Infrastruktur mit 99.9% Uptime",
                  "Transparente Preise und faire Konditionen",
                  "Persönlicher Ansprechpartner für alle Anliegen",
                  "Junges, dynamisches Team aus Pongau/Salzburg"
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:scale-105 transition-all duration-300">
                    <div className="w-4 h-4 bg-[#8B1538] rounded-full mr-4 group-hover:animate-pulse"></div>
                    <p className="text-lg text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Exis Solutions hat unsere komplette IT-Infrastruktur modernisiert. Hervorragender Service!"</p>
              <p className="font-semibold text-gray-900">- KMU Kunde</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Nextcloud Setup war perfekt. Endlich unabhängig von Microsoft Teams!"</p>
              <p className="font-semibold text-gray-900">- Privatkunde</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"24/7 Support funktioniert wirklich. Schnelle Hilfe bei allen Problemen."</p>
              <p className="font-semibold text-gray-900">- Unternehmenskunde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
