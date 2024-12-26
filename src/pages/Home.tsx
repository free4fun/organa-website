import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{t('welcome.title')}</h1>
      <p className="mt-2">{t('welcome.description')}</p>
    </div>
  );
};

export default Home;
