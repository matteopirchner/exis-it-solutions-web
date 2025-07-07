
import ContactForm from "@/components/ContactForm";
import GoogleMaps from "@/components/GoogleMaps";
import Card3D from "@/components/effects/Card3D";
import ParallaxContainer from "@/components/effects/ParallaxContainer";
import GlowingOrb from "@/components/effects/GlowingOrb";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb 
        size={400} 
        color="#8B1538" 
        intensity={0.08}
        className="top-1/4 left-1/4 animate-float"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ParallaxContainer speed={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
                Kontakt aufnehmen
              </h2>
              <p className="text-xl text-gray-600">
                Lassen Sie uns über Ihre IT-Anforderungen sprechen
              </p>
            </div>
          </ParallaxContainer>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card3D intensity={1} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <ContactForm />
            </Card3D>
            
            <div className="space-y-8">
              <Card3D intensity={0.8} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Info</h3>
                <div className="space-y-4">
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">E-Mail</h4>
                    <p className="text-gray-600">office@exis.at</p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Telefon</h4>
                    <p className="text-gray-600">+43 681 84662737</p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Adresse</h4>
                    <p className="text-gray-600">
                      exis Solutions e.U.<br />
                      Hofmark 156<br />
                      5622 Goldegg<br />
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
              </Card3D>
              
              <Card3D intensity={0.8} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Standort</h3>
                <div className="overflow-hidden rounded-xl">
                  <GoogleMaps />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
