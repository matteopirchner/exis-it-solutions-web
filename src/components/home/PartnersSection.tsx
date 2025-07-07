
const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#8B1538] to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ein kleiner Auszug unserer Kunden
          </h2>
          <p className="text-lg mb-12 opacity-90">
            Vertrauen Sie auf bewährte Partnerschaften für umfassende Lösungen
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skullracing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="flex-shrink-0">
                  <a 
                    href="https://skullracing.at" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-3">
                      <img 
                        src="/lovable-uploads/0e4ad833-6d76-4491-85e9-23503238ab08.png" 
                        alt="Skullracing Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a 
                    href="https://skullracing.at" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">Skullracing</h3>
                  </a>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bereitgestellte Services:</h4>
                    <p className="text-white/90">Mailserver, Domain Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Oala Labs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="flex-shrink-0">
                  <a 
                    href="https://www.oalalabs.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-3">
                      <img 
                        src="/lovable-uploads/daa74795-a2a5-4daa-9e46-75bb21f3e69b.png" 
                        alt="Oala Labs Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.oalalabs.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">Oala Labs</h3>
                  </a>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bereitgestellte Services:</h4>
                    <p className="text-white/90">Hosting-Partner für innovative Webprojekte und digitale Lösungen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
