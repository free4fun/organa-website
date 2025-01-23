import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import styles from '../styles/NotFound.module.css';

const NotFound: FC = () => {
  const { t } = useTranslation(['errors', 'common']);

  return (
    <>
      <Helmet>
        <title>{t('errors:404.metaTitle')}</title>
        <meta name="description" content={t('errors:404.metaDescription')} />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.backgroundNumber}>
              {t('errors:404.number')}
            </div>
            <h1 className={styles.overlayTitle}>
              {t('errors:404.title')}
            </h1>
          </div>
          
          <div className={styles.messageContainer}>
            <p className={styles.message}>
              {t('errors:404.message')}
            </p>
            
            <Link to="/" className={styles.homeButton}>
              <FaHome className={styles.homeIcon} />
              {t('errors:404.buttonText')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;