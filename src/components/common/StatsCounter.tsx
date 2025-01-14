import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import useCounter from '../../hooks/useCounter';
import styles from '../../styles/About.module.css';

interface StatCounterProps {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  icon
}) => {
  const [count, animate] = useCounter(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });
  
  useEffect(() => {
    if (isInView) {
      const cleanup = animate(true);
      return () => cleanup?.();
    }
  }, [isInView, animate]);
  
  return (
    <motion.div 
      ref={ref}
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.statIcon}>
        {icon}
      </div>
      <div className={styles.statNumber}>
        {count}+
      </div>
      <div className={styles.statLabel}>
        {label}
      </div>
    </motion.div>
  );
};

export default StatCounter;
