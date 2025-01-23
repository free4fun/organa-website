import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// Definimos los idiomas soportados como un tipo
const SUPPORTED_LANGUAGES = ['es', 'en'] as const;
type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

interface UseTranslationsReturn {
  currentLanguage: string;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>;
  languages: SupportedLanguage[];
}

export const useTranslations = (): UseTranslationsReturn => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: SupportedLanguage): Promise<void> => {
    try {
      await i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Filtramos los idiomas disponibles
  const availableLanguages = SUPPORTED_LANGUAGES.filter((lng: SupportedLanguage) => 
    i18next.services.backendConnector.backends[0].data[lng]
  );

  return {
    currentLanguage: i18n.language as SupportedLanguage,
    changeLanguage,
    languages: availableLanguages
  };
};