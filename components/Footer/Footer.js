import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@/components/Footer/LanguageSwitcher';
import EmailInput from '@/components/Footer/EmailInput';
import useWindowSize from '@/core/hooks/useWindowSize';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
import down_icon from '@/public/images/Footer/download_icon.png';
import SwitchThemesButton from '@/components/UI/SwitchThemeButton/SwitchThemesButton';
import ContextTheme from '@/core/hooks/ContextTheme';
import { menuItems, categories } from '@/components/Footer/Constants';
import styles from '@/components/Footer/Footer.module.css';

const Footer = () => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslation('common');
  const value = useContext(ContextTheme);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.company}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/images/Footer/sultan_logo.svg"
                alt={t('AltLogo')}
                width={150}
                height={50}
                className={styles.logo}
              />
            </Link>
            {isMobile ? (
              <div className={styles.button}>
                <CustomButton
                  icon={down_icon}
                  label={t('PriceList')}
                  size="sm"
                  download="/images/Logo_swiper/logo13.png"
                />
              </div>
            ) : null}
          </div>
          <p className={styles.description}>{t('DescriptionOfTheCompany')}</p>
          <div className={styles.near}>
            <span className={styles.sales}>{t('SubscribeToDiscount')}</span>
            <div className={styles.email}>
              <EmailInput />
            </div>
          </div>
        </div>

        <div className={styles.menu_column}>
          <h4 className={styles.titleMenu}>{t('SiteMenu')}:</h4>
          <ul className={styles.list}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.listItem}>
                <a href={item.href}>{t(item.label)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.categoriesColumn}>
          <h4 className={styles.titleCategories}>{t('Categories')}:</h4>
          <ul className={styles.list}>
            {categories.map((category) => (
              <li key={category.href} className={styles.listItem}>
                <a href={category.href}>{t(category.label)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.downloadColumn}>
          <div>
            {isMobile ? null : (
              <div>
                <h4 className={styles.priceList}>{t('DowloadPrice')}:</h4>
                <CustomButton
                  icon={down_icon}
                  label={t('PriceList')}
                  size="md"
                  download="/images/Logo_swiper/logo13.png"
                />
              </div>
            )}
          </div>
          <p className={styles.titleMessengers}>{t('Communication')}:</p>
          <div className={styles.messengers}>
            <Image
              src="/images/Footer/whatsapp_logo.svg"
              alt={t('AltWhatsUp')}
              width={40}
              height={40}
            />
            <Image
              src="/images/Footer/telegram_logo.svg"
              alt={t('AltTelegram')}
              width={40}
              height={40}
            />
          </div>
          <SwitchThemesButton
            className={styles.Switch}
            handleChange={() => value.handleThemeToggle(value.isDark)}
            isChecked={value.isDark}
          />
        </div>

        <div className={styles.contactsContainer}>
          <div>
            <h4 className={styles.title}>{t('Contacts')}:</h4>
            <p className={styles.phoneNumber}>+7 (777) 490-00-91</p>
            <p className={styles.jobTime}>{t('WorkingHours')}: 9:00-20:00</p>
            <p className={styles.orderCall}>{t('OrderCall')}</p>
          </div>
          <div>
            <p className={styles.email}>opt.sultan@mail.ru</p>
            <h4 className={styles.textOnTouch}>{t('TouchAnyTime')}</h4>
          </div>
          <div className={styles.payments}>
            <Image
              src="/images/Footer/visa_logo.svg"
              alt={t('AltVisa')}
              width={50}
              height={40}
            />
            <Image
              src="/images/Footer/mastercard_logo.svg"
              alt={t('AltMasterCard')}
              width={50}
              height={40}
            />
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
