import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { navItems } from '../data/mockData';
import styles from '../styles/Header.module.css';
import ThemeToggle from './common/ThemeToggle';
import type { NavItem } from '../types/index';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    if (window.innerWidth < 768 && item.subItems?.length) {
      e.preventDefault();
      setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
    }
  };

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isActive = activeSubmenu === item.label;
    
    return (
      <motion.li
        className={`${styles.navItem} ${hasSubItems ? styles.hasSubmenu : ''} ${isActive ? styles.active : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href={item.href}
          onClick={(e) => handleClick(e, item)}
        >
          {item.label}
          {hasSubItems && (
            <svg
              className={`${styles.arrow} ${isActive ? styles.active : ''}`}
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 10l5 5 5-5" />
            </svg>
          )}
        </a>

        <AnimatePresence>
          {hasSubItems && (
            <motion.ul 
              className={styles.submenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.subItems?.map((subItem) => (
                <li key={subItem.href}>
                  <a href={subItem.href}>
                    {subItem.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.li>
    );
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
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
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
