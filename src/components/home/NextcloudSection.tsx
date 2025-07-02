
import { Button } from "@/components/ui/button";
import { Users, Database, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface NextcloudSectionProps {
  smoothScroll: (elementId: string) => void;
}

const NextcloudSection = ({ smoothScroll }: NextcloudSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nextcloud - Ihre Microsoft Teams Alternative
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Werden Sie unabhängig von Microsoft! Unsere Nextcloud-Lösungen bieten alles, 
              was Sie für moderne Zusammenarbeit brauchen - und das auf Ihren eigenen Servern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team-Kollaboration</h3>
              <p className="text-gray-600">Chat, Video-Calls, Dokumentenbearbeitung - alles in einem Tool</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sicherer Dateispeicher</h3>
              <p className="text-gray-600">OneDrive-Ersatz mit vollständiger Kontrolle über Ihre Daten</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrierte E-Mail</h3>
              <p className="text-gray-600">Komplette E-Mail-Lösung mit Kalender und Kontakten</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services/cloud-loesungen">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextcloudSection;
