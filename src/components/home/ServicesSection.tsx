
import { Network, Headphones, Globe, Shield, Server, Settings, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-300">
              Komplette IT-Services aus einer Hand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Netzwerklösungen",
                description: "Planung, Installation und Wartung von Netzwerk-Infrastrukturen für optimale Konnektivität.",
                image: "/images/network-solutions.png",
                icon: <Network className="w-8 h-8" />,
                link: "/services/netzwerkloesungen"
              },
              {
                title: "IT-Support",
                description: "Schnelle Hilfe bei IT-Problemen - vor Ort oder remote. Ihr zuverlässiger IT-Partner.",
                image: "/images/it-support.png",
                icon: <Headphones className="w-8 h-8" />,
                link: "/services/it-support"
              },
              {
                title: "Hosting", 
                description: "Professionelles Website-Hosting, Nextcloud-Instanzen als Teams/OneDrive-Ersatz und Mailserver-Lösungen.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
                icon: <Globe className="w-8 h-8" />,
                link: "/services/cloud-loesungen"
              },
              {
                title: "Sicherheitslösungen",
                description: "Umfassende IT-Security-Konzepte zum Schutz Ihrer Daten und Systeme.",
                image: "/images/security-solutions.png",
                icon: <Shield className="w-8 h-8" />,
                link: "/services/sicherheitsloesungen"
              },
              {
                title: "Server-Management",
                description: "Professionelle Verwaltung und Wartung Ihrer Server-Infrastruktur.",
                image: "/images/server-management.png",
                icon: <Server className="w-8 h-8" />,
                link: "/services/server-management"
              },
              {
                title: "IT-Beratung",
                description: "Strategische Beratung für Ihre IT-Landschaft und digitale Transformation.",
                image: "/images/it-consulting.png",
                icon: <Settings className="w-8 h-8" />,
                link: "/services/it-beratung"
              },
              {
                title: "Individuelle Lösungen",
                description: "Maßgeschneiderte IT-Lösungen, Custom PC-Bau und spezialisierte Systeme für Ihre individuellen Anforderungen.",
                image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&h=600&fit=crop",
                icon: <Wrench className="w-8 h-8" />,
                link: "/services/individuelle-loesungen"
              }
            ].map((service, index) => (
              <Link key={index} to={service.link} className="group relative block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B1538] to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 h-full">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 text-[#8B1538] bg-white/10 backdrop-blur-sm rounded-full p-3 mb-6">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#8B1538] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
