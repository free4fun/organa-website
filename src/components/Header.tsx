import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { navItems } from '../data/mockData';
import styles from '../styles/Header.module.css';
import LanguageSwitcher from './common/LanguageSwitcher';
import ThemeToggle from './common/ThemeToggle';
import type { NavItem } from '../types/index';

const MOBILE_BREAKPOINT = 768;
const SCROLL_THRESHOLD = 50;

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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollPosition = useScrollPosition();

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile(mobile);
    if (!mobile) {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleSubmenuClick = (e: React.MouseEvent, item: NavItem) => {
    if (isMobile && item.subItems && item.subItems.length > 0) {
      e.preventDefault();
      e.stopPropagation();
      setActiveSubmenu(prev => prev === item.label ? null : item.label);
    }
  };

  const isItemActive = (item: NavItem): boolean => {
    const itemPath = item.href.replace('#', '');
    return activeSection === itemPath || 
           (item.subItems?.some(subItem => subItem.href.replace('#', '') === activeSection) ?? false);
  };

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isActive = activeSubmenu === item.label;
    const isCurrentActive = isItemActive(item);
    
    return (
      <li className={`${styles.navItem} 
                     ${hasSubItems ? styles.hasSubmenu : ''} 
                     ${isActive ? styles.active : ''} 
                     ${isCurrentActive ? styles.currentActive : ''}`}>
        <a
          href={item.href}
          onClick={(e) => handleSubmenuClick(e, item)}
          className={`${hasSubItems ? styles.hasDropdown : ''} 
                     ${isCurrentActive ? styles.currentActive : ''}`}
        >
          {item.label}
          {hasSubItems && (
            <svg
              className={`${styles.arrow} ${isActive ? styles.active : ''}`}
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                d="M7 10l5 5 5-5"
              />
            </svg>
          )}
        </a>
        
        {hasSubItems && item.subItems && (
          isMobile ? (
            <div className={`${styles.submenuWrapper} ${isActive ? styles.show : ''}`}>
              <ul className={styles.submenu}>
                {item.subItems.map((subItem) => (
                  <li key={subItem.href} className={activeSection === subItem.href.replace('#', '') ? styles.currentActive : ''}>
                    <a href={subItem.href}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className={styles.submenu}>
              {item.subItems.map((subItem) => (
                <li key={subItem.href} className={activeSection === subItem.href.replace('#', '') ? styles.currentActive : ''}>
                  <a href={subItem.href}>
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )
        )}
      </li>
    );
  };

  return (
    <motion.header
      className={styles.header}
      initial="top"
      animate={scrollPosition > SCROLL_THRESHOLD ? 'scrolled' : 'top'}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">organa.global</a>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        <div className={styles.headerControls}>
          <LanguageSwitcher />
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