
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextIndex = (currentIndex + 1) % services.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in relative h-20 overflow-hidden">
      {/* Next service preview - positioned above */}
      <p 
        className={`absolute text-2xl md:text-3xl font-light text-[#8B1538] text-center w-full transition-all duration-600 ease-in-out transform ${
          isTransitioning 
            ? 'translate-y-12 opacity-100' 
            : '-translate-y-12 opacity-70'
        }`}
      >
        {services[nextIndex]}
      </p>
      
      {/* Current service - main display */}
      <p 
        className={`absolute text-2xl md:text-3xl font-light text-[#8B1538] text-center w-full transition-all duration-600 ease-in-out transform ${
          isTransitioning 
            ? 'translate-y-12 opacity-0' 
            : 'translate-y-0 opacity-100'
        }`}
      >
        {services[currentIndex]}
      </p>
    </div>
  );
};

export default AnimatedServiceText;
