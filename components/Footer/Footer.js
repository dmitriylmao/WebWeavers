import styles from "./Footer.module.css"
import Image from "next/image";
import LanguageSwitcher from "@/components/Footer/LanguageSwitcher";
import EmailInput from "@/components/Footer/EmailInput";
import {useEffect, useState} from "react";



const Footer= () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 480); // Условие для мобильного экрана, например, менее 480px
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <footer className={styles.root}>
            <div className={styles.container}>
                {/* 1 коллона */}
                <div className={styles.company}>
                    <Image
                        src="/images/Footer/sultan_logo.svg"
                        alt="Логотип"
                        width={150}
                        height={50}
                        className={styles.logo}
                    />

                    {isMobile ? (
                        <div>
                            <button className={styles.downloadButton}>
                                <div className={styles.buttonContent}>
                                    <span className={styles.price}>Прайс-лист</span>
                                    <Image
                                        src="/images/Footer/download_icon.svg"
                                        alt="Логотип"
                                        width={30}
                                        height={16}
                                    />
                                </div>
                            </button>
                        </div>
                    ) : null}


                    <p className={styles.description}>
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
                        в Кокчетаве и Акмолинской области
                    </p>
                    <div className={styles.near}>
                        <span className={styles.sales}>Подпишись на скидки и акции</span>
                        <EmailInput/>
                    </div>


                </div>

                {/* 2 колонна */}
                <div className={styles.menu_column}>
                    <h4 className={styles.title}>Меню сайта:</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a href="#company">О компании</a></li>
                        <li className={styles.listItem}><a href="#delivery">Доставка и оплата</a></li>
                        <li className={styles.listItem}><a href="#return">Возврат</a></li>
                        <li className={styles.listItem}><a href="#contacts">Контакты</a></li>
                    </ul>
                </div>

                {/* 3 колонна */}
                <div className={styles.categories_column}>
                    <h4 className={styles.title}>Категории:</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a href="#chemistry">Бытовая химия</a></li>
                        <li className={styles.listItem}><a href="#cosmetics">Косметика и гигиена</a></li>
                        <li className={styles.listItem}><a href="#home">Товары для дома</a></li>
                        <li className={styles.listItem}><a href="#children">Товары для детей и мам</a></li>
                        <li className={styles.listItem}><a href="#dishes">Посудa</a></li>
                    </ul>
                </div>

                {/* 4 колонна */}
                <div className={styles.download_column}>


                    <div>
                        {isMobile ? null : ( // Используем `null` вместо пустой функции, чтобы ничего не рендерить
                            <>
                                <h4>Скачать прайс-лист:</h4>
                                <button className={styles.downloadButton}>
                                    <div className={styles.buttonContent}>
                                        <span className={styles.price}>Прайс-лист</span>
                                        <Image
                                            src="/images/Footer/download_icon.svg"
                                            alt="Логотип"
                                            width={30} // Установите фиксированную ширину
                                            height={16} // Установите фиксированную высоту
                                        />
                                    </div>
                                </button>
                            </>
                        )}
                    </div>


                    <p className={styles.titleMessengers}>Связь в мессенджерах:</p>
                    <div className={styles.messengers}>
                        <Image
                            src="/images/Footer/whatsapp_logo.svg"
                            alt="WhatsApp" width={40} height={40}
                        />
                        <Image
                            src="/images/Footer/telegram_logo.svg"
                            alt="Telegram" width={40} height={40}
                        />
                    </div>
                </div>

                {/* 5 колонна */}
                <div>
                    <h4 className={styles.title}>Контакты:</h4>
                    <div>
                    <p>+7 (777) 490-00-91</p>
                        <p>Время работы: 9:00-20:00</p>
                        <p className={styles.orderCall}>Заказать звонок</p>
                    </div>
                    <div>
                        <p>opt.sultan@mail.ru</p>
                        <h4>На связи в любое время</h4>
                    </div>
                    <div>
                        <Image src="/images/Footer/visa_logo.svg" alt="Visa" width={50} height={40}/>
                        <Image src="/images/Footer/mastercard_logo.svg" alt="MasterCard" width={50} height={40}/>
                    </div>

                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}


export default Footer;