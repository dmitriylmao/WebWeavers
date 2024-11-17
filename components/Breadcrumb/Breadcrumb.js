import styles from '@/components/Breadcrumb/Breadcrumb.module.css';
import useWindowSize from '@/core/hooks/useWindowSize';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Breadcrumb = ({ product }) => {
  const { isTablet, isMobile } = useWindowSize();
  const { t } = useTranslation('common');

  const breadcrumbItems = [
    { name: t('Main'), path: '/' },
    { name: t('Catalog'), path: '/catalog' },
    {
      name: `${product.brand} ${product.title}`,
      path: `/product/${product.id}`,
    },
  ];

  if (isMobile || isTablet) {
    return (
      <div className={styles.container}>
        <div className={styles.backButton}>
          <Link
            href="/"
            style={{ textDecoration: 'none' }}
            className={styles.backLink}
          >
            <span className={styles.backSymbol}>&lt;</span>
            <span className={styles.backText}>{t('Back')}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav aria-label="breadcrumb">
      <ul className={styles.breadcrumb}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index < breadcrumbItems.length - 1 ? (
              <Link href={item.path}>{item.name}</Link>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
