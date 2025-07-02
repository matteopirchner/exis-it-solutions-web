
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealWrapperProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'zoomIn';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollRevealWrapper = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 600,
  className = ''
}: ScrollRevealWrapperProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = `duration-[${duration}ms]`;
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
        case 'fadeIn':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0`;
        case 'slideLeft':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 -translate-x-8`;
        case 'slideRight':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-x-8`;
        case 'zoomIn':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-95`;
        default:
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
      }
    } else {
      return `${baseClass} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
