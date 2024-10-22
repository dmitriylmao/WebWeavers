import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerColumn}>
          <Image src="/images/Footer/sultan_logo.svg" alt="Логотип" width={150} height={50} className={styles.logo} />
          <p>Компания «Султан» — снабжает розничные магазины товарами "под ключ" в Кокшетау и Акмолинской области.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Введите ваш E-mail" />
            <button type="submit"></button>
            {/* Знак "больше" */}
          </form>
        </div>

        <div className={styles.footerColumn}>
          <h3>Меню сайта:</h3>
          <ul>
            <li><a href="#company">О компании</a></li>
            <li><a href="#delivery">Доставка и оплата</a></li>
            <li><a href="#return">Возврат</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Категории:</h3>
          <ul>
            <li><a href="#chemistry">Бытовая химия</a></li>
            <li><a href="#cosmetics">Косметика и гигиена</a></li>
            <li><a href="#home">Товары для дома</a></li>
            <li><a href="#children">Товары для детей и мам</a></li>
            <li><a href="#dishes">Посудa</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Скачать прайс-лист:</h3>
          <button className={styles.downloadButton}>Прайс-лист</button>
          <p>Связь в мессенджерах:</p>
          <div className={styles.messengers}>
            <Image src="/images/Footer/whatsapp_logo.svg" alt="WhatsApp" width={40} height={40} />
            <Image src="/images/Footer/telegram_logo.svg" alt="Telegram" width={40} height={40} />
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Контакты:</h3>
          <p>+7 (777) 490-00-91</p>
          <p>время работы: 9:00-20:00</p>
          <p>opt.sultan@mail.ru</p>
          <div className={styles.paymentMethods}>
            <Image src="/images/Footer/visa_logo.svg" alt="Visa" width={60} height={40} />
            <Image src="/images/Footer/mastercard_logo.svg" alt="MasterCard" width={60} height={40} />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
