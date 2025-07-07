
import Card3D from "@/components/effects/Card3D";
import ParallaxContainer from "@/components/effects/ParallaxContainer";
import GlowingOrb from "@/components/effects/GlowingOrb";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Floating Background Elements */}
      <GlowingOrb 
        size={300} 
        color="#8B1538" 
        intensity={0.1}
        className="top-0 right-0 animate-float"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ParallaxContainer speed={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300 transform-gpu">
                Über exis Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Seit über 5 Jahren sind wir Ihr verlässlicher Partner für alle IT-Angelegenheiten. Mit modernsten 
                Technologien und persönlichem Service sorgen wir dafür, dass Ihre IT-Infrastruktur reibungslos funktioniert.
                Als junges Team aus dem Pongau in Salzburg bringen wir frische Ideen und innovative Lösungen zu Ihnen.
              </p>
            </div>
          </ParallaxContainer>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Card3D intensity={0.8} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B1538]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/ef49115e-c47a-4e3d-bd71-221f60451dae.png" 
                  alt="Server-Infrastruktur" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-[#8B1538]/20 transition-all duration-500"></div>
              </div>
            </Card3D>
            
            <div className="space-y-8">
              <ParallaxContainer speed={0.05}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
                  Warum exis Solutions?
                </h3>
              </ParallaxContainer>
              
              <div className="space-y-6">
                {[
                  "Über 150 zufriedene Kunden vertrauen uns",
                  "24/7 Support und garantierte Reaktionszeiten", 
                  "Modernste Hosting-Infrastruktur mit 99.9% Uptime",
                  "Transparente Preise und faire Konditionen",
                  "Persönlicher Ansprechpartner für alle Anliegen",
                  "Junges, dynamisches Team aus Pongau/Salzburg"
                ].map((item, index) => (
                  <Card3D key={index} intensity={0.5} className="group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="w-4 h-4 bg-[#8B1538] rounded-full mr-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#8B1538]/50"></div>
                      <p className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
