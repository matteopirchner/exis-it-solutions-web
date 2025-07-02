
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
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown Timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          return 5; // Reset für nächsten Begriff
        }
        return prev - 1;
      });
    }, 1000);

    // Text wechseln alle 5 Sekunden
    const textInterval = setInterval(() => {
      setIsTransitioning(true);
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
        setCountdown(5); // Reset countdown
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(textInterval);
    };
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in relative">
      <div className="relative inline-block">
        <div className="flex items-center gap-4">
          <p 
            className={`text-2xl md:text-3xl font-light text-[#8B1538] transition-all duration-500 ease-in-out transform ${
              isVisible && !isTransitioning 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-2 scale-95'
            }`}
          >
            {services[currentIndex]}
          </p>
          
          {/* Countdown Indikator */}
          <div className="flex items-center justify-center min-w-[24px] h-6 rounded-full bg-[#8B1538] text-white text-sm font-medium">
            {countdown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
