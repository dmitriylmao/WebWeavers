import React from 'react';
import styles from './FooterLaptop.module.css';
import Image from 'next/image';
import LanguageSwitcher from '@/components/Footer/LanguageSwitcher';

const FooterLaptop = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Верхняя часть с логотипом, описанием и кнопкой прайс-листа */}
        <div className={styles.topSection}>
          <img
            src="/images/Footer/sultan_logo.svg"
            alt="Логотип"
            width="120"
            height="120"
          />
          <div className={styles.companyDescription}>
            <p>
              Компания «Султан» — снабжает розничные магазины товарами "под
              ключ" в Кокшетау и Акмолинской области.
            </p>
          </div>
          <button className={styles.downloadButton}>Скачать прайс</button>
        </div>

        {/* Форма подписки */}
        <div className={styles.subscribeSection}>
          <p className={styles.subscribeText}>Подпишись на скидки и акции</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Введите ваш E-mail" />
            <button type="submit"></button>
          </form>
        </div>

        {/* Ссылки меню и категории */}
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
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
          <div className={styles.linkColumn}>
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
          <div className={styles.contactDetails}>
            <h3>Контакты:</h3>
            <p>+7 (777) 490-00-91</p>
            <p className={styles.workTime}>время работы: 9:00-20:00</p>
            <p className={styles.orderCall}>Заказать звонок</p>
            <p className={styles.mail}>opt.sultan@mail.ru</p>
            <p className={styles.alwaysOnContact}>На связи в любое время</p>

            {/* Методы оплаты под текстом "На связи в любое время" */}
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

          <div className={styles.messengerSection}>
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
    </footer>
  );
};

export default FooterLaptop;
