import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

// Función para obtener el tema inicial
const getInitialTheme = (): Theme => {
  // Si estamos en el servidor, retornar 'dark' por defecto
  if (typeof window === 'undefined') return 'dark';

  try {
    // Intentar obtener el tema guardado
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Si no hay tema guardado, usar preferencia del sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (error) {
    console.warn('Error accessing localStorage:', error);
  }

  return 'dark';
};

export const useTheme = () => {
  // Inicializar el estado con el valor del localStorage o el valor por defecto
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Efecto para manejar cambios en el tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};