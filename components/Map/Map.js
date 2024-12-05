import { useTranslation } from 'next-i18next';
import styles from '@/components/Map/Map.module.css';

export default function Map() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.container}>
      <img
        src="/images/Map/Map.png"
        alt={t('AltMapBackground')}
        className={styles.mapImage}
      />

      <div className={styles.overlay}>
        <h2>{t('Contacts')}</h2>
        <p>{t('SupplierSultan')}</p>

        <div className={styles.contactInfo}>
          <div className={styles.iconText}>
            <img
              src="/images/Map/gps.svg"
              alt={t('AltIcon')}
              className={styles.icon}
            />
            <div>
              <h3>{t('Address')}</h3>
              <p>
                {t('KokshetauTashenova')}
                {'\n'}
                {t('EasternMarket')}
              </p>
            </div>
            <div className={styles.sale}>
              <h3>{t('SalesDepartment')}</h3>
              <p>
                +7 (777) 490-00-91
                <br />
                opt.sultan@mail.ru
              </p>
            </div>
          </div>
        </div>

        <div className={styles.iconText}>
          <img
            src="/images/Map/file.svg"
            alt={t('AltIcon')}
            className={styles.icon}
          />
          <div>
            <h3>{t('TaxpayerData')}</h3>
            <p>
              {t('Katran')}
              <br />
              {t('TaxpayerNumber')}: 860113450858
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
