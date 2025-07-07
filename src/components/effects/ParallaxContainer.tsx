
import { useRef, useEffect } from 'react';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxContainer = ({ children, speed = 0.5, className = "" }: ParallaxContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        const yPos = -(scrolled * speed);
        containerRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
