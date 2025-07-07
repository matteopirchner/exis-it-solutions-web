
import Card3D from "@/components/effects/Card3D";
import ParallaxContainer from "@/components/effects/ParallaxContainer";
import FloatingElements from "@/components/effects/FloatingElements";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#8B1538] to-red-600 text-white relative overflow-hidden">
      {/* Background Effects */}
      <FloatingElements count={6} className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ParallaxContainer speed={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 transform-gpu hover:scale-105 transition-transform duration-300">
              Ein kleiner Auszug unserer Kunden
            </h2>
            <p className="text-lg mb-12 opacity-90">
              Vertrauen Sie auf bewährte Partnerschaften für umfassende Lösungen
            </p>
          </ParallaxContainer>
          
          <Card3D intensity={1.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <a 
                  href="https://skullracing.at" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300 transform-gpu">Skullracing.at</h3>
                </a>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bereitgestellte Services:</h4>
                    <p className="text-white/90">Mailserver, Domain Management</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://skullracing.at" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:scale-110 hover:rotate-3 transition-all duration-300 transform-gpu"
                >
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg hover:shadow-xl">
                    <img 
                      src="/lovable-uploads/0e4ad833-6d76-4491-85e9-23503238ab08.png" 
                      alt="Skullracing Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
