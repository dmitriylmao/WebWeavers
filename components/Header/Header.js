import React from 'react';
import Image from 'next/image';
import mapSrc from './map_icon.svg';
import postSrc from './postIcon.svg';
import logoSrc from './logo.svg';
import iconSrc from './icon.svg';
import searchIconSrc from './search_icon.svg';
import basketIconSrc from './basket_icon.svg';
import priceListIconSrc from './priceList_icon.svg';
import personIconSrc from './personIcon.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuRect}>
        <div className={styles.menuContainer}>
          <nav className={styles.menu}>
            <a href="#" className={styles.menuItem}>
              О компании
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              Доставка и оплата
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              Возврат
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              Контакты
            </a>
          </nav>
        </div>

        {/* Блок с адресом */}
        <div className={styles.addressContainer}>
          <Image
            src={mapSrc}
            alt="Иконка карты"
            width={20}
            height={20}
            className={styles.mapIcon}
          />
          <span className={styles.mainAddress}>
            г. Кокчетав, ул. Ж. Ташенова 129Б
          </span>
          <span className={styles.subAddress}>(Рынок Восточный)</span>
        </div>

        {/* Блок с контактной информацией */}
        <div className={styles.contactContainer}>
          <Image
            src={postSrc}
            alt="Иконка почты"
            width={20}
            height={20}
            className={styles.postIcon}
          />
          <span className={styles.email}>opt.sultan@mail.ru</span>
          <span className={styles.contactText}>На связи в любое время</span>
        </div>
      </div>

      {/* Прямоугольник(тень внутри хэдера) */}
      <div className={styles.rectangle}></div>

      {/* Логотип и название */}
      <div className={styles.logo}>
        <Image
          src={logoSrc}
          alt="Султан"
          width={156} // Задаем ширину по макету
          height={66} // Задаем высоту по макету
        />
      </div>

      {/* Кнопка Каталог */}
      <button className={styles.catalogButton}>
        <span className={styles.catalogText}>Каталог</span>
        <Image
          src={iconSrc}
          alt="Иконка каталога"
          width={15}
          height={15}
          className={styles.catalogIcon} // Добавим класс для стилей
        />
      </button>

      {/* Поле поиска */}
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Поиск…"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Image
            src={searchIconSrc}
            alt="Поиск"
            width={18.35}
            height={18.35}
            className={styles.searchIcon} // Добавляем класс для иконки
          />
        </button>
      </div>

      {/* Блок контактной информации */}
      <div className={styles.contactBlock}>
        <div className={styles.textBlock}>
          <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
          <div className={styles.workingHours}>время работы: 9:00-20:00</div>
          <a href="#" className={styles.orderCall}>
            Заказать звонок
          </a>
        </div>

        <Image
          src={personIconSrc}
          alt="Работник"
          width={60}
          height={92}
          className={styles.personIcon}
        />
      </div>

      {/* Первый разделитель */}
      <div className={styles.separator1}></div>

      {/* Кнопка Прайс-лист */}
      <button className={styles.priceListButton}>
        <span className={styles.priceListText}>Прайс-лист</span>
        <Image
          src={priceListIconSrc}
          alt="Иконка прайс-листа"
          width={17}
          height={17}
          className={styles.catalogIcon} // Добавим класс для стилей
        />
      </button>

      {/* Второй разделитель */}
      <div className={styles.separator2}></div>

      {/* Корзина */}
      <div className={styles.cartContainer}>
        <div className={styles.iconWrapper}>
          <Image src={basketIconSrc} alt="Корзина" />
        </div>
        <div className={styles.itemCount}>3</div>
        <a href="#" className={styles.cartLabel}>
          Корзина
        </a>
        <span className={styles.cartTotal}>12 478 ₸</span>
      </div>

      {/* Второй прямоугольник(нижняя тень) */}
      <div className={styles.rectangleBottom}></div>
    </header>
  );
}
