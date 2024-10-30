import React from 'react';
import styles from './FooterMobile.module.css';
import Image from 'next/image';
import LanguageSwitcher from '@/components/Footer/LanguageSwitcher';

const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Горизонтальный ряд для двух колонок */}
        <div className={styles.footerRow}>
          {/* Логотип */}
          <img
            src="/images/Footer/sultan_logo.svg"
            alt="Логотип"
            width="150"
            height="150"
          />

          {/* Прайс лист */}
          <div className={styles.downloadButton}>
            <button className={styles.downloadButton}>Скачать прайс</button>
          </div>
        </div>

        <div className={styles.text}>
          <p>
            Компания «Султан» — снабжает розничные магазины товарами "под ключ"
            в Кокшетау и Акмолинской области.
          </p>
        </div>

        <div className={styles.text}>
          <p className={styles.subscribeText}>Подпишись на скидки и акции</p>
        </div>

        <div>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Введите ваш E-mail" />
            <button type="submit"></button>
          </form>
        </div>

        <div className={styles.footerRow}>
          <div className={styles.footerColumn}>
            <h3>Меню сайта:</h3>
            <ul>
              <li>
                <a href="#company">О компании</a>
              </li>
              <li>
                <a href="#delivery">Доставка и оплата</a>
              </li>
              <li>
                <a href="#return">Возврат</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Категории:</h3>
            <ul>
              <li>
                <a href="#chemistry">Бытовая химия</a>
              </li>
              <li>
                <a href="#cosmetics">Косметика и гигиена</a>
              </li>
              <li>
                <a href="#home">Товары для дома</a>
              </li>
              <li>
                <a href="#children">Товары для детей и мам</a>
              </li>
              <li>
                <a href="#dishes">Посудa</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerRow}>
          {/* Логотип */}
          <div className={styles.footerColumn}>
            <h3>Контакты:</h3>
            <p>+7 (777) 490-00-91</p>
            <p className={styles.workTime}>время работы: 9:00-20:00</p>
            <p className={styles.orderCall}>Заказать звонок</p>
            <p className={styles.mail}>opt.sultan@mail.ru</p>
            <p className={styles.alwaysOnContact}>На связи в любое время</p>

            <div className={styles.paymentMethods}>
              <Image
                src="/images/Footer/visa_logo.svg"
                alt="Visa"
                width={60}
                height={40}
              />
              <Image
                src="/images/Footer/mastercard_logo.svg"
                alt="MasterCard"
                width={60}
                height={40}
              />
            </div>
          </div>

          {/* Прайс лист */}
          <div className={styles.footerColumn}>
            <p>Связь в мессенджерах:</p>
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
            <div className={styles.language_switcher}>
              <LanguageSwitcher /> {/* TODO реализация смены языка */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
