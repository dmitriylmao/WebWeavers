import Image from 'next/image';
import mapSrc from '@/public/images/Header/map_Icon.svg';
import postSrc from '@/public/images/Header/post_Icon.svg';
import logoSrc from '@/public/images/Header/logo.svg';
import catalogIconSrc from '@/public/images/Header/catalog_Icon.svg';
import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import personIconSrc from '@/public/images/Header/person.svg';
import priceListIconSrc from '@/public/images/Header/download_Icon.svg';
import basketIconSrc from '@/public/images/Header/basket_Icon.svg';
import styles from './Header1.module.css';
 
export function Header1() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.block}>
                    <Image
                        src={mapSrc}
                        alt="Location Icon"
                        width={20}
                        height={20}
                        className={styles.icon}
                    />
                    <div>
                        <span className={styles.mainText}>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                        <span className={styles.subText}>(Рынок Восточный)</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image
                        src={postSrc}
                        alt="Email Icon"
                        width={20}
                        height={20}
                        className={styles.icon}
                    />
                    <div>
                        <span className={styles.mainText}>opt.sultan@mail.ru</span>
                        <span className={styles.subText}>На связи в любое время</span>
                    </div>
                </div>

                <div className={styles.menuBlock}>
                    <a href="#" className={`${styles.menuItem}`}>О компании</a>
                    <a href="#" className={styles.menuItem}>Доставка и оплата</a>
                    <a href="#" className={styles.menuItem}>Возврат</a>
                    <a href="#" className={styles.menuItem}>Контакты</a>
                </div>

            </div>



            <div className={styles.hat}>
                <div className={styles.logo}>
                    <Image
                        src={logoSrc}
                        alt="Лого"
                        width={156}
                        height={66}
                    />
                </div>

                <button className={styles.catalogButton}>
                    <span className={styles.buttonText}>Каталог</span>
                    <Image
                        src={catalogIconSrc}
                        alt="Иконка каталога"
                        width={15}
                        height={15}
                    />
                </button>

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

                <div className={styles.contactBlock}>
                    <div className={styles.textBlock}>
                        <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
                        <div className={styles.workingHours}>время работы: 9:00-20:00</div>
                        <a href="#" className={styles.orderCall}>Заказать звонок</a>
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

                <div className={styles.cartContainer}>
                    <a href="#" className={styles.iconWrapper}>
                        <Image src={basketIconSrc} alt="Корзина" />
                    </a>
                    <div className={styles.itemCount}>3</div>
                    <span className={styles.cartLabel}>Корзина</span>
                    <span className={styles.cartTotal}>12 478 ₸</span>
                </div>

            </div>

        </header>

    );
};