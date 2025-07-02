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
  const [linePhase, setLinePhase] = useState<'red-filling' | 'white-overwriting'>('red-filling');

  useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Rote Linie überschreibt weiße Linie
      setLinePhase('red-filling');
      
      setTimeout(() => {
        // Phase 2: Text wechseln
        setIsTransitioning(true);
        setIsVisible(false);
        
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
          setIsVisible(true);
          
          setTimeout(() => {
            setIsTransitioning(false);
            // Phase 3: Weiße Linie überschreibt rote Linie
            setLinePhase('white-overwriting');
          }, 300);
        }, 300);
      }, 4000); // Rote Linie füllt 4 Sekunden
    }, 6000);

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
        
        {/* Zentrierte Linie mit fester Länge */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5">
          {/* Weiße Basis-Linie (immer sichtbar) */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
          
          {/* Rote Linie die von links nach rechts überschreibt */}
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-[#8B1538] transition-all ease-linear ${
              linePhase === 'red-filling'
                ? 'w-full duration-[4000ms]' 
                : 'w-0 duration-300'
            }`}
          />
          
          {/* Weiße Linie die von links nach rechts die rote überschreibt */}
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ease-linear ${
              linePhase === 'white-overwriting' 
                ? 'w-full duration-[1500ms]' 
                : 'w-0 duration-300'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
