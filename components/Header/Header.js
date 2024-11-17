import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common'); 
  return (
    <header className={styles.header}>
      <div className={styles.menuRect}>
        <div className={styles.menuContainer}>
          <nav className={styles.menu}>
            <a href="#" className={styles.menuItem}>
              {t('AboutCompany')}
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              {t('DeliveryAndPayment')}
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              {t('Return')}
            </a>
            <div className={styles.divider}></div>
            <a href="#" className={styles.menuItem}>
              {t('Contacts')}
            </a>
          </nav>
        </div>

        {/* Блок с адресом */}
        <div className={styles.addressContainer}>
          <Image
            src={mapSrc}
            alt={t('MapIconAlt')}
            width={20}
            height={20}
            className={styles.mapIcon}
          />
          <span className={styles.mainAddress}>{t('KokshetauTashenova')}</span>
          <span className={styles.subAddress}>{t('EasternMarket')}</span>
        </div>

        {/* Блок с контактной информацией */}
        <div className={styles.contactContainer}>
          <Image
            src={postSrc}
            alt={t('PostIconAlt')}
            width={20}
            height={20}
            className={styles.postIcon}
          />
          <span className={styles.email}>{'opt.sultan@mail.ru'}</span>
          <span className={styles.contactText}>{t('AlwaysAvailable')}</span>
        </div>
      </div>

      {/* Прямоугольник(тень внутри хэдера) */}
      <div className={styles.rectangle}></div>

      {/* Логотип и название */}
      <div className={styles.logo}>
        <Image
          src={logoSrc}
          alt={t('LogoAlt')}
          width={156}
          height={66}
        />
      </div>

      {/* Кнопка Каталог */}
      <button className={styles.catalogButton}>
        <span className={styles.catalogText}>{t('Catalog')}</span>
        <Image
          src={iconSrc}
          alt={t('CatalogIconAlt')}
          width={15}
          height={15}
          className={styles.catalogIcon}
        />
      </button>

      {/* Поле поиска */}
      <div className={styles.search}>
        <input
          type="text"
          placeholder={t('SearchPlaceholder')}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Image
            src={searchIconSrc}
            alt={t('SearchIconAlt')}
            width={18.35}
            height={18.35}
            className={styles.searchIcon}
          />
        </button>
      </div>

      {/* Блок контактной информации */}
      <div className={styles.contactBlock}>
        <div className={styles.textBlock}>
          <div className={styles.phoneNumber}>{'+7 (777) 490-00-91'}</div>
          <div className={styles.workingHours}>{t('WorkingHours')(': 9:00-20:00')}</div>
          <a href="#" className={styles.orderCall}>
            {t('OrderCall')}
          </a>
        </div>
        <Image
          src={personIconSrc}
          alt={t('PersonIconAlt')}
          width={60}
          height={92}
          className={styles.personIcon}
        />
      </div>

      {/* Первый разделитель */}
      <div className={styles.separator1}></div>

      {/* Кнопка Прайс-лист */}
      <button className={styles.priceListButton}>
        <span className={styles.priceListText}>{t('PriceList')}</span>
        <Image
          src={priceListIconSrc}
          alt={t('PriceListIconAlt')}
          width={17}
          height={17}
          className={styles.catalogIcon}
        />
      </button>

      {/* Второй разделитель */}
      <div className={styles.separator2}></div>

      {/* Корзина */}
      <div className={styles.cartContainer}>
        <div className={styles.iconWrapper}>
          <Image src={basketIconSrc} alt={t('BasketIconAlt')} />
        </div>
        <div className={styles.itemCount}>3</div>
        <a href="#" className={styles.cartLabel}>
          {t('Cart')}
        </a>
        <span className={styles.cartTotal}>12 478 ₸</span>
      </div>

      {/* Второй прямоугольник(нижняя тень) */}
      <div className={styles.rectangleBottom}></div>
    </header>
  );
}
