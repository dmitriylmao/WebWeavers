// components/banner.js
import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

export default function Banner() {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.Img}>
                <div className={styles.Blur}></div> 
            </div>
            
            <img src='images/rectangle424.png' className={styles.rect424}></img>
            <img src='images/rectangle426.png' className={styles.rect426}></img>
            <p className={styles.plus}>++</p>
            
            <p className={styles.greatDeals}> Только самые <br/>
                                              выгодные предложения </p>
            <p className={styles.DeliveryInfo}>Бесплатная доставка по<strong> Кокчетаву от 10 тыс ₸</strong></p>  

            <p className={styles.OptomDelivery}> оптом <strong>по кокчетаву и области</strong> </p>    
            <p className={styles.TypeOfProducts}> Бытовая химия, косметика <br/>и хозтовары </p>                         
        </section>
            
        
    )
}
