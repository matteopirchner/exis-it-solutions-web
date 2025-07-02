
import { Button } from "@/components/ui/button";
import { Users, Database, Mail } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import ParallaxBackground from "@/components/ParallaxBackground";

interface NextcloudSectionProps {
  smoothScroll: (elementId: string) => void;
}

const NextcloudSection = ({ smoothScroll }: NextcloudSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <ParallaxBackground speed={0.1} className="absolute inset-0">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100"></div>
      </ParallaxBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollRevealWrapper animation="fadeUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nextcloud - Ihre Microsoft Teams Alternative
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Werden Sie unabhängig von Microsoft! Unsere Nextcloud-Lösungen bieten alles, 
                was Sie für moderne Zusammenarbeit brauchen - und das auf Ihren eigenen Servern.
              </p>
            </div>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
                title: "Team-Kollaboration",
                description: "Chat, Video-Calls, Dokumentenbearbeitung - alles in einem Tool",
                delay: 200
              },
              {
                icon: <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />,
                title: "Sicherer Dateispeicher",
                description: "OneDrive-Ersatz mit vollständiger Kontrolle über Ihre Daten",
                delay: 300
              },
              {
                icon: <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />,
                title: "Integrierte E-Mail",
                description: "Komplette E-Mail-Lösung mit Kalender und Kontakten",
                delay: 400
              }
            ].map((feature, index) => (
              <ScrollRevealWrapper key={index} animation="zoomIn" delay={feature.delay}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>

          <ScrollRevealWrapper animation="fadeUp" delay={600}>
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={() => smoothScroll('contact')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                Nextcloud-Beratung anfragen
              </Button>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default NextcloudSection;
