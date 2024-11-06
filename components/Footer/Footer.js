import styles from "./Footer.module.css"
import Image from "next/image";



const Footer= () => {
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



                    <p className={styles.description}>
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
                        в Кокчетаве и Акмолинской области
                    </p>
                    <span className={styles.appeal}>Подпишись на скидки и акции</span>
                    <form className={styles.subscribe}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Введите ваш E-mail"
                        />
                        <button type="submit" className={styles.button}>
                            &gt;
                        </button>
                    </form>
                </div>

                {/* 2 колонна */}
                <div className={styles.menu_column}>
                    <h4 className={styles.title}>Меню сайта:</h4>
                    {/*className="styles.styles.item"*/}
                    <ul className={styles.list}>
                        <li><a href="#company">О компании</a></li>
                        <li><a href="#delivery">Доставка и оплата</a></li>
                        <li><a href="#return">Возврат</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </div>

                {/* 3 колонна */}
                <div className={styles.categories_column}>
                    <h4 className={styles.title}>Категории:</h4>
                    {/*className="styles.styles.item"*/}
                    <ul className={styles.list}>
                        <li><a href="#chemistry">Бытовая химия</a></li>
                        <li><a href="#cosmetics">Косметика и гигиена</a></li>
                        <li><a href="#home">Товары для дома</a></li>
                        <li><a href="#children">Товары для детей и мам</a></li>
                        <li><a href="#dishes">Посудa</a></li>
                    </ul>
                </div>

                {/* 4 колонна */}
                <div className={styles.download_column}>
                    
                    <p>Связь в мессенджерах:</p>
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
                <div >
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
                </div>
            </div>
        </footer>
    );
}


export default Footer;