
import { useParallax } from '@/hooks/useParallax';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxBackground = ({ children, speed = 0.5, className = '' }: ParallaxBackgroundProps) => {
  const offset = useParallax(speed);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxBackground;
