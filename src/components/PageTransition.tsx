
import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  onAnimationComplete?: () => void;
}

const PageTransition = ({ children, onAnimationComplete }: PageTransitionProps) => {
  useEffect(() => {
    // Verhindere Scrollen während der Transition
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAnimationComplete = () => {
    document.body.style.overflow = 'unset';
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
      onAnimationComplete={handleAnimationComplete}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
