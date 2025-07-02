
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
    "IT-Sicherheit"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="mb-8 animate-fade-in">
      <p 
        className={`text-2xl md:text-3xl font-light mb-2 text-[#8B1538] transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
        }`}
        style={{
          animationDuration: '3s',
          animationTimingFunction: 'ease-in-out'
        }}
      >
        {services[currentIndex]}
      </p>
    </div>
  );
};

export default AnimatedServiceText;
