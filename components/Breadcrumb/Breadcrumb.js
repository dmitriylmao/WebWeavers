import styles from '@/components/Breadcrumb/Breadcrumb.module.css';
import useWindowSize from '@/core/hooks/useWindowSize';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Breadcrumb = ({ breadcrumbItems = [] }) => {
  const { isTablet, isMobile } = useWindowSize();
  const { t } = useTranslation('common');

  if (isMobile || isTablet) {
    const previousPath =
      breadcrumbItems.length > 1
        ? breadcrumbItems[breadcrumbItems.length - 2]?.path
        : '/';
    return (
      <div className={styles.container}>
        <div className={styles.backButton}>
          <Link
            href={previousPath}
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

  if (breadcrumbItems.length === 0) return null;
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
