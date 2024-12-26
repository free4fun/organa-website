import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-64 bg-white shadow-lg h-screen">
      <nav className="mt-5">
        <Link 
          to="/" 
          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          {t('nav.home')}
        </Link>
        <Link 
          to="/dashboard" 
          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          {t('nav.dashboard')}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
