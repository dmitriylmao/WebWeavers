import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '@/components/Footer/LanguageSwitcher';
import EmailInput from '@/components/Footer/EmailInput';
import useWindowSize from '@/core/hooks/useWindowSize';
import YellowButton from '@/components/UI/YellowButton/YellowButton';
import down_icon from '@/public/images/Footer/download_icon.png';
import styles from './Footer.module.css';
import SwitchThemesButton from '@/components/UI/SwitchThemeButton/SwitchThemesButton'
import { useContext } from 'react';
import ContextTheme from '@/core/hooks/ContextTheme';

const Footer = () => {
  const { isMobile } = useWindowSize();
  const value = useContext(ContextTheme);
  
  useWindowSize();
  return (
    <footer className={styles.footer}> 
      <div className={styles.container}>
        <div className={styles.company}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/images/Footer/sultan_logo.svg"
                alt="Логотип"
                width={150}
                height={50}
                className={styles.logo}
              />
            </Link>
            {isMobile ? (
              <div className={styles.button}>
                <YellowButton
                  icon={down_icon}
                  label="Прайс-лист"
                  size="sm"
                  download="./EmailInput.js"
                />
              </div>
            ) : null}
          </div>
          <p className={styles.description}>
            Компания «Султан» — снабжаем розничные магазины товарами `под ключ`
            в Кокчетаве и Акмолинской области
          </p>
          <div className={styles.near}>
            <span className={styles.sales}>Подпишись на скидки и акции</span>
            <div className={styles.email}>
              <EmailInput />
            </div>
          </div>
        </div>

        <div className={styles.menu_column}>
          <h4 className={styles.titleMenu}>Меню сайта:</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="#company">О компании</a>
            </li>
            <li className={styles.listItem}>
              <a href="#delivery">Доставка и оплата</a>
            </li>
            <li className={styles.listItem}>
              <a href="#return">Возврат</a>
            </li>
            <li className={styles.listItem}>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>

        <div className={styles.categories_column}>
          <h4 className={styles.titleCategories}>Категории:</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="#chemistry">Бытовая химия</a>
            </li>
            <li className={styles.listItem}>
              <a href="#cosmetics">Косметика и гигиена</a>
            </li>
            <li className={styles.listItem}>
              <a href="#home">Товары для дома</a>
            </li>
            <li className={styles.listItem}>
              <a href="#children">Товары для детей и мам</a>
            </li>
            <li className={styles.listItem}>
              <a href="#dishes">Посудa</a>
            </li>
          </ul>
        </div>

        <div className={styles.download_column}>
          <div>
            {isMobile ? null : (
              <>
                <div>
                  <h4 className={styles.priceList}>Скачать прайс-лист:</h4>
                  <YellowButton
                    icon={down_icon}
                    label="Прайс-лист"
                    size="md"
                    download="./EmailInput.js"
                  />
                </div>
              </>
            )}
          </div>
          <p className={styles.titleMessengers}>Связь в мессенджерах:</p>
          <div className={styles.messengers}>
            <Image
              src="/images/Footer/whatsapp_logo.svg"
              alt="WhatsApp"
              width={40}
              height={40}
            />
            <Image
              src="/images/Footer/telegram_logo.svg"
              alt="Telegram"
              width={40}
              height={40}
            />
          </div>
          <SwitchThemesButton className={styles.Switch} handleChange={() => value.handleThemeToggle(value.isDark)} isChecked={value.isDark}/>

        </div>

        <div className={styles.contactsContainer}>
          <div>
            <h4 className={styles.title}>Контакты:</h4>
            <p className={styles.phoneNumber}>+7 (777) 490-00-91</p>
            <p className={styles.jobTime}>время работы: 9:00-20:00</p>
            <p className={styles.orderCall}>Заказать звонок</p>
          </div>
          <div>
            <p className={styles.email}>opt.sultan@mail.ru</p>
            <h4 className={styles.textOnTouch}>На связи в любое время</h4>
          </div>
          <div className={styles.payments}>
            <Image
              src="/images/Footer/visa_logo.svg"
              alt="Visa"
              width={50}
              height={40}
            />
            <Image
              src="/images/Footer/mastercard_logo.svg"
              alt="MasterCard"
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
