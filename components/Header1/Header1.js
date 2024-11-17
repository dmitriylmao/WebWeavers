import YellowButton from '../UI/YellowButton/YellowButton';
import Image from 'next/image';
import mapSrc from '@/public/images/Header/map_Icon.svg';
import postSrc from '@/public/images/Header/post_Icon.svg';
import logoSrc from '@/public/images/Header/logo.svg';
import catalogIconSrc from '@/public/images/Header/catalog_Icon.svg';
import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import SearchInput from '@/components/Header1/SearchInput';
import personIconSrc from '@/public/images/Header/person.svg';
import priceListIconSrc from '@/public/images/Header/download_Icon.svg';
import basketIconSrc from '@/public/images/Header/basket_Icon.svg';
import styles from './Header1.module.css';

export function Header1() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.block}>
            <div className={styles.blockAddress}>
              <Image
                src={mapSrc}
                alt="Location Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.address}>
                <span className={styles.mainText}>
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </span>
                <span className={styles.subText}>(Рынок Восточный)</span>
              </div>
            </div>
            <div className={styles.blockMailinfo}>
              <Image
                src={postSrc}
                alt="Email Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
              <div className={styles.mailinfo}>
                <span className={styles.mainText}>opt.sultan@mail.ru</span>
                <span className={styles.subText}>На связи в любое время</span>
              </div>
            </div>
          </div>

          <div className={styles.menuBlock}>
            <a href="#" className={`${styles.menuItem}`}>
              О компании
            </a>
            <a href="#" className={styles.menuItem}>
              Доставка и оплата
            </a>
            <a href="#" className={styles.menuItem}>
              Возврат
            </a>
            <a href="#" className={styles.menuItem}>
              Контакты
            </a>
          </div>
        </div>

        <div className={styles.hat}>
          <div className={styles.logo}>
            <Image src={logoSrc} alt="Лого" width={156} height={66} />
          </div>

          <div className={styles.catalogButton}>
            <YellowButton
              label="Каталог"
              size="md"
              href="/catalog"
              icon={catalogIconSrc}
            />
          </div>

          <div className={styles.search}>
            <SearchInput />
          </div>

          <div className={styles.contactBlock}>
            <div className={styles.textBlock}>
              <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
              <div className={styles.workingHours}>
                время работы: 9:00-20:00
              </div>
              <a href="#" className={styles.orderCall}>
                Заказать звонок
              </a>
            </div>

            <div className={styles.photoWrapper}>
              <div className={styles.ellipseGray}></div>
              <Image
                src={personIconSrc}
                alt="Работник"
                width={70}
                height={92}
                className={styles.personIcon}
              />
              <div className={styles.statusIndicator}></div>
            </div>
          </div>

          <div className={styles.priceListButton}>
            <YellowButton
              icon={priceListIconSrc}
              label="Прайс-лист"
              size="md"
              download="./EmailInput.js"
            />
          </div>

          <div className={styles.cartContainer}>
            <a href="#" className={styles.iconWrapper}>
              <Image src={basketIconSrc} alt="Корзина" />
            </a>
            <div className={styles.itemCount}>3</div>
            <div className={styles.price}>
              <span className={styles.cartLabel}>Корзина</span>
              <span className={styles.cartTotal}>12 478 ₸</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
