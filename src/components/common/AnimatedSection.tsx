import React, { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({
    elementRef: elementRef as unknown as React.RefObject<HTMLElement>, // Doble type assertion
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};





export default AnimatedSection;
