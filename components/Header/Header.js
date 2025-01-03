import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { menuItems } from '@/components/Header/Constants';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
import mapSrc from '@/public/images/Header/map_Icon.svg';
import postSrc from '@/public/images/Header/post_Icon.svg';
import logoSrc from '@/public/images/Header/logo.svg';
import catalogIconSrc from '@/public/images/Header/catalog_Icon.svg';
import SearchInput from '@/components/Header/SearchInput';
import personIconSrc from '@/public/images/Header/person.svg';
import priceListIconSrc from '@/public/images/Header/download_Icon.svg';
import basketIconSrc from '@/public/images/Header/basket_Icon.svg';
import blueCatalog from '@/public/images/Header/blue_catalog.svg';
import blueSearch from '@/public/images/Header/blue_search.svg';
import phoneIcon from '@/public/images/Header/phone_icon.svg';
import whitePhoneIcon from '@/public/images/Header/white_phone_icon.svg';
import styles from '@/components/Header/Header.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.DesktopContainer}>
        <div className={styles.menu}>
          <div className={styles.block}>
            <div className={styles.blockAddress}>
              <Image
                src={mapSrc}
                alt={t('AltLocationIcon')}
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.address}>
                <span className={styles.mainText}>{t('MainAddress')}</span>
                <span className={styles.subText}>{t('SubAddress')}</span>
              </div>
            </div>
            <div className={styles.blockMailinfo}>
              <Image
                src={postSrc}
                alt={t('AltEmailIcon')}
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.mailinfo}>
                <a href="mailto:opt.sultan@mail.ru" className={styles.mainText}>
                  opt.sultan@mail.ru
                </a>
                <span className={styles.subText}>{t('AlwaysAvailable')}</span>
              </div>
            </div>
          </div>

          <div className={styles.menuBlock}>
            {menuItems.map((item) => (
              <a href={item.path} className={styles.menuItem} key={item.path}>
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.hat}>
          <Link href="/" passHref>
            <div className={styles.logo}>
              <Image src={logoSrc} alt={t('AltLogo')} width={156} height={66} />
            </div>
          </Link>
          <div className={styles.catalogAndSearch}>
            <div className={styles.catalogButton}>
              <CustomButton
                label={t('Catalog')}
                size="md"
                href="/catalog"
                icon={catalogIconSrc}
              />
            </div>
            <div className={styles.search}>
              <SearchInput />
            </div>
          </div>

          <div className={styles.contactBlock}>
            <div className={styles.textBlock}>
              <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
              <div className={styles.workingHours}>
                {t('WorkingHours')}: 9:00-20:00
              </div>
              <a href="#" className={styles.orderCall}>
                {t('OrderCall')}
              </a>
            </div>

            <div className={styles.photoWrapper}>
              <div className={styles.ellipseGray}>
                <Image
                  src={personIconSrc}
                  alt={t('AltWorker')}
                  width={70}
                  height={92}
                  className={styles.personIcon}
                />
              </div>
              <div className={styles.statusIndicator}></div>
            </div>
          </div>

          <div className={styles.priceListButton}>
            <CustomButton
              icon={priceListIconSrc}
              label={t('PriceList')}
              size="md"
              download="/images/Logo_swiper/logo13.png"
            />
          </div>

          <div className={styles.cartContainer}>
            <Link href="/korZina" className={styles.iconWrapper}>
              <Image src={basketIconSrc} alt={t('AltCart')} />
            </Link>
            <span className={styles.itemCount}>3</span>
            <div className={styles.price}>
              <span className={styles.cartLabel}>{t('Cart')}</span>
              <span className={styles.cartTotal}>12 478 ₸</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.MobileContainer}>
        <div className={styles.mobileMenu}>
          <div
            className={`${styles.burgerButton} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>

          <Link className={styles.MobileLogo} href="/" passHref>
            <Image src={logoSrc} alt={t('AltLogo')} width={97} height={41} />
          </Link>

          <div className={styles.mobileCartContainer}>
            <Link href="/korZina" className={styles.mobileIconWrapper}>
              <Image src={basketIconSrc} alt={t('AltCart')} />
            </Link>
            <span className={styles.mobileItemCount}>3</span>
          </div>
        </div>

        <div className={styles.MobileHat}>
          <Link href="/catalog" className={styles.menuButton}>
            <Image
              src={blueCatalog}
              alt={t('AltCatalog')}
              width={15}
              height={15}
              className={styles.Mobicon}
            />
            {t('Catalog')}
          </Link>

          <div className={styles.separator}></div>

          <Link href="/search" className={styles.menuButton}>
            <Image
              src={blueSearch}
              alt={t('AltSearch')}
              width={15}
              height={15}
              className={styles.Mobicon}
            />
            {t('SearchIconAlt')}
          </Link>
        </div>

        {menuOpen && (
          <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
        )}
        <div className={`${styles.slideMenu} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.MobileBlock}>
            <div className={styles.blockAddress}>
              <Image
                src={mapSrc}
                alt={t('AltLocationIcon')}
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.address}>
                <span className={styles.mainText}>{t('MainAddress')}</span>
                <span className={styles.subText}>{t('SubAddress')}</span>
              </div>
            </div>
            <div className={styles.blockMailinfo}>
              <Image
                src={postSrc}
                alt={t('AltEmailIcon')}
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.mailinfo}>
                <a href="mailto:opt.sultan@mail.ru" className={styles.mainText}>
                  opt.sultan@mail.ru
                </a>
                <span className={styles.subText}>{t('AlwaysAvailable')}</span>
              </div>
            </div>
            <div className={styles.blockPhone}>
              <div className={styles.salesDepartment}>
                <Image
                  src={phoneIcon}
                  alt={t('AltLocationIcon')}
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <div className={styles.phone}>
                  <span className={styles.mainText}>
                    {t('SalesDepartment')}
                  </span>
                  <span className={styles.subText}>89508655519</span>
                  <span className={styles.subText}>
                    {t('WorkingHours')} 9-10
                  </span>
                </div>
              </div>
            </div>
            <Link href="/contact" className={styles.callButton}>
              <span className={styles.iconWrapperr}>
                <Image
                  src={whitePhoneIcon}
                  alt={t('AltTelephoneIcon')}
                  width={15}
                  height={15}
                />
              </span>
              <span className={styles.text}>{t('OrderCall')}</span>
            </Link>
          </div>

          <div className={styles.MobileMenuSite}>
            <h2 className={styles.MobileMenuTitle}> {t('SiteMenu')}: </h2>
            <div className={styles.MobileMenuSiteList}>
              {menuItems.map((item) => (
                <a href={item.path} className={styles.menuItem} key={item.path}>
                  {t(item.label)}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.MobileMenuButton}>
            <CustomButton
              icon={priceListIconSrc}
              label={t('PriceList')}
              size="lg"
              download="/images/Logo_swiper/logo13.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
