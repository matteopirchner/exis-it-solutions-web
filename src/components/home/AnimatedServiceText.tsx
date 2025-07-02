
import { useState, useEffect } from 'react';

const AnimatedServiceText = () => {
  const services = [
    "Enterprise Netzwerklösungen",
    "Managed WLAN mit Voucher-System", 
    "Professionelle VLAN-Segmentierung",
    "Hochperformante WLAN-Infrastruktur",
    "Managed Nextcloud Services",
    "Premium Webhosting-Lösungen",
    "Enterprise Backup-Systeme",
    "Sichere Email-Server-Infrastruktur",
    "24/7 Premium IT-Support",
    "Professionelle Cloud-Services",
    "Managed Server-Solutions",
    "IT-Security & Compliance",
    "Sichere VPN-Infrastrukturen",
    "Microsoft 365 Enterprise Integration",
    "Professional Domain-Management",
    "Enterprise SSL-Zertifikate",
    "Proaktives System-Monitoring",
    "IT-Hardware Procurement",
    "Professional Software-Deployment",
    "Network Performance Optimization",
    "Strategic IT-Consulting"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [linePhase, setLinePhase] = useState<'red-loading' | 'white-loading'>('red-loading');
  const [key, setKey] = useState(0); // Key für Animation-Reset

  useEffect(() => {
    const interval = setInterval(() => {
      // Text wechseln
      setIsTransitioning(true);
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
        
        setTimeout(() => {
          setIsTransitioning(false);
          // Farbe für nächsten Ladebalken wechseln
          setLinePhase(prevPhase => 
            prevPhase === 'red-loading' ? 'white-loading' : 'red-loading'
          );
          // Key erhöhen um Animation neu zu starten
          setKey(prev => prev + 1);
        }, 300);
      }, 300);
    }, 5000); // Alle 5 Sekunden wechseln

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in relative">
      <div className="relative inline-block">
        <p 
          className={`text-2xl md:text-3xl font-light mb-2 text-[#8B1538] transition-all duration-500 ease-in-out transform ${
            isVisible && !isTransitioning 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95'
          }`}
        >
          {services[currentIndex]}
        </p>
        
        {/* Zentrierte Linie mit fester Länge als Ladebalken - jetzt länger */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-0.5">
          {/* Basis-Linie */}
          <div className={`absolute bottom-0 left-0 w-full h-0.5 ${
            linePhase === 'red-loading' ? 'bg-white' : 'bg-[#8B1538]'
          }`} />
          
          {/* Ladebalken der sich über 5 Sekunden füllt */}
          <div 
            key={key} // Key zum Reset der Animation
            className={`absolute bottom-0 left-0 h-0.5 ${
              linePhase === 'red-loading' ? 'bg-[#8B1538]' : 'bg-white'
            } ${
              !isTransitioning 
                ? 'w-full duration-[5000ms] ease-linear' 
                : 'w-0 duration-300'
            } transition-all`}
            style={{
              width: !isTransitioning ? '100%' : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
