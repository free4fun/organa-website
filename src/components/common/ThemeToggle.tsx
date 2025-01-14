import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';
import styles from '../../styles/ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeToggle;