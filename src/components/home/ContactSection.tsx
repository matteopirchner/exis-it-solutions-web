
import ContactForm from "@/components/ContactForm";
import GoogleMaps from "@/components/GoogleMaps";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Kontakt aufnehmen
            </h2>
            <p className="text-xl text-gray-600">
              Lassen Sie uns über Ihre IT-Anforderungen sprechen
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Info</h3>
                <div className="space-y-4">
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">E-Mail</h4>
                    <p className="text-gray-600">office@exis.at</p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Adresse</h4>
                    <p className="text-gray-600">
                      exis Solutions e.U.<br />
                      Pongau, Salzburg<br />
                      Österreich
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Öffnungszeiten</h4>
                    <p className="text-gray-600">
                      Mo-Fr: 8:00 - 18:00 Uhr<br />
                      24/7 Notfall-Support verfügbar
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Standort</h3>
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
