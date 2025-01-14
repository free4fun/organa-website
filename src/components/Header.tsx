import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { navItems } from '../data/mockData';
import styles from '../styles/Header.module.css';
import ThemeToggle from './common/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const headerVariants = {
    top: { 
      backgroundColor: 'var(--navbar-bg-transparent)', 
      boxShadow: 'none' 
    },
    scrolled: { 
      backgroundColor: 'var(--navbar-bg)', 
      boxShadow: 'var(--navbar-shadow)' 
    },
  };

  return (
    <motion.header
      className={styles.header}
      initial="top"
      animate={scrollPosition > 50 ? 'scrolled' : 'top'}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">organa.global</a>
        </motion.div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerControls}>
          <ThemeToggle />
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
