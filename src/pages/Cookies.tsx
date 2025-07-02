import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "@/components/home/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      const parsed = JSON.parse(storedConsent);
      setCookieSettings({
        necessary: true,
        analytics: parsed.analytics || false
      });
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...cookieSettings,
      timestamp: Date.now()
    }));
    
    // Show only the custom dialog
    setShowSuccessDialog(true);
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
              <Link to="/">
                <Button variant="ghost" className="text-gray-700 hover:text-[#8B1538] transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Cookie className="w-16 h-16 text-[#8B1538] mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cookie-Richtlinie
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Verstehen Sie, wie wir Cookies verwenden, um Ihr Nutzererlebnis zu verbessern
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Settings className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Funktionalität</h3>
                        <p className="text-sm text-gray-600 mt-2">Cookies ermöglichen die optimale Funktion unserer Website</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <Shield className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Sicherheit</h3>
                        <p className="text-sm text-gray-600 mt-2">Sichere Speicherung und Verarbeitung Ihrer Präferenzen</p>
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-[#8B1538]/10 to-[#8B1538]/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                        <CheckCircle className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
                        <h3 className="font-semibold text-gray-900">Kontrolle</h3>
                        <p className="text-sm text-gray-600 mt-2">Sie haben jederzeit die volle Kontrolle über Ihre Cookie-Einstellungen</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 border-[#8B1538] hover:shadow-lg transition-shadow duration-300">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Was sind Cookies?</h2>
                      <p className="mb-4">
                        Unsere Website verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Welche Cookies verwenden wir?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                            <p className="text-sm text-gray-600">
                              Zur Sicherstellung der Website-Funktionalität
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Settings className="w-5 h-5 text-[#8B1538] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                            <p className="text-sm text-gray-600">
                              Google Analytics zur Verbesserung unseres Angebots
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Zustimmung</h3>
                      <p className="mb-4">
                        Bei Ihrem ersten Besuch fragen wir Sie über ein Cookie-Banner nach Ihrer Zustimmung. Sie können Ihre Einstellungen jederzeit ändern.
                      </p>
                    </div>

                    {/* Cookie Settings Section */}
                    <div className="bg-gradient-to-r from-[#8B1538]/5 to-transparent rounded-2xl p-6 border border-[#8B1538]/20">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Cookie-Einstellungen verwalten</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Notwendige Cookies</p>
                            <p className="text-sm text-gray-600">
                              Erforderlich für die Grundfunktionen der Website
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={cookieSettings.necessary}
                            disabled
                            className="w-5 h-5"
                          />
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Analyse-Cookies</p>
                            <p className="text-sm text-gray-600">
                              Helfen uns, die Website zu verbessern
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={cookieSettings.analytics}
                            onChange={(e) => setCookieSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                            className="w-5 h-5"
                          />
                        </div>
                      </div>

                      <Button onClick={saveSettings} className="bg-[#8B1538] hover:bg-[#8B1538]/90">
                        Einstellungen speichern
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#8B1538]/5 to-transparent rounded-2xl p-6 border border-[#8B1538]/20">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Rechtsgrundlage</h3>
                      <p className="mb-4">
                        Die Speicherung von Cookies erfolgt auf Grundlage von Art 6 Abs 1 lit a DSGVO, sofern Sie eingewilligt haben, ansonsten auf Grundlage unseres berechtigten Interesses (Art 6 Abs 1 lit f DSGVO).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Einstellungen gespeichert
            </DialogTitle>
            <DialogDescription>
              Ihre Cookie-Einstellungen wurden erfolgreich aktualisiert und sind ab sofort aktiv.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowSuccessDialog(false)} className="bg-[#8B1538] hover:bg-[#8B1538]/90">
              OK
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Cookies;
