
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsAnimating(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getVisibleServices = () => {
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;
    const afterNextIndex = (currentIndex + 2) % services.length;
    
    return [
      { text: services[prevIndex], position: 'prev' },
      { text: services[currentIndex], position: 'current' },
      { text: services[nextIndex], position: 'next' },
      { text: services[afterNextIndex], position: 'after' }
    ];
  };

  return (
    <div className="mb-8 animate-fade-in relative h-20 overflow-hidden">
      <div className={`transition-transform duration-800 ease-in-out ${isAnimating ? '-translate-y-12' : 'translate-y-0'}`}>
        {getVisibleServices().map((service, index) => (
          <p 
            key={`${service.text}-${index}`}
            className={`text-2xl md:text-3xl font-light text-[#8B1538] text-center w-full h-12 flex items-center justify-center transition-opacity duration-800 ${
              service.position === 'current' 
                ? 'opacity-100' 
                : service.position === 'next'
                ? 'opacity-60'
                : 'opacity-30'
            }`}
            style={{
              transform: `translateY(${
                service.position === 'prev' ? '-48px' :
                service.position === 'current' ? '0px' :
                service.position === 'next' ? '48px' :
                '96px'
              })`
            }}
          >
            {service.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AnimatedServiceText;
