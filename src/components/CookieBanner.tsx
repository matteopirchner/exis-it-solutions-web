
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      timestamp: Date.now()
    }));
    setShowBanner(false);
    // Initialize Google Analytics here if needed
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const saveSettings = (settings: { necessary: boolean; analytics: boolean }) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...settings,
      timestamp: Date.now()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-2">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
              </p>
              <p className="text-xs text-gray-600">
                Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz" className="text-[#8B1538] hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                und{" "}
                <Link to="/cookies" className="text-[#8B1538] hover:underline">
                  Cookie-Richtlinie
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                Einstellungen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={acceptNecessary}
              >
                Nur Notwendige
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-[#8B1538] hover:bg-[#8B1538]/90"
              >
                Alle Akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Cookie-Einstellungen</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <p className="font-medium">Notwendige Cookies</p>
                  <p className="text-sm text-gray-600">
                    Erforderlich für die Grundfunktionen der Website
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <p className="font-medium">Analyse-Cookies</p>
                  <p className="text-sm text-gray-600">
                    Helfen uns, die Website zu verbessern
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="analytics"
                  className="w-4 h-4"
                />
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
                className="flex-1"
              >
                Abbrechen
              </Button>
              <Button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false;
                  saveSettings({ necessary: true, analytics });
                }}
                className="flex-1 bg-[#8B1538] hover:bg-[#8B1538]/90"
              >
                Speichern
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
