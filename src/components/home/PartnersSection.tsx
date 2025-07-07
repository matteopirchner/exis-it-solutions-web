
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
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-4">Skullracing.at</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bereitgestellte Services:</h4>
                    <p className="text-white/90">Mailserver</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Unternehmensfokus:</h4>
                    <p className="text-white/90">
                      Spezialisiert auf maßgeschneiderte CNC-Bearbeitung und professionelle Pulverbeschichtung
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src="/lovable-uploads/cfa8e99f-b09f-42a4-8d66-1dd218b41108.png" 
                    alt="Skullracing Logo" 
                    className="w-full h-full object-contain"
                  />
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
