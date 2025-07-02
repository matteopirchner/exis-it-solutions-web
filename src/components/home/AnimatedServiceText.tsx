
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    // Funktion zum Starten des Progress-Timers
    const startProgressTimer = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 100;
          }
          return prev + (100 / 40); // 4 Sekunden bis 100%
        });
      }, 100);
    };

    // Progress-Timer nur starten wenn Text sichtbar ist
    if (isVisible && !isTransitioning) {
      startProgressTimer();
    }

    // Text wechseln alle 5 Sekunden
    const textInterval = setInterval(() => {
      // Text und Progress gleichzeitig ausblenden nach 4.5 Sekunden
      setTimeout(() => {
        setIsTransitioning(true);
        setIsVisible(false);
        
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
          setProgress(0); // Reset progress während es unsichtbar ist
          setIsVisible(true);
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 400);
        }, 400);
      }, 4500);
    }, 5000);

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      clearInterval(textInterval);
    };
  }, [services.length, isVisible, isTransitioning]);

  return (
    <div className="mb-8 animate-fade-in relative">
      <div className="relative text-center">
        <p 
          className={`text-2xl md:text-3xl font-light text-[#8B1538] mb-3 transition-all duration-700 ease-in-out transform ${
            isVisible && !isTransitioning 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95'
          }`}
        >
          {services[currentIndex]}
        </p>
        
        {/* Zentrierter roter Fortschrittsbalken - komplett ausgeblendet während Transition */}
        <div className="w-80 mx-auto">
          <Progress 
            value={progress} 
            className={`h-1 [&>div]:bg-[#8B1538] transition-all duration-700 ease-in-out ${
              isVisible && !isTransitioning 
                ? 'opacity-100 scale-100 bg-gray-200' 
                : 'opacity-0 scale-95 bg-transparent'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceText;
