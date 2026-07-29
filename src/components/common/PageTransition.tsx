import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Elegant, seamless scroll-to-top execution when the new page component mounts
    const lenis = (window as any).lenis;
    if (lenis) {
      // Direct instant scroll to top on the Lenis smooth scroll manager
      lenis.scrollTo(0, { immediate: true });
      // Schedule a precise calculation update once the browser paints the new DOM
      setTimeout(() => {
        lenis.resize();
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.215, 0.61, 0.355, 1], // Luxurious cubic deceleration curve
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
