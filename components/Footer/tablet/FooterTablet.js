import React from 'react';
import styles from './FooterTablet.module.css';
import Image from 'next/image';
import LanguageSwitcher from '@/components/Footer/LanguageSwitcher';

const FooterTablet = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Верхняя секция с логотипом и кнопкой прайс-листа */}
        <div className={styles.topSection}>
          <img
            src="/images/Footer/sultan_logo.svg"
            alt="Логотип"
            width="120"
            height="120"
          />
          <button className={styles.downloadButton}>Скачать прайс</button>
        </div>

        {/* Описание компании и подписка */}
        <p className={styles.description}>
          Компания «Султан» — снабжает розничные магазины товарами `под ключ` в
          Кокшетау и Акмолинской области.
        </p>
        <p className={styles.subscribeText}>Подпишитесь на скидки и акции</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Введите ваш E-mail" />
          <button type="submit"></button>
        </form>

        {/* Основной контент */}
        <div className={styles.mainContent}>
          {/* Меню сайта и категории */}
          <div className={styles.linksSection}>
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

          {/* Контакты и мессенджеры */}
          <div className={styles.contactSection}>
            <div className={styles.footerColumn}>
              <h3>Контакты:</h3>
              <p>+7 (777) 490-00-91</p>
              <p className={styles.workTime}>время работы: 9:00-20:00</p>
              <p className={styles.orderCall}>Заказать звонок</p>
              <p className={styles.mail}>opt.sultan@mail.ru</p>
              <p className={styles.alwaysOnContact}>На связи в любое время</p>

              {/* Способы оплаты под контактами */}
              <div className={styles.paymentMethods}>
                <Image
                  src="/images/Footer/visa_logo.svg"
                  alt="Visa"
                  width={40}
                  height={30}
                />
                <Image
                  src="/images/Footer/mastercard_logo.svg"
                  alt="MasterCard"
                  width={40}
                  height={30}
                />
              </div>
            </div>

            <div className={styles.footerColumn}>
              <p>Связь в мессенджерах:</p>
              <div className={styles.messengers}>
                <Image
                  src="/images/Footer/whatsapp_logo.svg"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                />
                <Image
                  src="/images/Footer/telegram_logo.svg"
                  alt="Telegram"
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.languageSwitcher}>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTablet;
