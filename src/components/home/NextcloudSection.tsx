
import { Button } from "@/components/ui/button";
import { Users, Database, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Card3D from "@/components/effects/Card3D";
import ParallaxContainer from "@/components/effects/ParallaxContainer";
import GlowingOrb from "@/components/effects/GlowingOrb";

interface NextcloudSectionProps {
  smoothScroll: (elementId: string) => void;
}

const NextcloudSection = ({ smoothScroll }: NextcloudSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb 
        size={300} 
        color="#3B82F6" 
        intensity={0.1}
        className="top-1/3 right-0 animate-float"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ParallaxContainer speed={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
                Nextcloud - Ihre Microsoft Teams Alternative
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Werden Sie unabhängig von Microsoft! Unsere Nextcloud-Lösungen bieten alles, 
                was Sie für moderne Zusammenarbeit brauchen - und das auf Ihren eigenen Servern.
              </p>
            </div>
          </ParallaxContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Team-Kollaboration",
                description: "Chat, Video-Calls, Dokumentenbearbeitung - alles in einem Tool"
              },
              {
                icon: <Database className="w-12 h-12 text-green-600" />,
                title: "Sicherer Dateispeicher",
                description: "OneDrive-Ersatz mit vollständiger Kontrolle über Ihre Daten"
              },
              {
                icon: <Mail className="w-12 h-12 text-purple-600" />,
                title: "Integrierte E-Mail",
                description: "Komplette E-Mail-Lösung mit Kalender und Kontakten"
              }
            ].map((feature, index) => (
              <Card3D key={index} intensity={1} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="transform-gpu hover:scale-110 hover:rotate-6 transition-all duration-300 mx-auto mb-4 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card3D>
            ))}
          </div>

          <div className="text-center">
            <Card3D intensity={0.5}>
              <Link to="/services/cloud-loesungen">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/25"
                >
                  Mehr erfahren
                </Button>
              </Link>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextcloudSection;
