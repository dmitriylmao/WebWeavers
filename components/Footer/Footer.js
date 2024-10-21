// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>&copy; {new Date().getFullYear()} Ваше имя или название компании</p>
                <nav>
                    <ul>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contact">Контакты</a></li>
                        <li><a href="/privacy">Политика конфиденциальности</a></li>
                    </ul>
                </nav>
            </div>


            <div>
                <p>&copy; {new Date().getFullYear()} Ваше имя или название компании</p>
                <nav>
                    <ul>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contact">Контакты</a></li>
                        <li><a href="/privacy">Политика конфиденциальности</a></li>
                    </ul>
                </nav>
            </div>


        </footer>
    );
};

export default Footer;
