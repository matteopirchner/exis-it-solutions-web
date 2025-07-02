
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

  // Kürzere Texte für mobile Geräte
  const mobileServices = [
    "Netzwerklösungen",
    "WLAN mit Voucher-System", 
    "VLAN-Segmentierung",
    "WLAN-Infrastruktur",
    "Nextcloud Services",
    "Webhosting-Lösungen",
    "Backup-Systeme",
    "Email-Server",
    "24/7 IT-Support",
    "Cloud-Services",
    "Server-Solutions",
    "IT-Security",
    "VPN-Infrastrukturen",
    "Microsoft 365",
    "Domain-Management",
    "SSL-Zertifikate",
    "System-Monitoring",
    "Hardware Procurement",
    "Software-Deployment",
    "Performance Optimization",
    "IT-Consulting"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    // Längere Anzeigezeit für mobile Geräte
    const animationDuration = isMobile ? 5000 : 4000; // 5s für mobile, 4s für desktop
    const progressSteps = animationDuration / 16; // 60Hz

    const startProgressTimer = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / progressSteps);
          
          if (newProgress >= 100) {
            // Längere Pause bei 100% für mobile Geräte
            setTimeout(() => {
              setIsTransitioning(true);
              setIsVisible(false);
              
              setTimeout(() => {
                const serviceArray = isMobile ? mobileServices : services;
                setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceArray.length);
                
                setTimeout(() => {
                  setProgress(0);
                  setIsVisible(true);
                  
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 300); // Längere Übergangszeit
                }, 300);
              }, 300);
            }, 500); // Längere Pause bei 100%
            
            return 100;
          }
          
          return newProgress;
        });
      }, 16);
    };

    if (isVisible && !isTransitioning) {
      startProgressTimer();
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [services.length, mobileServices.length, isVisible, isTransitioning, isMobile]);

  const currentServices = isMobile ? mobileServices : services;

  return (
    <div className="mb-8 animate-fade-in relative">
      <div className="relative text-center">
        <p 
          className={`text-xl md:text-2xl lg:text-3xl font-light text-[#8B1538] mb-3 transition-all duration-700 ease-in-out transform px-4 ${
            isVisible && !isTransitioning 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-3 scale-95'
          }`}
          style={{
            minHeight: isMobile ? '2rem' : '2.5rem', // Feste Höhe um Layout-Shifts zu vermeiden
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {currentServices[currentIndex]}
        </p>
        
        {/* Responsiver Fortschrittsbalken */}
        <div className={`${isMobile ? 'w-64' : 'w-80'} mx-auto`}>
          <Progress 
            value={progress} 
            className={`h-1 [&>div]:bg-[#8B1538] [&>div]:transition-all [&>div]:duration-100 [&>div]:ease-out transition-all duration-700 ease-in-out ${
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
