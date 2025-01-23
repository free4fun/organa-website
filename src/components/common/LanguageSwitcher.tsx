import { useState, useEffect } from 'react'
import { FaGlobe } from 'react-icons/fa'
import styles from '../../styles/LanguageSwitcher.module.css'

export const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isSpanish, setIsSpanish] = useState(() => {
    // Inicializar desde localStorage, default a true (español)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language')
      return saved ? saved === 'es' : true
    }
    return true
  })

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish)
    // Guardar preferencia en localStorage
    localStorage.setItem('language', !isSpanish ? 'es' : 'en')
    // Cambiar el atributo lang del HTML
    document.documentElement.lang = !isSpanish ? 'es' : 'en'
  }

  // Establecer el idioma inicial al montar el componente


   useEffect(() => {
      setMounted(true);
      document.documentElement.lang = isSpanish ? 'es' : 'en'
    }, []);
  
    // Evitar el SSR mismatch
    if (!mounted) {
      return null;
    }
  return (
    <button 
      className={styles.languageButton}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <FaGlobe className={styles.icon} />
      <span className={styles.text}>
        {isSpanish ? 'English' : 'Español'}
      </span>
    </button>
  )
}

export default LanguageSwitcher