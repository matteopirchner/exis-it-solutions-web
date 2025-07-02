
import { useState, useEffect } from 'react';

const AnimatedServiceText = () => {
  const services = [
    "Firmennetzwerke jeder Größe",
    "Gast Netz mit Voucher Funktion", 
    "Netzwerksegmentierung mittels VLAN's",
    "Schnelles, flächendeckendes WLAN",
    "Nextcloud Hosting",
    "Schnelles Webhosting",
    "Sichere Backupsysteme",
    "Spam freie Email-Server",
    "24/7 IT-Support",
    "Cloud-Lösungen",
    "Server-Management",
    "IT-Sicherheit",
    "Professionelle Datensicherung",
    "VPN-Lösungen",
    "Microsoft 365 Integration",
    "Domain-Verwaltung",
    "SSL-Zertifikate",
    "Monitoring & Überwachung",
    "Hardware-Beschaffung",
    "Software-Installation",
    "Netzwerk-Optimierung",
    "IT-Consulting"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in">
      <p 
        className={`text-2xl md:text-3xl font-light mb-2 text-[#8B1538] transition-all duration-500 ease-in-out transform ${
          isVisible && !isTransitioning 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-95'
        }`}
      >
        {services[currentIndex]}
      </p>
    </div>
  );
};

export default AnimatedServiceText;
