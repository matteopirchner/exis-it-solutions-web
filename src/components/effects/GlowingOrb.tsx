
import { useEffect, useRef } from 'react';

interface GlowingOrbProps {
  size?: number;
  color?: string;
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GlowingOrb = ({ 
  size = 100, 
  color = '#8B1538', 
  intensity = 0.6,
  className = "",
  style = {}
}: GlowingOrbProps) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const animate = () => {
      const time = Date.now() * 0.002;
      const scale = 1 + Math.sin(time) * 0.1;
      const opacity = intensity + Math.sin(time * 1.5) * 0.2;
      
      orb.style.transform = `scale(${scale})`;
      orb.style.opacity = opacity.toString();
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div
      ref={orbRef}
      className={`absolute rounded-full blur-xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: 'blur(20px)',
        ...style
      }}
    />
  );
};

export default GlowingOrb;
