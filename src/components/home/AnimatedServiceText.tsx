
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
  const [linePhase, setLinePhase] = useState<'filling' | 'overwriting'>('filling');

  useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Line fills up completely (red)
      setLinePhase('filling');
      
      setTimeout(() => {
        // Phase 2: White line overwrites the red line
        setLinePhase('overwriting');
        
        setTimeout(() => {
          // Phase 3: Text transition
          setIsTransitioning(true);
          setIsVisible(false);
          
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            setIsVisible(true);
            
            setTimeout(() => {
              setIsTransitioning(false);
              setLinePhase('filling'); // Reset for next cycle
            }, 500);
          }, 300);
        }, 1000); // White line takes 1 second to overwrite
      }, 4500); // Red line fills for 4.5 seconds
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
        
        {/* Animated underline with red and white phases */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
          {/* Red line that fills up */}
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-[#8B1538] transition-all ease-linear ${
              linePhase === 'filling' && !isTransitioning
                ? 'w-full duration-[4500ms]' 
                : 'w-0 duration-300'
            }`}
          />
          
          {/* White line that overwrites */}
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-1000 ease-linear ${
              linePhase === 'overwriting' 
                ? 'w-full' 
                : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
