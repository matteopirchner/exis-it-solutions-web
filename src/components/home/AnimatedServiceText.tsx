
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
    }, 6000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in relative">
      <div className="relative">
        <p 
          className={`text-2xl md:text-3xl font-light mb-2 text-[#8B1538] transition-all duration-500 ease-in-out transform ${
            isVisible && !isTransitioning 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95'
          }`}
        >
          {services[currentIndex]}
        </p>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          <div className="flex space-x-1">
            {services.slice(0, 5).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === (currentIndex % 5) 
                    ? 'bg-[#8B1538] scale-125' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
            <div className="text-gray-400 text-sm mx-2">...</div>
            <div className="text-[#8B1538] text-sm font-medium">
              {currentIndex + 1}/{services.length}
            </div>
          </div>
        </div>

        {/* Animated Arrow Indicator */}
        <div className="flex justify-center mt-2">
          <ChevronDown 
            className={`w-5 h-5 text-[#8B1538] transition-all duration-1000 ${
              isTransitioning ? 'animate-bounce' : 'animate-pulse'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
