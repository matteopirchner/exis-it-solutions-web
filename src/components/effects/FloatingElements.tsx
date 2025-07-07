
import { useEffect, useRef } from 'react';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 6, className = "" }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.children;
    
    const animateElements = () => {
      Array.from(elements).forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const time = Date.now() * 0.001;
        const x = Math.sin(time + index * 2) * 20;
        const y = Math.cos(time + index * 1.5) * 15;
        const rotation = Math.sin(time + index) * 10;
        
        htmlElement.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      });
    };

    const interval = setInterval(animateElements, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#8B1538]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
