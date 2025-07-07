
import { useState } from "react";
import { Button } from "@/components/ui/button";

const GoogleMaps = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const loadMap = () => {
    setConsentGiven(true);
    setMapLoaded(true);
  };

  if (!consentGiven) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Google Maps laden</h3>
          <p className="text-sm text-gray-600 mb-4">
            Um die Karte anzuzeigen, müssen wir Daten an Google übertragen. 
            Dabei können personenbezogene Daten verarbeitet werden.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-[#8B1538] hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </div>
        <Button 
          onClick={loadMap}
          className="bg-[#8B1538] hover:bg-[#8B1538]/90"
        >
          Karte laden
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/place/Hofmark+156,+5622+Goldegg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="exis Solutions Standort"
      />
    </div>
  );
};

export default GoogleMaps;
